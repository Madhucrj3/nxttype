import styled from "styled-components";
interface HomeColour {
  fontcolr: string;
}
export const HomeMainPageContainer = styled.div`
  padding: 1rem 2rem;
  width: 100%;
  height: 90vh;
  overflow: auto;
  @media screen and (max-width: 576px) {
    padding: 1rem;
  }
`;
export const HomeMainContainerbanner = styled.div`
  padding: 1rem;
  margin-bottom: 2rem;
  background-image: url("https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  object-fit: cover;
  overflow: hidden;
  height: 300px;
  position: relative;
  @media screen and (max-width: 576px) {
    background-image: none;
    background-color: #fff;
    width: 82.5vw;
    margin-left: 0;
  }
  @media screen and (max-width: 900px) and (min-width: 768px) {
    background-size: cover;
    object-fit: contain;
  }
`;
export const HomeMainContainerbannerpara = styled.div`
  margin: 2rem 0;
  font-size: 24px;
  width: 400px;
  font-weight: 500;
  line-height: 24px;
  @media screen and (max-width: 576px) {
    width: 80vw;
  }
`;
export const HomeMainContainerbannerbtn = styled.div`
  cursor: pointer;
  border: 2px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 130px;
  height: 35px;
`;
export const HomeBannerCross = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
`;
export const HomePageSearchContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;
export const HomeSearchInput = styled.input`
  padding: 0rem 1rem;
  height: 25px;
  width: 330px;
  border: 2px solid #cbd5e1;
  @media screen and (max-width: 576px) {
    width: 90%;
  }
`;
export const HomePageSearchImageContainer = styled.div`
  cursor: pointer;
  height: 25px;
  width: 50px;
  display: flex;
  align-items: center;
  background-color: #d7dfe9;
  justify-content: center;
  border: 2px solid #cbd5e1;
  @media screen and (max-width: 576px) {
    width: 40px;
  }
`;
export const HomeDataContainers = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 2rem;
  @media screen and (max-width: 576px) {
    display: block;
  }
  @media screen and (max-width: 768px) and (min-width: 576px) {
    grid-template-columns: auto auto;
  }
`;
export const HomeDataMainContainerIndividual = styled.div`
  width: 100%;
  max-width: 536px;
  margin-right: 1rem;
  margin-bottom: 1rem;
  @media screen and (max-width: 576px) {
    width: 100%;
  }
  @media screen and (max-width: 900px) and (min-width: 768px) {
    margin-right: 0.3rem;
  }
  @media screen and (max-width: 768px) and (min-width: 576px) {
    width: 100%;
  }
`;
export const HomeDataMainImageContainer = styled.div``;
export const HomeDataMainContainerImg = styled.img`
  width: 100%;
`;
export const HomeDataSecondContainer = styled.div`
  display: flex;
`;
export const HomeDataSecondImageContainer = styled.div``;
export const HomeDataSecondContainerDescription = styled.div``;
export const HomeDataSecondContainerImage = styled.img`
  height: 40px;
`;
export const HomeDataSecondContainerHeading = styled.div<HomeColour>`
  color: ${(props) => (props.fontcolr === "Light" ? "#000" : "#fff")};
  margin-left: 0.3rem;
`;
export const HomeDataSecondContainerFirstHeading = styled.h5`
  margin-top: 0;
  margin-bottom: 1rem;
  line-height: 24px;
  @media screen and (max-width: 900px) and (min-width: 768px) {
    line-height: 16px;
    margin-bottom: 0.5rem;
  }
`;

export const HomeDataSecondContainerParagraph = styled.div<HomeColour>`
  color: ${(props) => (props.fontcolr === "Light" ? "#000" : "#cbd5e1")};
  margin-left: 0.3rem;
  @media screen and (max-width: 900px) and (min-width: 768px) {
    margin-bottom: 0;
  }
`;
export const HomeDataThirdContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const HomefailImg = styled.img``;
export const HomeSecondContainerParagraph = styled.p`
  font-size: 12px;
`;
