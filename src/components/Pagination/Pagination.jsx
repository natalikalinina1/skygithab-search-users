import React from 'react'
import * as S from './Pagination.style'
export const Pagination = () => {
  return (
    <S.PaginationContainer>
      <S.PaginationList>
        <S.PaginationItem>
          <S.PaginationButton>
            Previos
          </S.PaginationButton>
        </S.PaginationItem>
        <S.PaginationItem>
          <S.PaginationButton>
            Next
          </S.PaginationButton>
        </S.PaginationItem>
      </S.PaginationList>
    </S.PaginationContainer>
  )
};

export default Pagination;
