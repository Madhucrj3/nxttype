import styled from "styled-components";
import { LIGHT } from "../../constants/GlobalData";
interface IndividualVideoColors {
  colors: string;
}
export const IndividualVideoContainer = styled.div`
  width: 100%;
  height: 90vh;
  padding: 1rem 2rem;
`;
export const IndividualVideoReactPlayer = styled.div`
  height: 500px;
  @media screen and (max-width: 576px) {
    height: 230px;
  }
  @media screen and (max-width: 768px) and (min-width: 576px) {
    height: 320px;
  }
  @media screen and (max-width: 992px) and (min-width: 768px) {
    height: 400px;
  }
`;

export const IndividualVideoReactPlayerDetail = styled.div<IndividualVideoColors>`
  color: ${(props) => (props.colors === LIGHT ? "#000" : "#fff")};
`;
export const IndividualVideoReactPlayerDetailHeading = styled.p``;
export const IndividualVideoReactPlayerDetailDescription = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;
export const IndividualVideoReactPlayerDescription = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const IndividualVideoReactPlayerLike = styled.div`
  cursor: pointer;
  margin: 0 0.8rem;
`;
interface IndividualVideoReactPlayerActionContainerInterface {
  theme: string;
  isLikedClicked: boolean;
}
export const IndividualVideoReactPlayerActionContainer = styled.div<IndividualVideoReactPlayerActionContainerInterface>`
  color: ${(props) =>
    props.isLikedClicked ? "blue" : props.theme === LIGHT ? "000" : "fff"};
`;
export const IndividualVideoReactPlayerActionName = styled.span`
  margin-left: 0.3rem;
`;
export const IndividualVideoReactPlayerLikeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;
export const IndividualVideComponentline = styled.div`
  height: 2px;
  background-color: #d7dfe9;
`;
export const IndividualCompDetailed = styled.div`
  display: flex;
`;
export const IndividualCompDetaileddivimg = styled.div`
  margin-top: 22.178px;
  margin-right: 1rem;
`;
export const IndividualCompDetailedimg = styled.img`
  height: 40px;
`;
export const IndividualCompDetailedmain = styled.div``;
export const HomeDataContSec23 = styled.div`
  display: flex;
  justify-content: space-between;
`;
