

import styled from 'styled-components';


export const Form = styled.div`
    width: auto;
    position: relative;
`;

export const Field = styled.input`
    width: 600px;
    height: 42px;
    border-radius: 20px;
    padding: 10px 15px;
    border: 5px solid ${({ theme }) => theme.colors.purple};
    border-radius: 5px;
    outline: none;
    background: black;
    color: white;
    font-size: 18px;
`;

export const Button = styled.button`
    position: absolute; 
    top: 0;
    right: 0px;
    margin: 10px;
    width: 67px;
    height: 42px;
    border: none;
    background:black;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
`;

export const ButtonImg = styled.span`
    font-size: 16px;
    color:  ${({ theme }) => theme.colors.purple};
`;
