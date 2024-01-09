import styled, { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 500;
  }

  html,
  body {
      width: 100%;
      height: 100%;
      background-color: ${({ theme }) => theme.colors.black};
  }
`;
export default GlobalStyle

export const Wrapper = styled.div`
  text-align: center;
`;


