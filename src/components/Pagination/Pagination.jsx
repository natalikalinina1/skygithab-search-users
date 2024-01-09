import React, { useState, useCallback, useEffect } from 'react';
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

  const handlePageClick = useCallback((number) => {
    dispatch(setCurrentPage(number));
    paginate(number);
  }, [dispatch, paginate]);

  useEffect(() => {
    if (currentPage > maxPageNumberLimit) {
      setMinPageNumberLimit(currentPage - pageNumberLimit);  
      setMaxPageNumberLimit(currentPage);  
    } else if(currentPage <= minPageNumberLimit){  
      setMaxPageNumberLimit(currentPage + pageNumberLimit);  
      setMinPageNumberLimit(currentPage - 1);  
    }
  }, [currentPage, maxPageNumberLimit, pageNumberLimit, minPageNumberLimit]);

  const handleNextButton = () => {
    if (maxPageNumberLimit + 1 <= pages.length) {
      setMaxPageNumberLimit(maxPageNumberLimit + 1);
      setMinPageNumberLimit(minPageNumberLimit + 1);
      dispatch(setCurrentPage(currentPage + 1));
      paginate(currentPage + 1);
    }
  };

  const handlePrevButton = () => {
    if (currentPage > 1) {  
      setMaxPageNumberLimit(currentPage - 1);  
      setMinPageNumberLimit((currentPage - 1) - pageNumberLimit); 
      dispatch(setCurrentPage(currentPage - 1));
      paginate(currentPage - 1);
    }
  };

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <S.PaginationItem onClick={handleNextButton}>&hellip;</S.PaginationItem>;
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <S.PaginationItem onClick={handlePrevButton}>&hellip;</S.PaginationItem>;
  }

  return (
    <S.PaginationWrapper>
      <S.PaginationList>
        <S.PaginationItem>
          <S.PaginationButton
            onClick={handlePrevButton}
            disabled={currentPage === 1}
            className={currentPage === 1 ? 'active' : ''}
          >
            Предыдущая
          </S.PaginationButton>
        </S.PaginationItem>
        {pageDecrementBtn}
        {pages.map((number) => {
          if (number <= maxPageNumberLimit && number > minPageNumberLimit) {
            return (
              <S.PaginationItem
                key={number}
                onClick={() => handlePageClick(number)}
                className={currentPage === number ? 'active' : ''}
              >
                {number}
              </S.PaginationItem>
            );
          } else {
            return null;
          }
        })}
        {pageIncrementBtn}
        <S.PaginationItem>
          <S.PaginationButton
            onClick={handleNextButton}
            disabled={currentPage === pages.length}
            className={currentPage === pages.length ? 'active' : ''}
          >
            Следующая
          </S.PaginationButton>
        </S.PaginationItem>
      </S.PaginationList>
    </S.PaginationWrapper>
  );
}
export default Pagination