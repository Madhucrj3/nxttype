import styled from 'styled-components';
import { LIGHT } from '../../constants/GlobalData';
interface bcolored{
    colored:string,
    backgroundColored:string
}
export const FailureMainContainer=styled.div`
display:flex;
justify-content:center;
align-items:center;
width:100%;
`;
export const Failuremain=styled.div<bcolored>`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
color: ${props=>props.colored=== LIGHT ? "#000" : "#fff"};
background-color: ${props=>props.backgroundColored=== LIGHT ? "#fff" : "#000"};
padding-bottom: 1rem;
`;
export const FailureMainImgContainer=styled.div`

`;
export const FailureMainImg=styled.img`
width: 300px;
`;
export const FailureMainHeading=styled.h1`

`;
export const FailureMainDescription=styled.p`
margin-top: 0;
font-size: 24px;
`;
export const Failuremainbtn=styled.button`
background-color: #3b82f6;
border: none;
color: #fff;
font-weight: 600;
padding:0.5rem 1rem;
cursor: pointer;
border-radius: 5px;
`;