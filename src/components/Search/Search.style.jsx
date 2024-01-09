import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  max-width: 600px;
  position: relative;
  margin-right:60px;
  @media (max-width: 600px) {
    max-width: none;
    margin-right: 0;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 56px;
  border-radius: 20px;
  padding: 10px 15px;
  border: 5px solid #8b00ff;
  border-radius: 5px;
  outline:none;
  background:rgb(22, 27, 34) ;
  color: white;
  font-size: 18px;
  box-shadow:1px 1px 2px black, 0 0 1em #8b00ff, 0 0 0.2em white;
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export const Button = styled.button`
  position: absolute;
  top: 0;
  right: 60;
  width: 60px;
  height: 56px;
  border: 4px solid #8b00ff ;
  background: #000000;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  transition: all 1s;
  @media (max-width: 674px) {
    position: relative;
    margin-top:-56px;
    float: right;

  }
&.active {
 padding: 8px;
 background-color:#8b00ff;
 color: #000000; 
}

&:hover {
 transform: scale(1.02);
 background-color: rgb(22, 27, 34);
}

`;

export const ButtonImg = styled.span`
  color:#8b00ff ;
  cursor: pointer;
  
 
`;
