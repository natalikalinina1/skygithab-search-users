import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSort,selectUsers } from '../../Slices/userSlice';
import * as S from './Filter.style';

export function Filter() {
  const dispatch = useDispatch();
  const { sort } = useSelector(selectUsers);

  const onHandleChange = (e) => {
    dispatch(setSort(e.target.value));
  };

  return (
    <S.FilterWrapper>
      <S.FilterTitle>Отсортировать по количеству репозиториев:</S.FilterTitle>

      <S.FilterLabel htmlFor="desc">по возрастанию</S.FilterLabel>
      <S.FilterRadio
        type="radio"
        name="sort"
        value="desc"
        id="desc"
        checked={sort === 'desc'}
        onChange={onHandleChange}
      />
      <S.FilterLabel htmlFor="asc">по убыванию</S.FilterLabel>
      <S.FilterRadio
        type="radio"
        name="sort"
        value="asc"
        id="asc"
        checked={sort === 'asc'}
        onChange={onHandleChange}
      />
    </S.FilterWrapper>
  );
}
export default Filter
