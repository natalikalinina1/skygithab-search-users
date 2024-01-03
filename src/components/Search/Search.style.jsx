import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  max-width: 600px;
  position: relative;
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
  right: 0;
  width: 67px;
  height: 42px;
  border: none;
  background: transparent;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
`;

export const ButtonImg = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.purple};
`;
