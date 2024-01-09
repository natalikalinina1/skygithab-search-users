import styled from 'styled-components';

export const ErrorWrapper = styled.div`
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.backgroundThird};
  color:${({ theme }) => theme.colors.white};
  text-align: center;
`;

export const ErrorMessage = styled.p`
  font-size: 22px;
`