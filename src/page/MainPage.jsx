import React from 'react';
import Title from '../components/Title/Title'
import Search from '../components/Search/Search'
import Filter from '../components/Filter/Filter'
import UserList from '../components/UserForm/UserList'
import Pagination from '../components/Pagination/Pagination';
import * as S from './MainPage.style'


export function MainPage() {
  return (
    <S.MainConteiner>
      <Title />
      <Search />

      <div>
        <Filter/>
        <UserList/>
        <Pagination/>
      </div>
    </S.MainConteiner>
  );
}

export default MainPage