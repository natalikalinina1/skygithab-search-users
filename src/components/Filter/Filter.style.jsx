import styled from 'styled-components';

export const FilterWrapper = styled.div`
    margin-top: 30px;
    text-align: right;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
`;

export const FilterTitle = styled.h3`
    font-size: 16px;
    color: ${({ theme }) => theme.colors.white};
    
`;

export const FilterRadio = styled.input`
    margin-right: -7px;
`;

export const FilterLabel = styled.label`
    margin-right: 30px;
    color: ${({ theme }) => theme.colors.white};
`;


