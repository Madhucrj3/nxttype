import { inject, observer } from "mobx-react";
import React from "react";
import Navbar from "../../components/Navbar";
import SideBarContainer from "../../components/SideBarContainer";
import { GlobalStore } from "../../stores/GlobalStore";
import { WrapperStyledComponent } from "./styledComponent";
interface ComponentWithDataProps {}
interface InjectedNavbarProps extends ComponentWithDataProps {
  globalStore: GlobalStore;
}
const withNavbarSidebarhoc = (WrappedComponent: React.ComponentType<any>) => {
  const ComponentWithData = inject("globalStore")(
    observer((props: ComponentWithDataProps) => {
      const { globalStore: theme } = props as InjectedNavbarProps;
      return (
        <>
          <Navbar />

          <WrapperStyledComponent bcol={theme.themes}>
            <SideBarContainer />
            <WrappedComponent />
          </WrapperStyledComponent>
        </>
      );
    })
  );
  return ComponentWithData;
};

export default withNavbarSidebarhoc;
