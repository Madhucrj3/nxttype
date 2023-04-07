import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Provider } from "mobx-react";
import { globalStore } from "../../stores";

import IndividualActionContainer from "./IndividualActionContainer";
const likeValue = jest.fn(() => console.log("liked"));
describe("IndividualActionContainer", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("Individual Action Container", async () => {
    render(
      <Provider globalStore={globalStore}>
        <IndividualActionContainer
          text="Like"
          isClicked={false}
          handleActionItem={likeValue}
          iconsFont={faThumbsUp}
        />
      </Provider>
    );
    const majorContainer = screen.getByTestId("Action-Container-Like");
    expect(majorContainer).toBeInTheDocument();
    expect(majorContainer).toHaveStyle(`color: ""`);
    // expect(container.textContent).toMatch("Like");
    fireEvent.click(screen.getByText("Like"));
    expect(likeValue).toHaveBeenCalledTimes(1);
    //expect(majorContainer.style.color).toEqual("blue");
    fireEvent.click(screen.getByText("Like"));

    expect(likeValue).toHaveBeenCalledTimes(2);
    await waitFor(() => {
      expect(majorContainer).toHaveStyle(`color: "#fff"`);
    });
    const element = screen.getByTestId("Like");
    expect(element).toBeInTheDocument();
    fireEvent.click(element);
    expect(likeValue).toHaveBeenCalledTimes(3);
    await waitFor(() => {
      expect(majorContainer).toHaveStyle(`color: "#fff"`);
    });
    fireEvent.click(majorContainer);
    expect(likeValue).toHaveBeenCalledTimes(4);
    await waitFor(() => {
      expect(majorContainer).toHaveStyle(`color: "red"`);
    });
  });
});
