
import React from 'react';
import * as S from './errorNotFound.style';

export const ErrorNotFound = ({ errorMessage }) => {
  const goToHomePage = () => {
    window.location.href = '/'; 
  };

  return (
    <S.ErrorWrapper>
      <S.ErrorMessage>{errorMessage}&#x1F614;</S.ErrorMessage>
      <S.StyledButton onClick={goToHomePage}>На главную</S.StyledButton> 
    </S.ErrorWrapper>
  );
};
export default ErrorNotFound