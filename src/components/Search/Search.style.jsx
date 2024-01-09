import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  max-width: 600px;
  position: relative;
  margin-right:60px;
`;

export const Input = styled.input`
  width: 100%;
  height: 56px;
  border-radius: 20px;
  padding: 10px 15px;
  border: 5px solid ${({ theme }) => theme.colors.purple};
  border-radius: 5px;
  outline: none;
  background: ${({ theme }) => theme.colors.backgroundThird};
  color: ${({ theme }) => theme.colors.white};
  font-size: 18px;
  box-shadow:${({ theme }) => theme.colors.boxShadow}
`;

export const Button = styled.button`
  position: absolute;
  top: 0;
  right: 60;
  width: 60px;
  height: 56px;
  border: 4px solid ${({ theme }) => theme.colors.purple} ;
  background: ${({ theme }) => theme.colors.black};
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  transition: all 1s;

&.active {
 padding: 8px;
 background-color: ${({ theme }) => theme.colors.purple};
 color: ${({ theme }) => theme.colors.black};
}

&:hover {
 transform: scale(1.02);
 background-color: ${({ theme }) => theme.colors.backgroundThird};
}
`;

export const ButtonImg = styled.span`
  color: ${({ theme }) => theme.colors.purple};
  cursor: pointer;
  

`;
