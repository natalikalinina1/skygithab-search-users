import styled from 'styled-components';

export const PaginationContainer = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const PaginationList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 15px;
  list-style-type: none;
  justify-content: center;
`;

export const PaginationItem = styled.li`
  border: 1px solid ${({ theme }) => theme.colors.graniteGray};
  padding: 5px ;
  color: white;
  text-align: center;
  transition: all 1s;

  &.active {
    padding: 5px;
    background-color: white;
    color: black;
  }

  &:hover {
    transform: scale(1.02);
    color: black;
  }
`;

export const PaginationButton = styled.button`
  background-color: ${({ theme }) => theme.colors.imgBackGround};
  border: none;
  color: black;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.purple};
  }
`;