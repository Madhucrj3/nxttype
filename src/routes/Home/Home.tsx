import { inject, observer } from "mobx-react";
import HomeMainContainer from "../../components/HomeMainContainer";
import { HOME } from "../../constants/MenuItem";
import withNavbarSidebarhoc from "../../hocs/withNavbarSidebarhoc";
import { GlobalStore } from "../../stores/GlobalStore";
interface Homeprops {}
interface InjectedHomeProps {
  globalStore: GlobalStore;
}
const Home = inject("globalStore")(
  observer((props: Homeprops) => {
    const { globalStore } = props as InjectedHomeProps;
    globalStore.setStatus(HOME);
    return (
      <>
        <HomeMainContainer />
      </>
    );
  })
);
export default withNavbarSidebarhoc(Home);
