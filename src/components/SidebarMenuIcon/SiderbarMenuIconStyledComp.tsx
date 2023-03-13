import styled from 'styled-components';
interface SidebarIconprops{
    activeStatus:boolean,
    themed:string
}
interface Sidespanprops{
    activeStatus:boolean,
    themed:string
}
export const SidebarIcon=styled.div<SidebarIconprops>`
cursor:pointer;
margin: 5px 16px;
margin-bottom: 1rem;
padding: 0.5rem;
background-color: ${props => props.activeStatus && "#d7dfe9"};
color:${props => props.themed==="Light" ? "#000" : "#fff"};
`;
export const Sidespan=styled.span<Sidespanprops>`
padding: 0 1rem;
font-weight: ${props => props.activeStatus ? "700" : "500"};
color:${props => props.themed==="Light" ? "#000" : "#fff"};
`;