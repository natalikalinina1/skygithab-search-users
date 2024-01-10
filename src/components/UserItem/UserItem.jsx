import React, { useState, useCallback, useEffect } from 'react';
import * as S from './UserItem.style';
import api from '../../api';

export function UserItem(props) {
  const [repoNumbers, setRepoNumbers] = useState('');
  const [followers, setFollowers] = useState('');
  const [location, setLocation] = useState('');
  const [created_at, setCreated_at] = useState('');
  const [info, setInfo] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const fetchData = useCallback(async () => {
    try {
      const response = await api.get(`/users/${props.login}`);

      if (response.status === 200) {
        setRepoNumbers(response.data.public_repos);
        setFollowers(response.data.followers);
        setLocation(response.data.location || 'не указана');
        setCreated_at(response.data.created_at);
        setInfo(true);
      } else if (response.status === 304) {
        setErrorMsg('Данные не изменились');
      }
    } catch (error) {
      if (error.response && error.response.status === 403) {
        setErrorMsg('Доступ запрещен');
      } else if (error.response && error.response.status === 422) {
        setErrorMsg('Ошибка валидации или запрос отправлен слишком часто');
      } else if (error.response && error.response.status === 503) {
        setErrorMsg('Сервис временно недоступен');
      } else {
        setErrorMsg('Произошла ошибка при получении информации');
      }
    }
  }, [props.login]);

  const toggleInfo = useCallback(() => {
    setErrorMsg('');
    if (info) {
      setInfo(false);
    } else {
      fetchData();
    }
  }, [info, fetchData]);

  useEffect(() => {
    if (info) {
      fetchData();
    }
  }, [info, fetchData]);

  return (
    <S.UserWrapper>
      <S.UserTitle onClick={toggleInfo}>{props.login}</S.UserTitle>
      {info && (
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
                  Дата регистрации -{' '}
                  <S.UserInfoNum>
                    {new Date(created_at).toLocaleString('ru', {
                      year: 'numeric',
                      month: 'long',
                    })}
                  </S.UserInfoNum>{' '}
                </S.UserInfoReg>
                <S.UserInfoRepo>
                  Количество репозиториев -{' '}
                  <S.UserInfoNum>{repoNumbers}</S.UserInfoNum>
                </S.UserInfoRepo>
                <S.UserInfoFollowers>
                  Количество подписчиков - <S.UserInfoNum>{followers}</S.UserInfoNum>
                </S.UserInfoFollowers>
                <S.UserInfoCountry>
                  Страна - <S.UserInfoNum>{location}</S.UserInfoNum>
                </S.UserInfoCountry>
              </>
            )}
          </S.UserInfoText>
        </S.UserInfo>
      )}
    </S.UserWrapper>
  );
}
