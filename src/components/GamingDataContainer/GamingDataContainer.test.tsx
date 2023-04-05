import GamingDataContainer from "./GamingDataContainer";
import { Provider } from "mobx-react";
import { globalStore } from "../../stores";
import { render, screen, fireEvent } from "@testing-library/react";
import { VideoDetailInterface } from "../../stores/type";
import { BrowserRouter } from "react-router-dom";
describe("Gaming Data Container", () => {
  const gameData: VideoDetailInterface = {
    id: "123",
    thumbnail_url: "https://example.com/image.jpg",
    title: "Test Game",
    view_count: "1234",
  };
  it("check on click", () => {
    render(
      <BrowserRouter>
        <Provider globalStore={globalStore}>
          <GamingDataContainer game={gameData} />
        </Provider>
      </BrowserRouter>
    );
    const link = screen.getByRole("link");
    expect(link.getAttribute("href")).toBe("/videos/123");
  });
  it("check for thumbnail url and other description", () => {
    render(
      <BrowserRouter>
        <Provider globalStore={globalStore}>
          <GamingDataContainer game={gameData} />
        </Provider>
      </BrowserRouter>
    );
    const title = screen.getByText(gameData.title);
    expect(title).toBeInTheDocument();
    const imageElement = screen.getByRole("img");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", gameData.thumbnail_url);
  });
});
