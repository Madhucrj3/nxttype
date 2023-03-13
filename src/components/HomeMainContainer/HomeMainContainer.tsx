import { HomeDataCOntd, HomeMainPageContainer } from "./StyledComponent";
import Failure from "../FailureView";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { inject, observer } from "mobx-react";
import { GlobalStore } from "../../stores/GlobalStore";
import LoaderMain from "../LoaderComponent.tsx";
import HomeBanner from "./HomeBanner";
import HomeSearchBar from "./HomeSearchBar";
import { VideoStore } from "../../stores/VideoStore";
import { INITIAL, LOADING, SUCESS } from "../../constants/ApiStatuss";
import HomeDataContainer from "./HomeDataContainer";
import { toJS } from "mobx";
interface HomeProps {}

interface InjectedHomeProps extends HomeProps {
  globalStore: GlobalStore;
  videoStore: VideoStore;
}
const HomeMainContainer = inject(
  "globalStore",
  "videoStore"
)(
  observer((props: HomeProps) => {
    const { globalStore: theme, videoStore } = props as InjectedHomeProps;
    console.log(toJS(videoStore.homeVideoData));
    const data = toJS(videoStore.homeVideoData);
    const navigate = useNavigate();
    useEffect(() => {
      videoStore.fetchHomeData();
    }, []);
    const handleRetryPage = () => {
      navigate("/");
    };
    const handleclearSearch = () => {
      videoStore.setHomeSearch("");
      videoStore.fetchHomeData();
    };
    const renderHomeContent = () => {
      const apiStatus = videoStore.homeApiStatus;
      switch (apiStatus) {
        case INITIAL:
          return <LoaderMain />;
        case LOADING:
          return <LoaderMain />;
        case SUCESS:
          return (
            <>
              {" "}
              {data.length === 0 ? (
                <Failure
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                  alt="nosearch"
                  page={handleclearSearch}
                  heading="No Search result Found"
                  description="Try Different key word or remove search filter"
                />
              ) : (
                <HomeDataCOntd>
                  {data.map((item) => (
                    <HomeDataContainer item={item} key={item.id} />
                  ))}
                </HomeDataCOntd>
              )}
            </>
          );
        default:
          return (
            <Failure
              src={
                theme.themes === "Light"
                  ? "https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
                  : "https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
              }
              alt="fail"
              page={handleRetryPage}
              heading="Oops! somthing Went Wrong"
              description="We are having some trouble to complete tour request Please try again"
            />
          );
      }
    };
    return (
      <HomeMainPageContainer>
        <HomeBanner />
        <HomeSearchBar />
        <>{renderHomeContent()}</>
      </HomeMainPageContainer>
    );
  })
);

export default HomeMainContainer;
