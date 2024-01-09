import * as S from './UserItem.style';
import React, { useCallback, useEffect } from 'react';
import api from '../../api';
import { setUserData, setInfo, setErrorMsg, addToCache, clearCache, selectUserItem } from '../../Slices/userItemSlice';
import { useDispatch, useSelector } from 'react-redux';

export function UserItem(props) {
  const dispatch = useDispatch();
  const { userData, info, errorMsg, cache } = useSelector(selectUserItem);

  const getUserData = useCallback(async (login) => {
    if (cache[login]) {
      dispatch(setUserData(cache[login]));
    } else {
      try {
        const response = await api.get(`/users/${login}`); // Помещаем путь в кавычки
        const userData = {
          repoNumbers: response.data.public_repos,
          followers: response.data.followers,
          location: response.data.location === null ? 'не указана' : response.data.location,
          created_at: response.data.created_at,
        };
        dispatch(setUserData(userData));
        dispatch(addToCache({ login, userData })); // Сохраняем данные в кэш
      } catch (error) {
        dispatch(setErrorMsg('Ошибка получения информации'));
      }
    }
  }, [cache, dispatch]);

  const onHandleClick = useCallback(() => {
    dispatch(setErrorMsg(''));
    if (info) {
      dispatch(setInfo(false)); // Скрываем информацию, если уже отображена
    } else {
      getUserData(props.login);
      dispatch(setInfo(true)); // Показываем информацию
    }
  }, [dispatch, getUserData, info, props.login]);

  useEffect(() => {
    dispatch(clearCache(props.login)); // Передаем login в clearCache
  }, [dispatch, props.login]);

  return (
    <S.UserWrapper>
      <S.UserTitle onClick={onHandleClick}>{props.login}</S.UserTitle>
      {info && (props.login === userData.login) && (
        <S.UserInfo>
          <S.UserInfoImg src={props.avatar} alt="pic" />
          <S.UserInfoLink href={props.link}>
            Перейти в профиль GITHUB {props.login}
          </S.UserInfoLink>
          <S.UserInfoText>
            {errorMsg && <S.UserInfoError>{errorMsg}</S.UserInfoError>}
            {!errorMsg && (
              <>
                <S.UserInfoReg>
                  Дата регистрации-{' '}
                  <S.UserInfoNum>
                    {new Date(userData.created_at).toLocaleString('ru', {
                      year: 'numeric',
                      month: 'long'
                    })}
                  </S.UserInfoNum>{' '}
                </S.UserInfoReg>
                <S.UserInfoRepo>
                  Количество репозиториев -{' '}
                  <S.UserInfoNum>{userData.repoNumbers}</S.UserInfoNum>{' '}
                </S.UserInfoRepo>
                <S.UserInfoFollowers>
                  Количество подписчиков - <S.UserInfoNum>{userData.followers}</S.UserInfoNum>{' '}
                </S.UserInfoFollowers>
                <S.UserInfoCountry>
                  Страна - <S.UserInfoNum>{userData.location}</S.UserInfoNum>{' '}
                </S.UserInfoCountry>
              </>
            )}
          </S.UserInfoText>
        </S.UserInfo>
      )}
    </S.UserWrapper>
  );
}