import { render, screen } from "@testing-library/react";
import { Provider } from "mobx-react";
import { globalStore, videoStore } from "../../stores";
import IndividualVideoDataMain from "./IndividualVideoDataMain";
// jest.mock("react-player", () => "Console");
describe("IndividualVideoDataMain", () => {
  const individualVideo = {
    id: "1",
    title: "Test video",
    video_url: "https://example.com/test.mp4",
    thumbnail_url: "https://example.com/thumbnail.png",
    channel: {
      name: "Test channel",
      profile_image_url: "https://example.com/test.jpg",
      subscriber_count: "4.13K",
    },
    description: "Lorem ipsum dolor sit amet",
    published_at: "Apr 21, 2019",
    view_count: "1.4K",
  };
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("Individual Data React Player Container", async () => {
    render(
      <Provider globalStore={globalStore} videoStore={videoStore}>
        <IndividualVideoDataMain indVidualVideo={individualVideo} id="1" />
      </Provider>
    );
    const player = screen.getByTestId("video-player-1");
    expect(player).toBeInTheDocument();
  });
  it("Individual Data Description Container", async () => {
    render(
      <Provider globalStore={globalStore} videoStore={videoStore}>
        <IndividualVideoDataMain indVidualVideo={individualVideo} id="1" />
      </Provider>
    );
    const titleElement = screen.getByText("Test video");
    expect(titleElement).toBeInTheDocument();
    const viewsElement = screen.getByText("1.4K views");
    expect(viewsElement).toBeInTheDocument();
    const YearElement = screen.getByText("4 years ago");
    expect(YearElement).toBeInTheDocument();
  });
  it("Action Container", () => {
    render(
      <Provider globalStore={globalStore} videoStore={videoStore}>
        <IndividualVideoDataMain indVidualVideo={individualVideo} id="1" />
      </Provider>
    );
    const Like = screen.getByText("Like");
    expect(Like).toBeInTheDocument();
    const DisLike = screen.getByText("DisLike");
    expect(DisLike).toBeInTheDocument();
    const Save = screen.getByText("Save");
    expect(Save).toBeInTheDocument();
  });
  it("Profile Section", () => {
    render(
      <Provider globalStore={globalStore} videoStore={videoStore}>
        <IndividualVideoDataMain indVidualVideo={individualVideo} id="1" />
      </Provider>
    );

    const channellogo = screen.getByAltText("Profilelogo");
    expect(channellogo).toBeInTheDocument();
    const titleElement = screen.getByText(individualVideo.channel.name);
    expect(titleElement).toBeInTheDocument();
    const viewsElement = screen.getByText(individualVideo.description);
    expect(viewsElement).toBeInTheDocument();
  });
});
