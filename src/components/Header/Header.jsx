
import * as S from './Header.style'
import React from 'react'
import svgIm from '../../assets/images/github.svg'


export function Header() {
  const handleSVGClick = () => {
    const githubUrl = 'https://github.com';
    window.open(githubUrl, '_blank');
  };
  return (
    <>
      <S.HeaderWrapper>
        <S.SVGWrapper data-testid="button" onClick={handleSVGClick}>
          <img src={svgIm} alt="SVG" />   
        </S.SVGWrapper>
        <S.Title>Найди пользователя по login</S.Title>
      </S.HeaderWrapper>
    </>
  )
}

export default Header 
