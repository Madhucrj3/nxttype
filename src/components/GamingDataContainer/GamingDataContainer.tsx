import { inject, observer } from "mobx-react";
import { Link } from "react-router-dom";
import { GlobalStore } from "../../stores/GlobalStore";
import { VideoDetailInterface } from "../../stores/type";
import {
  GameIndividualMain,
  GameIndividualMainContainer,
  GameIndividualMaindetail,
  GameIndividualMainImageContainer,
  GameIndividualMainHeading,
  GameIndividualMainImg,
  GameIndividualMainParagraph,
} from "../GamingMainContainer/StyledComponents";
interface GamingDataContainerProps {
  game: VideoDetailInterface;
}
interface InjectedGamingDataContainerProps extends GamingDataContainerProps {
  globalStore: GlobalStore;
}
const GamingDataContainer = inject("globalStore")(
  observer((props: GamingDataContainerProps) => {
    const { globalStore: globalVar } =
      props as InjectedGamingDataContainerProps;
    const { game } = props;
    return (
      <GameIndividualMainContainer>
        <Link to={`/videos/${game.id}`} style={{ textDecoration: "none" }}>
          <GameIndividualMain>
            <GameIndividualMainImageContainer>
              <GameIndividualMainImg src={game.thumbnail_url} alt="game" />
            </GameIndividualMainImageContainer>
            <GameIndividualMaindetail>
              <GameIndividualMainHeading
                colorTitle={globalVar.themes === "Light" ? "#000" : "#fff"}
              >
                {game.title}
              </GameIndividualMainHeading>
              <GameIndividualMainParagraph
                colorParagraph={
                  globalVar.themes === "Light" ? "#000" : "#cbd5e1"
                }
              >
                {game.view_count} Watching WorldWide
              </GameIndividualMainParagraph>
            </GameIndividualMaindetail>
          </GameIndividualMain>
        </Link>
      </GameIndividualMainContainer>
    );
  })
);

export default GamingDataContainer;
