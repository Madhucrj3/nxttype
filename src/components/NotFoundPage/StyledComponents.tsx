import styled from "styled-components";
interface EmptySavedInterface {
  bcol: string;
  col: string;
}
export const EmptySavedVideoMainContainer = styled.div<EmptySavedInterface>`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => (props.bcol === "Light" ? "#fff" : "#000")};
  color: ${(props) => (props.col === "Light" ? "#000" : "#fff")};
`;
export const EmptySavedVideoMain = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const EmptySavedVideoMainImg = styled.img`
  /* width: 500px; */
  height: 500px;
  @media screen and (max-width: 768px) {
    width: 84vw;
    height: 348px;
    max-width: 500px;
  }
  @media screen and (max-width: 992px) and (min-width: 768px) {
    width: 500px;
  }
`;
export const EmptySavedVideoMainHeading = styled.h1``;
export const EmptySavedVideoMainDescription = styled.p``;
