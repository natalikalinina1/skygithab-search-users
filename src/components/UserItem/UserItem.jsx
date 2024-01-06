import * as S from './UserItem.style';
import React, { useState, useCallback } from 'react';
import axios from 'axios';

export function UserItem(props) {
  
  const [repoNumbers, setRepoNumbers] = useState('');
  const [followers, setFollowers] = useState('');
  const [location, setLocation] = useState('');
  const [created_at, setCreated_at] = useState('');
  const [info, setInfo] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const getUserRepos = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${props.login}`
      );
  
      setRepoNumbers(response.data.public_repos);
    } catch (error) {
      setErrorMsg('Ошибка получения информации о репозиториях');
    }
  }, [props.login]);

  const getUserFollowers = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${props.login}`
      );
  
      setFollowers(response.data.followers);
    } catch (error) {
      setErrorMsg('Ошибка получения подписчиков');
    }
  }, [props.login]);

  const getCountryUser = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${props.login}`
      );

      setLocation(
        response.data.location === null ? 'не указана' : response.data.location
      );
    } catch (error) {
      setErrorMsg('Ошибка получения информации о стране');
    }
  }, [props.login]);

  const getUserTimeRegister = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${props.login}`
      );
   
      setCreated_at(response.data.created_at);
    } catch (error) {
      setErrorMsg('Ошибка получения информации о дате регистрации');
    }
  }, [props.login]);

  const onHandleClick = useCallback(() => {
    setErrorMsg('');
    getUserRepos();
    getUserFollowers();
    getCountryUser();
    getUserTimeRegister();
    if (info === true) {
      setInfo(false);
      return;
    }
    setInfo(true);
  }, [ info, getUserFollowers(),
    getUserRepos(),
    getCountryUser(),
    getUserTimeRegister(),
  ]);

  return (
    <S.UserWrapper>
      <S.UserTitle onClick={onHandleClick}>{props.login}</S.UserTitle>
      {info === true && (
        <S.UserInfo>
          <S.UserInfoImg src={props.avatar} alt="pic" />
          <S.UserInfoLink href={props.link}>
          Перейти в профиль GITHUB {props.login}
          </S.UserInfoLink>
          <S.UserInfoText>
            {errorMsg && (
              <S.UserInfoError>
                {errorMsg}
              </S.UserInfoError>
            )}
            {!errorMsg && (
              <>
                <S.UserInfoReg>
                  Дата регистрации-{' '}
                  <S.UserInfoNum>
                    {new Date(created_at).toLocaleString('ru', {
                      year: 'numeric',
                      month: 'long',
                    })}
                  </S.UserInfoNum>{' '}
                </S.UserInfoReg>
                <S.UserInfoRepo>
                  Количество репозиториев -{' '}
                  <S.UserInfoNum>{repoNumbers}</S.UserInfoNum>{' '}
                </S.UserInfoRepo>
                <S.UserInfoFollowers>
                  Количество подписчиков - <S.UserInfoNum> {followers}</S.UserInfoNum>{' '}
                </S.UserInfoFollowers>
                <S.UserInfoCountry>
                  Страна - <S.UserInfoNum> {location}</S.UserInfoNum>{' '}
                </S.UserInfoCountry>
              </>
            )}
          </S.UserInfoText>
        </S.UserInfo>
      )}
    </S.UserWrapper>
  );
}