
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Header } from '../components/Header/Header';
import { Search } from '../components/Search/Search';
import { UserResultList } from '../components/UserList/UserResultList';
import { Pagination } from '../components/Pagination/Pagination';
import { Filter } from '../components/Filter/Filter';
import * as S from './main.style'




export function Main() {

  const [login, setLogin] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalUsers, setTotalUsers] = useState('')
  const [usersPerPage] = useState(12);
  const [sort, setSort] = useState('desc')

  useEffect(() => {
    const getUserByLogin = async () => {

      const response = await axios.get(`https://api.github.com/search/users?q=${login}&per_page=${usersPerPage}&page=${currentPage}&sort=repositories&order=${sort}`);
      console.log(response.data);
      setLoading(true);
      setUsers(response.data.items);
      setTotalUsers(response.data.total_count <= 1000 ? response.data.total_count : 1000)
      setLoading(false)
    }
    if(login === '') {
      return;
    }
    getUserByLogin();
  }, [login, currentPage, usersPerPage, sort]);
  
  const lastUserIndex = currentPage * usersPerPage;
  const firstUserIndex = lastUserIndex - usersPerPage;
  const currentUser = users.slice(firstUserIndex, lastUserIndex)


  const paginate = page => setCurrentPage(page);

  console.log(currentPage);
  console.log(currentUser);
  return (
    <S.MainWrapper>
      <Header />
      <Search setLogin={setLogin}/>
      {loading && <S.Loader></S.Loader>}
      {users?.length>=1 && 
        <div>
          <Filter setSort={setSort}/>
          
          <UserResultList data={users}/>
          <Pagination usersPerPage={usersPerPage} totalUsers={totalUsers} paginate={paginate}/>
        </div>
      }
      
    </S.MainWrapper>

  );
}
export default Main;