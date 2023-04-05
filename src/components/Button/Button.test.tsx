import Button from "./Button";
import { render, screen, fireEvent } from "@testing-library/react";
it("should render a button", () => {
  const onClickMock = jest.fn(() => console.log("hello"));
  render(
    <Button
      text="Logout"
      btnstyle={{
        backgroundColor: "#fff",
        border: "1px solid #4f46e5",
        borderRadius: "3px",
        height: "30px",
        width: "65px",
        cursor: "pointer",
        color: "#4f46e5",
      }}
      handleOnClick={onClickMock}
    />
  );
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toBeInTheDocument();
  fireEvent.click(buttonElement);
  expect(onClickMock).toHaveBeenCalledTimes(1);
  const linkElement = screen.getByText("Logout");
  expect(linkElement).toBeInTheDocument();
});
