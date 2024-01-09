import styled from 'styled-components';

export const FilterWrapper = styled.div`
    margin-top: 30px;
    text-align: right;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    font-size: 18px;
`;

export const FilterTitle = styled.h3`
    font-size: 18px;
    color: ${({ theme }) => theme.colors.white};
    
`;

export const FilterRadio = styled.input`
    appearance: none;
    width: 16px;
    height: 16px;
    border: 2px solid ${({ theme }) => theme.colors.purple};
    border-radius: 50%;
    outline: none;
    background-color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
    
    &:checked {
        background-color: ${({ theme }) => theme.colors.purple};
    }
`;

export const FilterLabel = styled.label`
    margin-right: -8px;
    color: ${({ theme }) => theme.colors.white};
`;


