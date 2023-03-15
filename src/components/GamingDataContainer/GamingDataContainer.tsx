import { inject, observer } from "mobx-react";
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
  GameLink,
} from "../GamingSection/styledComponents";
interface GamingDataContainerProps {
  game: VideoDetailInterface;
}
interface InjectedGamingDataContainerProps extends GamingDataContainerProps {
  globalStore: GlobalStore;
}
const GamingDataContainer = inject("globalStore")(
  observer((props: GamingDataContainerProps) => {
    const { globalStore: theme } = props as InjectedGamingDataContainerProps;
    const { game } = props;
    const { id, thumbnail_url, title, view_count } = game;
    return (
      <GameIndividualMainContainer>
        <GameLink to={`/videos/${id}`}>
          <GameIndividualMain>
            <GameIndividualMainImageContainer>
              <GameIndividualMainImg src={thumbnail_url} alt="game" />
            </GameIndividualMainImageContainer>
            <GameIndividualMaindetail>
              <GameIndividualMainHeading colorTitle={theme.themes}>
                {title}
              </GameIndividualMainHeading>
              <GameIndividualMainParagraph colorParagraph={theme.themes}>
                {view_count} Watching WorldWide
              </GameIndividualMainParagraph>
            </GameIndividualMaindetail>
          </GameIndividualMain>
        </GameLink>
      </GameIndividualMainContainer>
    );
  })
);

export default GamingDataContainer;
