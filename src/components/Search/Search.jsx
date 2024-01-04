import * as S from './Search.style'
import { useState } from 'react';
import svgImage from '../../assets/images/search.svg';
import React from 'react'


export function Search ({setLogin}) {
  const [name, setName] = useState('');

  function onHandleChange(e) {
    setName(e.target.value);
  }

  const onHandleSubmit = (e) => {
    e.preventDefault();
    setLogin(name);
  }

  return(
    <S.Form data-testid="form" onSubmit={onHandleSubmit}>
      <S.Input data-testid="input" type='search' name='login' placeholder='Введите логин...' onChange={(e) => onHandleChange(e)}/>
      <S.Button data-testid="button" type='submit' >
        <S.ButtonImg>
          <img src={svgImage} alt="SVG" />
        </S.ButtonImg>
      </S.Button>
                    
    </S.Form>
  )
}
export default Search;