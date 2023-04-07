import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Provider } from "mobx-react";
import { JsxElement } from "typescript";
import globalStore from "../../stores/GlobalStore";
import HomeBanner from "./HomeBanner";
jest.mock("../Logo", () => () => <div>Hello World</div>);
describe("home Banner", () => {
  let containers: HTMLElement;
  const mockglobalStore = {
    setCrossBanner: jest.fn(() => console.log("rhe")),
    hasCrossBanner: true,
  };
  beforeEach(() => {
    const { container } = render(
      <Provider globalStore={mockglobalStore}>
        <HomeBanner />
      </Provider>
    );
    containers = container;
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("logo should be rendered", () => {
    expect(containers.textContent).toMatch("Hello World");
  });
  it("heading and description should be displayed", () => {
    expect(
      screen.getByText("Buy Nxt Watch Premium plans with UPI")
    ).toBeInTheDocument();
    expect(screen.getByText("GET IT NOW")).toBeInTheDocument();
  });
  it("cross mark", async () => {
    const crossbutton = screen.getByTestId("icon");
    fireEvent.click(crossbutton);
    await waitFor(() => {
      expect(mockglobalStore.setCrossBanner).toHaveBeenCalledTimes(1);
    });
  });
});
