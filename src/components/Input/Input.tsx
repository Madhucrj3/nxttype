import React, { useContext } from "react";
import { inject, observer } from "mobx-react";
import { GlobalStore } from "../../stores/GlobalStore";
import {
  InputLogin,
  InputLoginLabel,
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
const Input = inject("globalStore")(observer((props: Inputprops) => {
  const { globalStore } = props as InjectedInputProps;
  console.log(globalStore);
  const { type, name, label, value, handleChangeDeta, place } = props;
  const theme = globalStore;
  const handleChangeDet = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChangeDeta(e.target.value);
  };
  return (
    <InputLogin className="InputLogin" style={{ fontWeight: "800px" }}>
      <InputLoginLabel htmlFor="username">{label}</InputLoginLabel>
      <input
        onChange={handleChangeDet}
        type={type}
        name={name}
        id={name}
        value={value}
        placeholder={place}
        style={{
          padding: " 0 1rem",
          color: theme.themes === "Light" ? "#000" : "#fff",
          backgroundColor: theme.themes === "Light" ? "fff" : "#000",
        }}
      />
    </InputLogin>
  );
}
));
export default Input;
