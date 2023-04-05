import GamingMainContainer from "./GamingSection";
import { globalStore, videoStore } from "../../stores";
import { BrowserRouter } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "mobx-react";
import { ApiStatus } from "../../stores/type";
import GamingDataContainer from "../GamingDataContainer";
describe("Gaming Section", () => {
  it("should render the loader component when the api status is initial", () => {
    videoStore.gameingApiStatus = ApiStatus.INITIAL;
    videoStore.getGamingList = jest.fn();
    render(
      <BrowserRouter>
        <Provider globalStore={globalStore} videoStore={videoStore}>
          <GamingMainContainer />
        </Provider>
      </BrowserRouter>
    );
  });
  it("should render the gaming video list when the api status is success", () => {
    videoStore.gameingApiStatus = ApiStatus.SUCESS;
    videoStore.gamingVideoList = [
      {
        id: "1",
        thumbnail_url: "https://example.com/thumbnail.png",
        title: "Video title",
        view_count: "10",
      },
      {
        id: "2",
        thumbnail_url: "https://example.com/thumbnail2.png",
        title: "Video title 2",
        view_count: "20",
      },
    ];

    render(
      <BrowserRouter>
        <Provider globalStore={globalStore} videoStore={videoStore}>
          <GamingMainContainer>
            {videoStore.gamingVideoList.map((game) => (
              <GamingDataContainer key={game.id} game={game} />
            ))}
          </GamingMainContainer>
        </Provider>
      </BrowserRouter>
    );
  });
  it("should render the Failure component when the api status is failure", () => {
    videoStore.gameingApiStatus = ApiStatus.FAILURE;
    render(
      <BrowserRouter>
        <Provider globalStore={globalStore} videoStore={videoStore}>
          <GamingMainContainer />
        </Provider>
      </BrowserRouter>
    );
    // expect(screen.getByTestId("loader")).toBeInTheDocument();
  });
});
