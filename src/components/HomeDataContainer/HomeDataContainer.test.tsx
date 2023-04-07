import { render, screen } from "@testing-library/react";
import { Provider } from "mobx-react";
import { BrowserRouter } from "react-router-dom";
import { globalStore, videoStore } from "../../stores";
import HomeDataContainer from "./HomeDataContainer";
const item = {
  id: "1",
  thumbnail_url: "https://example.com/image.png",
  channel: {
    name: "Channel Name",
    profile_image_url: "https://example.com/profile.png",
  },
  title: "Video Title",
  view_count: "1000",
  published_at: "Apr 21, 2019",
};
describe("Home Data Container", () => {
  let containers;
  beforeEach(() => {
    const { container } = render(
      <BrowserRouter>
        <Provider globalStore={globalStore} videoStore={videoStore}>
          <HomeDataContainer item={item} />
        </Provider>
      </BrowserRouter>
    );
    containers = container;
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("check for click", () => {
    const link = screen.getByRole("link");
    expect(link.getAttribute("href")).toBe("/videos/1");
  });
  it("check for other element getting displayed or not", () => {
    const thumbnail = screen.getByAltText("photos");
    expect(thumbnail).toHaveAttribute("src", item.thumbnail_url);
    const profileImage = screen.getByAltText("profileImage");
    expect(profileImage).toHaveAttribute("src", item.channel.profile_image_url);
    const heading = screen.getByText(item.title);
    expect(heading).toBeInTheDocument();
    const channelName = screen.getByText(item.channel.name);
    expect(channelName).toBeInTheDocument();
    const views = screen.getByText("1000 views");
    expect(views).toBeInTheDocument();
    const year = screen.getByText("4 years ago");
    expect(year).toBeInTheDocument();
  });
});
