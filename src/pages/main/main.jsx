
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setLogin,
  setUsers,
  setLoading,
  setCurrentPage,
  setTotalUsers,
  setSort,
  setError,
  selectUsers,
} from '../../Slices/userSlice';
import { Header } from '../../components/Header/Header';
import { Search } from '../../components/Search/Search';
import { UserResultList } from '../../components/UserList/UserResultList';
import { Pagination } from '../../components/Pagination/Pagination';
import { Filter } from '../../components/Filter/Filter';
import * as S from '../main/main.style';
import ErrorNotFound from '../errorNotFound/errorNotFound';
import Skeleton from '../../components/Skeletons/Skeleton';
import api from '../../api'; 

export function Main() {
  const dispatch = useDispatch();
  const {
    login,
    users,
    loading,
    currentPage,
    totalUsers,
    usersPerPage,
    sort,
    error,
  } = useSelector(selectUsers);

  useEffect(() => {
    const getUserByLogin = async () => {
      try {
        dispatch(setLoading(true));
        const response = await api.get(`/search/users?q=${login}&per_page=${usersPerPage}&page=${currentPage}&sort=repositories&order=${sort}`);
        dispatch(setUsers(response.data.items));
        dispatch(setTotalUsers(response.data.total_count <= 1000 ? response.data.total_count : 1000));
      } catch (error) {
        dispatch(setError(getErrorMessage(error.response?.status)));
      } finally {
        dispatch(setLoading(false));
      }
    };

    if (login === '') {
      return;
    }

    getUserByLogin();
  }, [dispatch, login, currentPage, usersPerPage, sort]);

  const paginate = (page) => dispatch(setCurrentPage(page));

  const getErrorMessage = (statusCode) => {
    const errorsMessages = {
      403: 'Превышен лимит запросов. Попробуйте снова через несколько минут.',
      404: 'Страница не найдена...',
      500: 'Внутренняя ошибка сервера. Перезапустите приложение.',
      499: 'Неизвестная ошибка клиента.',
      599: 'Неизвестная ошибка сервера.',
      0: 'Абсолютно неизвестная ошибка.',
    };

    return errorsMessages[statusCode] || 'Что-то пошло не так.';
  };

  if (error) {
    return <ErrorNotFound errorMessage={error} />;
  }

  return (
    <S.MainWrapper>
      <Header />
      <Search setLogin={(value) => dispatch(setLogin(value))} setError={(message) => dispatch(setError(message))} />
      {users.length >= 1 && (
        <div>
          <Filter setSort={(value) => dispatch(setSort(value))} />
          {loading ?
            <div style={{ marginTop: '60px' }}>
              <Skeleton />
            </div> :
            <>
              <UserResultList data={users} />
              <Pagination
                usersPerPage={usersPerPage}
                totalUsers={totalUsers}
                paginate={paginate}
              />
            </>}
        </div>
      )}
    </S.MainWrapper>
  );
}

export default Main;

