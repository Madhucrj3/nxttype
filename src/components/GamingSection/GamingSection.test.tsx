import GamingMainContainer from "./GamingSection";
import { globalStore, videoStore } from "../../stores";
import { BrowserRouter } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { waitFor } from "@testing-library/dom";
import { Provider } from "mobx-react";
import { ApiStatus } from "../../stores/type";
jest.mock("../LoaderComponent", () => () => <div>Mocked LoaderMain</div>);
jest.mock("../GamingDataContainer", () => () => <div>Gaming container</div>);
jest.mock("../FailureView", () => () => <div>Failure container</div>);
describe("Gaming Section", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("should render the loader component when the api status is Initial", () => {
    //videoStore.getGamingList = jest.fn();
    const { container } = render(
      <BrowserRouter>
        <Provider globalStore={globalStore} videoStore={videoStore}>
          <GamingMainContainer />
        </Provider>
      </BrowserRouter>
    );
    expect(container.textContent).toMatch("Mocked LoaderMain");
  });
  it("should render the loader component when the api status is Loading", async () => {
    const { container } = render(
      <BrowserRouter>
        <Provider globalStore={globalStore} videoStore={videoStore}>
          <GamingMainContainer />
        </Provider>
      </BrowserRouter>
    );
    await waitFor(() => {
      expect(videoStore.gameingApiStatus).toBe(ApiStatus.LOADING);
      expect(container.textContent).toMatch("Mocked LoaderMain");
    });
  });
  it("shound render when sucess", async () => {
    const { container } = render(
      <BrowserRouter>
        <Provider globalStore={globalStore} videoStore={videoStore}>
          <GamingMainContainer />
        </Provider>
      </BrowserRouter>
    );
    await waitFor(() => {
      expect(videoStore.gameingApiStatus).toBe(ApiStatus.SUCESS);
      expect(container.textContent).toMatch("Gaming");
    });
  });

  it("should render in failue case", async () => {
    const mockVideoStore = {
      homeApiStatus: ApiStatus.FAILURE,
      getGamingList: jest.fn(),
    };
    const { container } = render(
      <BrowserRouter>
        <Provider globalStore={globalStore} videoStore={mockVideoStore}>
          <GamingMainContainer />
        </Provider>
      </BrowserRouter>
    );
    expect(container.textContent).toMatch("Failure container");
  });
});
