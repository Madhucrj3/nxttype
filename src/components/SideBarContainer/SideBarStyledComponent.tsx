import styled from 'styled-components';
export const SidebarMenu=styled.div`
 height:90vh;
 padding:1rem 0rem 1rem 2rem;
 width: 235px;
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 background-color: ${props => props.theme==="Light" ? "#fff" : "#313131"};
 color:${props => props.theme==="Light" ? "#000" : "#fff"};
  @media screen and (max-width: 576px) {
    display: none;
}
@media screen and (max-width: 768px) and (min-width: 576px){
  display: none;
}
`;
export const SidebarMenuSecContainer=styled.div``;
export const SidebarContactUsHeading=styled.h4``;
export const SidebarParaGraph=styled.p`
font-weight:400;
`;
export const SideBarSocialMedia=styled.div`
display:flex;
`;