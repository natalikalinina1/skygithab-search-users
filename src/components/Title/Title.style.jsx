import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 42px;
  color: ${({ theme }) => theme.colors.purple};
  text-align: center;
  margin-top: 50px;
  margin-bottom: 50px;
  text-shadow:${({ theme }) => theme.colors.boxShadow} ;
 
`;
