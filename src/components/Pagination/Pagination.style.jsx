
import styled from 'styled-components';

const mobileBreakpoint = '600px';

export const PaginationWrapper = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;

  @media (max-width: ${mobileBreakpoint}) {
    margin-top: 15px;
    margin-bottom: 15px;
  }
`;

export const PaginationList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 15px;
  list-style-type: none;
  justify-content: center;
  align-items: center;

  @media (max-width: ${mobileBreakpoint}) {
    gap: 10px;
  }
`;

export const PaginationItem = styled.li`
  border: 3px solid ${({ theme }) => theme.colors.purple};
  border-radius: 35%;
  padding: 8px;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  box-sizing: content-box;

  transition: all 1s;

  &.active {
    padding: 8px;
    background-color: ${({ theme }) => theme.colors.purple};
    color: ${({ theme }) => theme.colors.black};
  }

  &:hover {
    transform: scale(1.02);
    color: ${({ theme }) => theme.colors.purple};
  }

  @media (max-width: ${mobileBreakpoint}) {
    padding: 6px;

    &.active {
      padding: 6px;
    }
  }
`;

export const PaginationButton = styled.button`
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
  cursor: pointer;
  border: none;

  &:hover {
    color: ${({ theme }) => theme.colors.purple};
  }

  @media (max-width: ${mobileBreakpoint}) {
    display: none;
  }
`;