
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Header } from '../../components/Header/Header';
import { Search } from '../../components/Search/Search';
import { UserResultList } from '../../components/UserList/UserResultList';
import { Pagination } from '../../components/Pagination/Pagination';
import { Filter } from '../../components/Filter/Filter';
import * as S from '../main/main.style';
import { ErrorNotFound } from '../errorNotFound/errorNotFound';
//import Skeleton from 'react-loading-skeleton';
import { Skeleton } from '../../components/Skeletons/Skeleton';

export function Main() {
  const [login, setLogin] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalUsers, setTotalUsers] = useState('');
  const [usersPerPage] = useState(12);
  const [sort, setSort] = useState('desc');
  const [error, setError] = useState('');

  useEffect(() => {
    const getUserByLogin = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://api.github.com/search/users?q=${login}&per_page=${usersPerPage}&page=${currentPage}&sort=repositories&order=${sort}`
        );
        console.log(response.data);
        setUsers(response.data.items);
        setTotalUsers(
          response.data.total_count <= 1000 ? response.data.total_count : 1000
        );
      } catch (error) {
        setError(getErrorMessage(error.response.status));
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (login === '') {
      return;
    }
    getUserByLogin();
  }, [login, currentPage, usersPerPage, sort]);

  const paginate = (page) => setCurrentPage(page);

  const getErrorMessage = (statusCode) => {
    const ErrorsMessages = {
      403: 'Превышен лимит запросов. Попробуйте снова через несколько минут.',
      404: 'Страница не найдена...',
      500: 'Внутренняя ошибка сервера. Перезапустите приложение.',
      499: 'Неизвестная ошибка клиента.',
      599: 'Неизвестная ошибка сервера.',
      0: 'Абсолютно неизвестная ошибка.',
    };

    return ErrorsMessages[statusCode] || 'Что-то пошло не так.';
  };

  if (error) {
    return <ErrorNotFound errorMessage={error} />;
  }

  return (
    <S.MainWrapper>
      <Header />
      <Search setLogin={setLogin} setError={setError} />
      {users?.length >= 1 && (
        <div>
          <Filter setSort={setSort} />
          {loading && <Skeleton/>}
          <UserResultList data={users} />
          <Pagination
            usersPerPage={usersPerPage}
            totalUsers={totalUsers}
            paginate={paginate}
          />
        </div>
      )}
    </S.MainWrapper>
  );
}
export default Main;