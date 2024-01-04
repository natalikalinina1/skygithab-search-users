import React from 'react'

import * as S from './Filter.style'

export function Filter ({setSort}) {

  function onHandleChange (e) {
    setSort(e.target.value)
  }

  return(
    <S.FilterWrapper>
      <S.FilterTitle>Отсортировать по количеству репозиториев:</S.FilterTitle>
            
      <S.FilterLabel htmlFor="desc">От меньшего к большему</S.FilterLabel> 
      <S.FilterRadio
        type='radio'
        name='sort'
        value='desc'
        id='desc'
        defaultChecked
        onChange={onHandleChange}
      />   
      <S.FilterLabel htmlFor='asc'>От меньшего к большему</S.FilterLabel> 
      <S.FilterRadio
        type='radio'
        name='sort'
        value='asc'
        id='asc'
        onChange={onHandleChange}
      />   
    </S.FilterWrapper>

  )
}
export default Filter;