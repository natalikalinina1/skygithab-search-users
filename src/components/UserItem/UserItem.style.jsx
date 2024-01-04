
import styled from 'styled-components';

export const UserWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  height: auto;
  border: 1px solid ${({ theme }) => theme.colors.borderWhite};
  border-radius: 15%;
  padding: 15px 0px;
  margin-bottom: 12px;
  transition: all 1s;
  box-shadow: ${({ theme }) => theme.colors.boxShadow};

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    width: 50%;

  }
`;

export const UserTitle = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: 1.1px;
  line-height: 18px;
  font-size: 26px;
`;

export const UserInfo = styled.div`
  padding: 20px 0px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  justify-items: center;
  font-size: 18px;
`;

export const UserInfoImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 35px;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 4;
`;

export const UserInfoRepo = styled.p`
  grid-column: 2;
  height: 30px;
  color: ${({ theme }) => theme.colors.white};
`;

export const UserInfoFollowers = styled.p`
  grid-column: 2;
  height: 30px;
  color: ${({ theme }) => theme.colors.white};
`;

export const UserInfoLink = styled.a`
  padding-top: 15px;
  grid-column: 2;
  height: 30px;
  color: ${({ theme }) => theme.colors.purple};
`;

export const UserInfoNum = styled.span`
  color: ${({ theme }) => theme.colors.purple};
`;

export const UserInfoText = styled.div`
  padding: 20px;
  line-height: 18px;
  font-size: 18px;
`;
export const UserInfoCountry = styled.p`
  grid-column: 2;
  height: 30px;
  color: ${({ theme }) => theme.colors.white};
`;