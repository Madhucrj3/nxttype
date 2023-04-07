import { render, waitFor } from "@testing-library/react";
import { Provider } from "mobx-react";
import { BrowserRouter } from "react-router-dom";
import { globalStore, videoStore } from "../../stores";
import { ApiStatus } from "../../stores/type";
import HomeMainContainer from "./HomeMainContainer";
jest.mock("../LoaderComponent", () => () => <div>Mocked LoaderMain</div>);
jest.mock("../FailureView", () => () => <div>Failure container</div>);
describe("Home Main Container", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("check for initial Case", async () => {
    expect(videoStore.homeApiStatus).toBe(ApiStatus.INITIAL);
    const { container } = render(
      <BrowserRouter>
        <Provider globalStore={globalStore} videoStore={videoStore}>
          <HomeMainContainer />
        </Provider>
      </BrowserRouter>
    );
    await waitFor(() => {
      expect(videoStore.homeApiStatus).toBe(ApiStatus.LOADING);
      expect(container.textContent).toMatch("Mocked LoaderMain");
    });
  });
  it("check for Loading Case", async () => {
    const { container } = render(
      <BrowserRouter>
        <Provider globalStore={globalStore} videoStore={videoStore}>
          <HomeMainContainer />
        </Provider>
      </BrowserRouter>
    );
    await waitFor(() => {
      expect(videoStore.homeApiStatus).toBe(ApiStatus.LOADING);
      expect(container.textContent).toMatch("Mocked LoaderMain");
    });
  });
  it("check for Sucess Case", async () => {
    const { container } = render(
      <BrowserRouter>
        <Provider globalStore={globalStore} videoStore={videoStore}>
          <HomeMainContainer />
        </Provider>
      </BrowserRouter>
    );
    await waitFor(() => {
      expect(videoStore.homeApiStatus).toBe(ApiStatus.SUCESS);
      expect(container.textContent).toMatch(
        "Buy Nxt Watch Premium plans with UPI"
      );
      expect(container.textContent).toMatch("Channel Name");
    });
  });
  it("check for Failure Case", async () => {
    const mockVideoStore = {
      homeApiStatus: ApiStatus.FAILURE,
      fetchHomeData: jest.fn(),
    };
    const { container } = render(
      <BrowserRouter>
        <Provider globalStore={globalStore} videoStore={mockVideoStore}>
          <HomeMainContainer />
        </Provider>
      </BrowserRouter>
    );
    expect(container.textContent).toMatch("Failure container");
  });
});
