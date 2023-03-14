import styled from "styled-components";
import { LIGHT } from "../../constants/GlobalData";

export const SideBarIconContainer = styled.div`
  background-color: ${(props) =>
    props.theme === LIGHT ? "#fff" : "#313131"} !important;
`;
