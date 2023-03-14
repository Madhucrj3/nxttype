import styled from "styled-components";
interface GamingInterfaceStyledComponent {
  bcol?: string;
  colorTitle?: string;
  colorParagraph?: string;
}
export const GameStyled = styled.div<GamingInterfaceStyledComponent>`
  display: flex;
  background-color: ${(props) => props.bcol};
`;
export const GameingMainComponent = styled.div`
  width: 100%;
  padding: 1rem 2rem;
  height: 90vh;
  overflow: auto;
`;
export const GameingMainIndividualComponent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const GameIndividualMainContainer = styled.div`
  width: 22%;
  @media screen and (max-width: 576px) {
    width: 45%;
  }
  @media screen and (max-width: 900px) and (min-width: 768px) {
    width: 30%;
  }
  @media screen and (max-width: 768px) and (min-width: 576px) {
    width: 30%;
  }
`;
export const GameIndividualMain = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`;
export const GameIndividualMainImageContainer = styled.div``;
export const GameIndividualMainImg = styled.img`
  width: 100%;
`;
export const GameIndividualMaindetail = styled.div``;
export const GameIndividualMainHeading = styled.h5<GamingInterfaceStyledComponent>`
  margin-top: 8px;
  margin-bottom: 3px;
  color: ${(props) => props.colorTitle};
`;
export const GameIndividualMainParagraph = styled.p<GamingInterfaceStyledComponent>`
  margin-top: 3px;
  font-size: 12px;
  color: ${(props) => props.colorParagraph};
`;
