import { inject, observer } from "mobx-react";
import { GlobalStore } from "../../stores/GlobalStore";
import {
  CheckBoxContainer,
  CheckBoxInput,
  CheckBoxLabel,
} from "./StyledComponent";
interface CheckBoxProps {
  type: string;
  name: string;
  handleOnClickCheckBox(): void;
  label?: string;
}
interface InjectedCheckboxProps extends CheckBoxProps {
  globalStore: GlobalStore;
}
const Checkbox = inject("globalStore")(
  observer((props: CheckBoxProps) => {
    const { globalStore } = props as InjectedCheckboxProps;
    const globalData = globalStore;
    const { type, name, handleOnClickCheckBox, label } = props;
    const handleOnchangeCheckeBox = () => {
      handleOnClickCheckBox();
    };
    return (
      <CheckBoxContainer CheckboxColor={globalData.themes}>
        <CheckBoxInput
          type={type}
          name={name}
          id={name}
          onClick={handleOnchangeCheckeBox}
        />
        <CheckBoxLabel htmlFor={name}>Show Password</CheckBoxLabel>
      </CheckBoxContainer>
    );
  })
);

export default Checkbox;
