import styled from 'styled-components';

export const ErrorWrapper = styled.div`
  max-width: 800px;
  margin: 90px auto 60px; 
  padding: 20px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.backgroundThird};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  display: flex;
  flex-direction: column;

`;

export const ErrorMessage = styled.p`
  font-size: 22px;
`;

export const StyledButton = styled.button`
  padding: 8px 16px; 
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.purple};
  color: ${({ theme }) => theme.colors.black};
  font-size: 18px; 
  cursor: pointer;
  border: none;
  transition: background-color 0.3s;
  margin-top: 50px; 

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }
`;