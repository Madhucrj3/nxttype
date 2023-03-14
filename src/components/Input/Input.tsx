import React from "react";
import { inject, observer } from "mobx-react";
import { GlobalStore } from "../../stores/GlobalStore";
import {
  InputBox,
  InputContainer,
  InputLabel,
} from "../../routes/Login/LoginStyledComponent";
interface Inputprops {
  type: string;
  name: string;
  handleChangeDeta(val: string): void;
  label?: string;
  place: string;
  value: string;
}
interface InjectedInputProps extends Inputprops {
  globalStore: GlobalStore;
}
const Input = inject("globalStore")(
  observer((props: Inputprops) => {
    const { globalStore } = props as InjectedInputProps;
    const { type, name, label, value, handleChangeDeta, place } = props;
    const theme = globalStore;
    const handleChangeDet = (e: React.ChangeEvent<HTMLInputElement>) => {
      handleChangeDeta(e.target.value);
    };
    return (
      <InputContainer className="InputLogin" style={{ fontWeight: "800px" }}>
        <InputLabel htmlFor="username">{label}</InputLabel>
        <InputBox
          onChange={handleChangeDet}
          type={type}
          name={name}
          id={name}
          value={value}
          placeholder={place}
          inputColor={theme.themes}
        />
      </InputContainer>
    );
  })
);
export default Input;
