import { inject, observer } from "mobx-react";
import { GlobalStore } from "../../stores/GlobalStore";
import { VideoDetailInterface } from "../../stores/type";
import { VideoStore } from "../../stores/VideoStore";
import {
  HomeDataMainImageContainer,
  HomeDataMainContainerImg,
  HomeDataSecondContainer,
  HomeDataSecondImageContainer,
  HomeDataSecondContainerDescription,
  HomeDataSecondContainerHeading,
  HomeDataSecondContainerParagraph,
  HomeDataThirdContainer,
  HomeDataSecondContainerFirstHeading,
  HomeDataSecondContainerImage,
  HomeDataMainContainerIndividual,
  HomeSecondContainerParagraph,
} from "../HomeMainContainer/StyledComponent";
import { HomePageLink } from "./styledComponent";

interface HomeDataContainerProps {
  item: VideoDetailInterface;
}

interface InjectedHomeDataContainerProps extends HomeDataContainerProps {
  globalStore: GlobalStore;
  videoStore: VideoStore;
}
const HomeDataContainer = inject(
  "globalStore",
  "videoStore"
)(
  observer((props: HomeDataContainerProps) => {
    const { item } = props;
    const { globalStore: theme } = props as InjectedHomeDataContainerProps;
    return (
      <HomeDataMainContainerIndividual>
        <HomePageLink to={`/videos/${item.id}`}>
          <HomeDataMainImageContainer>
            <HomeDataMainContainerImg
              src={item.thumbnail_url}
              alt="photos"
            ></HomeDataMainContainerImg>
          </HomeDataMainImageContainer>
          <HomeDataSecondContainer>
            <HomeDataSecondImageContainer>
              <HomeDataSecondContainerImage
                src={item.channel?.profile_image_url}
              ></HomeDataSecondContainerImage>
            </HomeDataSecondImageContainer>
            <HomeDataSecondContainerDescription>
              <HomeDataSecondContainerHeading fontcolr={theme.themes}>
                <HomeDataSecondContainerFirstHeading>
                  {item.title}
                </HomeDataSecondContainerFirstHeading>
              </HomeDataSecondContainerHeading>
              <HomeDataSecondContainerParagraph fontcolr={theme.themes}>
                <HomeSecondContainerParagraph>
                  {item.channel?.name}
                </HomeSecondContainerParagraph>
                <HomeDataThirdContainer>
                  <HomeSecondContainerParagraph>
                    {item.view_count} views
                  </HomeSecondContainerParagraph>
                  <HomeSecondContainerParagraph>
                    {2023 -
                      parseInt(
                        JSON.stringify(item.published_at).substring(
                          JSON.stringify(item.published_at).length - 5
                        )
                      )}{" "}
                    years ago
                  </HomeSecondContainerParagraph>
                </HomeDataThirdContainer>
              </HomeDataSecondContainerParagraph>
            </HomeDataSecondContainerDescription>
          </HomeDataSecondContainer>
        </HomePageLink>
      </HomeDataMainContainerIndividual>
    );
  })
);

export default HomeDataContainer;
