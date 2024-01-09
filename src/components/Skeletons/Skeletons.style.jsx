import styled, { keyframes } from 'styled-components';


const skeletonLoading = keyframes`
0% {
  background-color: #444444; 
}
50% {
  background-color: #333333; 
}
100% {
  background-color: #444444;
}
`;

export const SkeletonWrapper = styled.div`
margin-top:380px;
position: relative; /* Добавление относительного позиционирования */
width: 90%;
margin: 0 auto;
height: auto;
border: 1px solid ${({ theme }) => theme.colors.borderWhite};
border-radius: 15%;
padding: 11px 0px;
margin-bottom: 12px;
transition: all 1s;
box-shadow: ${({ theme }) => theme.colors.boxShadow};
animation: ${skeletonLoading} 1s infinite;
&:hover {
  transform: scale(1.02);
}
@media (max-width: 768px) {
  width: 50%;
}
`;

export const SkeletonOverlay = styled.div`
position: absolute; 
top: 50%; 
left: 50%; 
transform: translate(-50%, -50%); 
width: 35%; 
height: 27px; 
background-color: #555555; 
`;

export const SkeletonTitle = styled.div`

  margin-top: 30px;
  margin-bottom: 30px;
 
`;