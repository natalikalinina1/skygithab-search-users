
import React from 'react'
import * as S from './Filter.style'

export function Filter () {

    return(
        <S.FilterContainer>
        <S.FilterTitle>Sort by number of repositories:</S.FilterTitle>
       
        <S.FilterLabel>From smallest to largest</S.FilterLabel>
      </S.FilterContainer>

    )
}
export default Filter