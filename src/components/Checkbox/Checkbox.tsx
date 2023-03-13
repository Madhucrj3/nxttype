import { inject, observer } from "mobx-react";
import { GlobalStore } from "../../stores/GlobalStore";
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
      <div
        className="InputLoginpass"
        style={{ color: globalData.themes === "Light" ? "#000" : "#fff" }}
      >
        <input
          type={type}
          name={name}
          id={name}
          onClick={handleOnchangeCheckeBox}
        />
        <label htmlFor={name}>Show Password</label>
      </div>
    );
  })
);

export default Checkbox;
