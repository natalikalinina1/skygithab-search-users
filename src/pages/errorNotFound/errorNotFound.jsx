import React from 'react';
import * as S from './errorNotFound.style';

export const ErrorNotFound = ({ errorMessage }) => {
  return (
    <S.ErrorWrapper>
      <S.ErrorMessage>{errorMessage}&#x1F614;</S.ErrorMessage>
    </S.ErrorWrapper>
  );
};
  
export default ErrorNotFound;
  