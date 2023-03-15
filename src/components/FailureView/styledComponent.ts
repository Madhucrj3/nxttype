import styled from 'styled-components';
import { LIGHT } from '../../constants/themes';
interface bcolored{
    colored?:string,
    backgroundColored?:string
    heightContainer?:boolean
}
export const FailureMainContainer=styled.div<bcolored>`
display:flex;
justify-content:center;
align-items:center;
width:100%;
height:${props=>props.heightContainer=== false ? "100%" : "45vh"}
`;
export const FailureMain=styled.div<bcolored>`
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
export const FailureMainButton=styled.button`
background-color: #3b82f6;
border: none;
color: #fff;
font-weight: 600;
padding:0.5rem 1rem;
cursor: pointer;
border-radius: 5px;
`;