import styled from 'styled-components';

export const FilterWrapper = styled.div`
    margin-top: 30px;
    text-align: right;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    font-size: 18px;
    @media (max-width: 668px) {
        font-size: 12px;
        text-align: center;
        gap: 12px;
        margin-left: 5px;
        margin-right: 15px;  
    }

`;

export const FilterTitle = styled.h3`
    font-size: 18px;
    color: ${({ theme }) => theme.colors.white};
    @media (max-width: 728px) {
        font-size: 16px;
    }
    @media (max-width: 668px) {
        font-size: 16px;
    }
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
    margin-right: -10px;
    color: ${({ theme }) => theme.colors.white};
    @media (max-width: 728px) {
        font-size: 16px;
        margin-right: -6px;
`;


