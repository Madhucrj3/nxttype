import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Provider } from "mobx-react";
import { BrowserRouter } from "react-router-dom";
import { videoStore } from "../../stores";
import HomePageSearchBar from "./HomeSearchBar";
describe("homeSearch bar", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("handle Search", async () => {
    videoStore.fetchHomeData = jest.fn();
    const { container } = render(
      <Provider videoStore={videoStore}>
        <HomePageSearchBar />
      </Provider>
    );
    const inputElement = screen.getByPlaceholderText("Search");
    expect(inputElement).toBeInTheDocument();
    fireEvent.change(inputElement, { target: { value: "hello" } });
    expect(videoStore.homeSearch).toBe("hello");
    const searchbutton = screen.getByTestId("searchIcon");
    expect(searchbutton).toBeInTheDocument();
    fireEvent.click(searchbutton);
    await waitFor(() => {
      console.log("hello2", videoStore.fetchHomeData);
      expect(videoStore.fetchHomeData).toHaveBeenCalledTimes(1);
    });
  });
});
