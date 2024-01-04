import * as S from './UserItem.style';
import React, { useState, useCallback } from 'react';
import axios from 'axios';

export function UserItem(props) {

  const [repoNumbers, setRepoNumbers] = useState('');
  const [followers, setFollowers] = useState('');
  const [location, setLocation] = useState('');

  const getUserRepos = useCallback(async () => {
    console.log(props.login);
    const response = await axios.get(
      `https://api.github.com/users/${props.login}`
    );
    console.log(response.data);
    setRepoNumbers(response.data.public_repos);
  }, [props.login]);

  const getUserFollowers = useCallback(async () => {
    const response = await axios.get(
      `https://api.github.com/users/${props.login}`
    );
    console.log(response.data);
    setFollowers(response.data.followers);
  }, [props.login]);

  const getCountryUser = useCallback(async () => {
    const response = await axios.get(
      `https://api.github.com/users/${props.login}`
    );
    console.log(response.data);
    setLocation(
      response.data.location === null ? 'не указана' : response.data.location
    );
  }, [props.login]);

  const onHandleClick = useCallback(() => {
    getUserRepos();
    getUserFollowers();
    getCountryUser();
  }, [ getUserFollowers(), getUserRepos(), getCountryUser()]);

  return (
    <S.UserWrapper>
      <S.UserTitle onClick={onHandleClick}>{props.login}</S.UserTitle>
     
      <S.UserInfo>
        <S.UserInfoImg src={props.avatar} alt="pic" />
        <S.UserInfoLink href={props.link}>
            Перейти в профиль GITHUB {props.login}
        </S.UserInfoLink>
        <S.UserInfoText>
          <S.UserInfoRepo>
              Количество репозиториев -{' '}
            <S.UserInfoNum>{repoNumbers}</S.UserInfoNum>{' '}
          </S.UserInfoRepo>
          <S.UserInfoFollowers>
              Количество подписчиков -{' '}
            <S.UserInfoNum> {followers}</S.UserInfoNum>{' '}
          </S.UserInfoFollowers>
          <S.UserInfoCountry>
              Страна - <S.UserInfoNum> {location}</S.UserInfoNum>{' '}
          </S.UserInfoCountry>
        </S.UserInfoText>
      </S.UserInfo>
    
    </S.UserWrapper>
  );
}
