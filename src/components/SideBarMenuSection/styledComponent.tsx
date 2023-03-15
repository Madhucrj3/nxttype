import styled from "styled-components";
interface SideMainHeadingInterface {
  colors: String;
}
export const SideMainHeadingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;
export const SideMainHeadingImageContainer = styled.div`
  padding-right: 12px;
`;
export const SideMainHeadings = styled.h1<SideMainHeadingInterface>`
  color: ${(props) => (props.colors === "Light" ? "#000" : "#fff")};
`;
