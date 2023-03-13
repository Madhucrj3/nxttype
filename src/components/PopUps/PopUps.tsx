import { inject, observer } from "mobx-react";
import { GlobalStore } from "../../stores/GlobalStore";
import {
  PopupButtonCancel,
  PopupButtonConfirm,
  PopupContainer,
  PopupContainerButtonContainer,
  PopupContainerHeading,
} from "./StyleComponent";
interface PopUpsProps {
  closeModal: () => void;
  handleLogout: () => void;
}
interface InjectedGlobalProps extends PopUpsProps {
  globalStore: GlobalStore;
}
const PopUps = inject("globalStore")(
  observer((props: PopUpsProps) => {
    const { closeModal, handleLogout } = props;
    const { globalStore } = props as InjectedGlobalProps;
    const handelCancelLogout = () => {
      closeModal();
    };
    const hanleConfirmLogout = () => {
      handleLogout();
    };
    const globalvariable = globalStore;
    console.log(globalvariable);
    return (
      <PopupContainer
        colorback={globalvariable.themes === "Light" ? "#fff" : "#000"}
      >
        <PopupContainerHeading
          colorh1={globalvariable.themes === "Light" ? "#000" : "#fff"}
        >
          Are You sure you want to logout?
        </PopupContainerHeading>
        <PopupContainerButtonContainer>
          <PopupButtonCancel onClick={handelCancelLogout}>
            Cancel
          </PopupButtonCancel>
          <PopupButtonConfirm onClick={hanleConfirmLogout}>
            Confirm
          </PopupButtonConfirm>
        </PopupContainerButtonContainer>
      </PopupContainer>
    );
  })
);

export default PopUps;
