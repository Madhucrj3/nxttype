import { useEffect } from "react";
import { toJS } from "mobx";
import { inject, observer } from "mobx-react";
import { useNavigate } from "react-router-dom";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";
import Failure from "../FailureView";
import GamingDataContainer from "../GamingDataContainer";
import LoaderMain from "../LoaderComponent";
import SideMainHeading from "../SideBarMenuSection";
import { LIGHT } from "../../constants/themes";
import { INITIAL, LOADING, SUCESS } from "../../constants/ApiStatuss";
import { GlobalStore } from "../../stores/GlobalStore";
import { VideoDetailInterface } from "../../stores/type";
import { VideoStore } from "../../stores/VideoStore";
import {
  FAILURE_DARK_THEME,
  FAILURE_LIGHT_THEME,
} from "../../constants/ImageUrl";
import {
  GameingMainComponent,
  GameingMainIndividualComponent,
} from "./styledComponents";
interface GamingMainContainerProps {}
interface InjectedGamingMainContainerProps extends GamingMainContainerProps {
  globalStore: GlobalStore;
  videoStore: VideoStore;
}
const GamingMainContainer = inject(
  "globalStore",
  "videoStore"
)(
  observer((props: GamingMainContainerProps) => {
    const { globalStore: theme, videoStore } =
      props as InjectedGamingMainContainerProps;
    const gamingVideoList = toJS(
      videoStore.gamingVideoList
    ) as VideoDetailInterface[];

    const navigate = useNavigate();
    useEffect(() => {
      videoStore.getGamingList();
    }, []);
    const handleRetryPage = () => {
      navigate("/gaming");
    };
    const renderGamingContent = () => {
      const apiStatus = videoStore.gameingApiStatus;
      switch (apiStatus) {
        case INITIAL:
          console.log("init");
          return <LoaderMain />;
        case LOADING:
          return <LoaderMain />;
        case SUCESS:
          return (
            <GameingMainComponent>
              <SideMainHeading titleName="Gaming" iconss={faGamepad} />
              <GameingMainIndividualComponent>
                {gamingVideoList.map((game) => (
                  <GamingDataContainer key={game.id} game={game} />
                ))}
              </GameingMainIndividualComponent>
            </GameingMainComponent>
          );
        default:
          return (
            <Failure
              src={
                theme.themes === LIGHT
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
    return <>{renderGamingContent()}</>;
  })
);

export default GamingMainContainer;
