import { inject, observer } from "mobx-react";
import { Link } from "react-router-dom";
import { GlobalStore } from "../../stores/GlobalStore";
import { VideoDetailInterface } from "../../stores/type";
import {
  TrendDataContainerHeadingDetail,
  TrendingDataImage,
  TrendingDataContainers,
  TrendingDataContainerDetail,
  TrendingDataImageContainerDetail,
  TrendingDataImageContainer,
  TrendDataContainerParaDetail,
  TrendDataContainerParagraphDetail,
  TrendDataContainerParaDetailSpan,
} from "../TrendingMainContainer/styledComponent";
interface TrendingDataContainerProps {
  tsData: VideoDetailInterface;
}
interface InjectedTrendingMainContainerProps
  extends TrendingDataContainerProps {
  globalStore: GlobalStore;
}
const TrendingDataContainer = inject(
  "globalStore",
  "videoStore"
)(
  observer((props: TrendingDataContainerProps) => {
    const { tsData } = props;
    const { globalStore: globalData } =
      props as InjectedTrendingMainContainerProps;
    const { thumbnail_url, channel, title, view_count, published_at, id } =
      tsData;
    return (
      <Link to={`/videos/${id}`} style={{ textDecoration: "none" }}>
        <TrendingDataContainers>
          <TrendingDataImageContainer>
            <TrendingDataImage src={thumbnail_url}></TrendingDataImage>
          </TrendingDataImageContainer>
          <TrendingDataContainerDetail colors={globalData.themes}>
            <TrendingDataImageContainerDetail>
              <img
                style={{ width: "50px" }}
                src={channel?.profile_image_url}
                alt="propss"
              />
            </TrendingDataImageContainerDetail>
            <div>
              <TrendDataContainerHeadingDetail
                colorOfHeading={globalData.themes}
              >
                {title}
              </TrendDataContainerHeadingDetail>
              <TrendDataContainerParaDetail>
                {channel?.name}{" "}
              </TrendDataContainerParaDetail>
              <TrendDataContainerParagraphDetail>
                <TrendDataContainerParaDetailSpan>
                  {" "}
                  {view_count} views
                </TrendDataContainerParaDetailSpan>
                <TrendDataContainerParaDetailSpan>
                  {2023 -
                    parseInt(
                      JSON.stringify(published_at).substring(
                        JSON.stringify(published_at).length - 5
                      )
                    )}{" "}
                  Years ago
                </TrendDataContainerParaDetailSpan>
              </TrendDataContainerParagraphDetail>
            </div>
          </TrendingDataContainerDetail>
        </TrendingDataContainers>
      </Link>
    );
  })
);

export default TrendingDataContainer;
