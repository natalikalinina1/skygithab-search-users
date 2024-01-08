import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../../Slices/userSlice';
import * as S from './Pagination.style';

export function Pagination({ usersPerPage, totalUsers, paginate }) {
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(7);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
  const [pageNumberLimit] = useState(7);
  const dispatch = useDispatch();
  const { currentPage } = useSelector((state) => state.users);
  const pages = [];

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pages.push(i);
  }

  const onHandleClick = useCallback((number) => {
    dispatch(setCurrentPage(number)); // Изменяем текущую страницу через действие setCurrentPage
    paginate(number);
  }, [dispatch, paginate]);

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <S.PaginationItem
          key={number}
          onClick={() => onHandleClick(number)}
          className={currentPage === number ? 'active' : ''}
        >
          {number}
        </S.PaginationItem>
      );
    } else {
      return null;
    }
  });

  const onHandleNextButton = useCallback(() => {
    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
    setCurrentPage(currentPage + 1);
    paginate(currentPage + 1);
  }, [currentPage, maxPageNumberLimit, minPageNumberLimit, pageNumberLimit, paginate]);

  const onHandlePrevButton = useCallback(() => {
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
    setCurrentPage(currentPage - 1);
    paginate(currentPage - 1);
  }, [currentPage, maxPageNumberLimit, minPageNumberLimit, pageNumberLimit, paginate]);

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <S.PaginationItem onClick={onHandleNextButton}> &hellip; </S.PaginationItem>;
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <S.PaginationItem onClick={onHandlePrevButton}> &hellip; </S.PaginationItem>;
  }

  return (
    <S.PaginationWrapper>
      <S.PaginationList>
        <S.PaginationItem>
          <S.PaginationButton
            onClick={onHandlePrevButton}
            disabled={currentPage === pages[0] ? true : false}
            className={currentPage === pages[0] ? 'active' : ''}
          >
            Предыдущая
          </S.PaginationButton>
        </S.PaginationItem>
        {pageDecrementBtn}
        {renderPageNumbers}
        {pageIncrementBtn}
        <S.PaginationItem>
          <S.PaginationButton
            onClick={onHandleNextButton}
            disabled={currentPage === pages[pages.length - 1] ? true : false}
            className={currentPage === pages[pages.length - 1] ? 'active' : ''}
          >
            Следующая
          </S.PaginationButton>
        </S.PaginationItem>
      </S.PaginationList>
    </S.PaginationWrapper>
  );
}