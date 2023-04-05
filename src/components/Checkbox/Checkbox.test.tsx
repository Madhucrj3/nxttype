import Checkbox from "./Checkbox";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "mobx-react";
import { globalStore } from "../../stores";
const handleChangeCheckbox = jest.fn(() => console.log("fred"));
it("checkbox render", () => {
  render(
    <Provider globalStore={globalStore}>
      <Checkbox
        type="checkbox"
        name="show"
        label="SHOW"
        handleOnClickCheckBox={handleChangeCheckbox}
      />
    </Provider>
  );
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).toBeInTheDocument();
  fireEvent.click(checkbox);
  expect(handleChangeCheckbox).toHaveBeenCalledTimes(1);
  const linkElement = screen.getByText("Show Password");
  expect(linkElement).toBeInTheDocument();
});
