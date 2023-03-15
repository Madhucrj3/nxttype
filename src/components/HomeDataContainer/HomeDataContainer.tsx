import { inject, observer } from "mobx-react";
import { GlobalStore } from "../../stores/GlobalStore";
import { VideoStore } from "../../stores/VideoStore";
import { VideoDetailInterface } from "../../stores/type";
import { HomePageLink } from "./styledComponent";
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
} from "../HomeMainContainer/styledComponent";

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
    const { thumbnail_url, channel, title, view_count, published_at } = item;
    return (
      <HomeDataMainContainerIndividual>
        <HomePageLink to={`/videos/${item.id}`}>
          <HomeDataMainImageContainer>
            <HomeDataMainContainerImg
              src={thumbnail_url}
              alt="photos"
            ></HomeDataMainContainerImg>
          </HomeDataMainImageContainer>
          <HomeDataSecondContainer>
            <HomeDataSecondImageContainer>
              <HomeDataSecondContainerImage
                src={channel?.profile_image_url}
              ></HomeDataSecondContainerImage>
            </HomeDataSecondImageContainer>
            <HomeDataSecondContainerDescription>
              <HomeDataSecondContainerHeading fontcolr={theme.themes}>
                <HomeDataSecondContainerFirstHeading>
                  {title}
                </HomeDataSecondContainerFirstHeading>
              </HomeDataSecondContainerHeading>
              <HomeDataSecondContainerParagraph fontcolr={theme.themes}>
                <HomeSecondContainerParagraph>
                  {channel?.name}
                </HomeSecondContainerParagraph>
                <HomeDataThirdContainer>
                  <HomeSecondContainerParagraph>
                    {view_count} views
                  </HomeSecondContainerParagraph>
                  <HomeSecondContainerParagraph>
                    {2023 -
                      parseInt(
                        JSON.stringify(published_at).substring(
                          JSON.stringify(published_at).length - 5
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
