
import React from 'react'
import * as S from './Search.style'
import svgImage from '../../assets/images/search.svg';
export function Search () {

    return(
      
                <S.Form>
                    <S.Field />
                    <S.Button>
                    <S.ButtonImg>
                    <img src={svgImage} alt="SVG" />
                </S.ButtonImg>
                    </S.Button>
                </S.Form>
            );
        }
        
        export default Search;

  