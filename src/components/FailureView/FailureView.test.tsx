import Failure from "./FailureView";
import { Provider } from "mobx-react";
import { globalStore } from "../../stores";
import { render, screen, fireEvent } from "@testing-library/react";
describe("FailureView", () => {
  let props: any;
  beforeEach(() => {
    props = {
      src: "image.png",
      alt: "alt text",
      retryPage: jest.fn(() => console.log("hello")),
      heading: "Error Heading",
      description: "Error Description",
    };
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("renders failure View", () => {
    render(
      <Provider globalStore={globalStore}>
        <Failure {...props} />
      </Provider>
    );
    const imageElement = screen.getByRole("img");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", props.src);
    expect(imageElement).toHaveAttribute("alt", props.alt);
  });
  it("check heading and description", () => {
    const { getByText, getByAltText } = render(
      <Provider globalStore={globalStore}>
        <Failure {...props} />
      </Provider>
    );
    const headingEl = getByText(props.heading);
    expect(headingEl).toBeInTheDocument();
    const descriptionEl = getByText(props.description);
    expect(descriptionEl).toBeInTheDocument();
  });
});
