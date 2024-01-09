import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 40px;
  gap: 16px;
  @media (max-width: 768px) {
    margin-top: 10px;
    margin-bottom: 30px;
    gap: 4px;
  }
`;

export const Title = styled.h1`
  font-size: 40px;
  color: ${({ theme }) => theme.colors.purple};
  text-align: center;
  text-shadow: ${({ theme }) => theme.colors.boxShadow};
  margin-top: 50px;
  @media (max-width: 768px) {
    font-size: 28px;
    margin-top: 10px;
  }
`;

export const SVGWrapper = styled.span`
  width: 100px;
  height: 80px;
  color: inherit;
  margin-left: -15px;
  cursor: pointer;
  
`;
