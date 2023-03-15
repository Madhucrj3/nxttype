import styled from "styled-components";
import { LIGHT } from "../../constants/themes";
interface NavbarContainers {
  backgroundColorTheme: string;
}
export const NavbarContainer = styled.div<NavbarContainers>`
  background-color: ${(props) =>
    props.backgroundColorTheme === LIGHT ? "000" : "#313131"};
`;
export const NavbarContainerMain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`;
export const NavbarContainerLeft = styled.div``;
export const NavbarContainerRight = styled.div`
  /* Navbarcontd2 img:last-child */
  display: flex;
  align-items: center;
`;
export const NavbarContainerbutton = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavbarContainerRightMobileView = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;
export const NavbarContainerRightMobileViewCurr = styled.div`
  margin-left: 1rem;
  cursor: pointer;
`;
export const DropdownContent = styled.div`
  display: none;
  position: absolute;
  right: 59px;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;
export const NavbarDropdown = styled.div`
  display: inline-block;
  &:hover {
    ${DropdownContent} {
      display: block;
    }
  }
`;
