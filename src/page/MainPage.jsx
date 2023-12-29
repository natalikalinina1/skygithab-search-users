import React from 'react';
import Title from '../components/Title/Title'
import Search from '../components/Search/Search'
import Filter from '../components/Filter/Filter'
import UserList from '../components/Filter/Filter'
import Pagination from '../components/Pagination/Pagination';



export function MainPage() {
  return (
    <div>
      <Title />
      <Search />

      <div>
        <Filter />
        <UserList />
        <Pagination/>
      </div>
    </div>
  );
}

export default MainPage