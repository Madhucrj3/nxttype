import React from "react";
import ButtonLoader from "../ButtonLoader/ButtonLoader";
import { ButtonComponent, ButtonContainer } from "./StyledComponent";
interface ButtonProps {
  btnstyle: React.CSSProperties;
  handleOnClick(): void;
  text: string;
  isLoading?: boolean;
}
const Button = ({
  btnstyle,
  handleOnClick,
  text,
  isLoading = false,
}: ButtonProps) => {
  const handleClickButton = () => {
    handleOnClick();
  };
  return (
    <ButtonContainer>
      <ButtonComponent style={btnstyle} onClick={handleClickButton}>
        {isLoading ? <ButtonLoader /> : text}
      </ButtonComponent>
    </ButtonContainer>
  );
};
export default Button;
