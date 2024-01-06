import { useState } from 'react';
import * as S from './Pagination.style';
import React from 'react'
export function Pagination({ usersPerPage, totalUsers, paginate }) {
  console.log(totalUsers);

  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(7);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
  const [pageNumberLimit] = useState(7); 
  const [currentPage, setCurrentPage] = useState(1);

  const pages = [];

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pages.push(i);
  }

  const onHandleClick = (e) => {
    setCurrentPage(Number(e.target.id));
  };

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <S.PaginationItem
          key={number}
          id={number}
          onClick={(e) => {
            onHandleClick(e);
            paginate(number);
          }}
          className={currentPage === number ? 'active' : ''}
        >
          {number}
        </S.PaginationItem>
      );
    } else {
      return null;
    }
  });

  const onHandleNextbtn = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const onHandlePrevbtn = () => {
    setCurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = (
      <S.PaginationItem onClick={onHandleNextbtn}> &hellip; </S.PaginationItem>
    );
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = (
      <S.PaginationItem onClick={onHandlePrevbtn}> &hellip; </S.PaginationItem>
    );
  }

  return (
    <S.PaginationWrapper>
      <S.PaginationList>
        <S.PaginationItem>
          <S.PaginationButton
            onClick={onHandlePrevbtn}
            disabled={currentPage === pages[0] ? true : false}
          >
            Предыдущая
          </S.PaginationButton>
        </S.PaginationItem>
        {pageDecrementBtn}
        {renderPageNumbers}
        {pageIncrementBtn}
        <S.PaginationItem>
          <S.PaginationButton
            onClick={onHandleNextbtn}
            disabled={currentPage === pages[pages.length - 1] ? true : false}
          >
            Следующая
          </S.PaginationButton>
        </S.PaginationItem>
      </S.PaginationList>
    </S.PaginationWrapper>
  );
}
export default Pagination;