import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 40px;
  gap: 16px;
`;

export const Title = styled.h1`
  font-size: 40px;
  color: ${({ theme }) => theme.colors.purple};
  text-align: center;
  text-shadow: ${({ theme }) => theme.colors.boxShadow};
  margin-top: 50px;
`;

export const SVGWrapper = styled.span`
  width: 100px;
  height: 80px;
  color: inherit;
  margin-left: -15px;
  cursor: pointer;
`;
