import { inject, observer } from "mobx-react";
import { useEffect } from "react";
import HomeMainContainer from "../../components/HomeMainContainer";
import { HOME } from "../../constants/MenuItem";
import withNavbarSidebarhoc from "../../hocs/withNavbarSidebarhoc";
import { GlobalStore } from "../../stores/GlobalStore";

interface Homeprops {}
interface InjectedHomeProps extends Homeprops {
  globalStore: GlobalStore;
}
const Home = inject("globalStore")(
  observer((props: Homeprops) => {
    const { globalStore } = props as InjectedHomeProps;
    useEffect(() => {
      globalStore.setStatus(HOME);
    }, []);
    return (
      <>
        <HomeMainContainer />
      </>
    );
  })
);
export default withNavbarSidebarhoc(Home);
