import { faFireFlameCurved } from "@fortawesome/free-solid-svg-icons";
import { toJS } from "mobx";
import { inject, observer } from "mobx-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { INITIAL, LOADING, SUCESS } from "../../constants/ApiStatuss";
import {
  FAILURE_DARK_THEME,
  FAILURE_LIGHT_THEME,
} from "../../constants/ImageUrl";
import { GlobalStore } from "../../stores/GlobalStore";
import { VideoDetailInterface } from "../../stores/type";
import { VideoStore } from "../../stores/VideoStore";
import Failure from "../FailureView";
import LoaderMain from "../LoaderComponent";
import SideMainHeading from "../SideMainHeading";
import TrendingDataContainer from "../TrendingDataContainer";
import { TrendMainComp, TrendMainData } from "./StyledComponent";
interface TrendingMainContainerProps {}
interface InjectedTrendingMainContainerProps
  extends TrendingMainContainerProps {
  globalStore: GlobalStore;
  videoStore: VideoStore;
}
const TrendingMainContainer = inject(
  "globalStore",
  "videoStore"
)(
  observer((props: TrendingMainContainerProps) => {
    const { globalStore: theme, videoStore } =
      props as InjectedTrendingMainContainerProps;
    const trendingVideoData = toJS(
      videoStore.trendingVideoData
    ) as VideoDetailInterface[];
    console.log(trendingVideoData);
    const navigate = useNavigate();
    useEffect(() => {
      videoStore.getTrendData();
    }, []);
    const handleRetryPage = () => {
      navigate("/trending");
    };
    const renderTrendingContent = () => {
      const apiStatus = videoStore.trendingApiStatus;
      switch (apiStatus) {
        case INITIAL:
          return <LoaderMain />;
        case LOADING:
          return <LoaderMain />;
        case SUCESS:
          return (
            <>
              <SideMainHeading
                titleName="Trending"
                iconss={faFireFlameCurved}
              />
              <TrendMainData>
                {trendingVideoData.map((trend) => (
                  <TrendingDataContainer key={trend.id} tsData={trend} />
                ))}
              </TrendMainData>
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
    return <TrendMainComp>{renderTrendingContent()}</TrendMainComp>;
  })
);

export default TrendingMainContainer;
