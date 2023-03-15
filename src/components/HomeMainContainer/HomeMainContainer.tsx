import { useEffect } from "react";
import { toJS } from "mobx";
import { useNavigate } from "react-router-dom";
import { inject, observer } from "mobx-react";
import { VideoStore } from "../../stores/VideoStore";
import { GlobalStore } from "../../stores/GlobalStore";
import { INITIAL, LOADING, SUCESS } from "../../constants/ApiStatuss";
import {
  FAILURE_DARK_THEME,
  FAILURE_LIGHT_THEME,
  NO_SEARCH_RESULT,
} from "../../constants/ImageUrl";
import HomeDataContainer from "../HomeDataContainer";
import LoaderMain from "../LoaderComponent";
import HomeBanner from "../HomeBanner";
import HomeSearchBar from "../HomePageSearchBar";
import Failure from "../FailureView";
import { HomeDataContainers, HomeMainPageContainer } from "./styledComponent";
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
                  src={NO_SEARCH_RESULT}
                  alt="nosearch"
                  retryPage={handleclearSearch}
                  heading="No Search result Found"
                  description="Try Different key word or remove search filter"
                />
              ) : (
                <HomeDataContainers>
                  {data.map((item) => (
                    <HomeDataContainer item={item} key={item.id} />
                  ))}
                </HomeDataContainers>
              )}
            </>
          );
        default:
          return (
            <Failure
              src={
                theme.themes === "Light"
                  ? FAILURE_LIGHT_THEME
                  : FAILURE_DARK_THEME
              }
              alt="fail"
              retryPage={handleRetryPage}
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
