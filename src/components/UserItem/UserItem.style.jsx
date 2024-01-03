import styled from 'styled-components';

export const UserWrapper = styled.div`
  height: auto;
  border: 1px solid ${({ theme }) => theme.colors.borderWhite};
  border-radius: 15%;
  padding: 10px 25px;
  margin-bottom: 12px;
  transition: all 1s;
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  &:hover {
    transform: scale(1.02);
  }
`;

export const UserTitle = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: 1.1px;
  line-height: 18px;
  font-size: 1.5rem;
  
`;

export const UserInfo = styled.div`
  padding: 20px 0px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  justify-items: center;
  
`;

export const UserInfoImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 20px;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 4;
 
`;

export const UserInfoRepo = styled.p`
  grid-column: 2;
  height: 30px;
  color: ${({ theme }) => theme.colors.white}
`;

export const UserInfoFollowers = styled.p`
  grid-column: 2;
  height: 30px;
  color: ${({ theme }) => theme.colors.white}
`;

export const UserInfoLink = styled.a`
  grid-column: 2;
  height: 30px;
  color :${({ theme }) => theme.colors.purple};

`;
export const UserInfoNum = styled.span`
  color: ${({ theme }) => theme.colors.purple}
`;
