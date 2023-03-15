import { inject, observer } from "mobx-react";
import SaveVideoMainContainer from "../../components/SavedVideoContainer";
import { SAVED } from "../../constants/MenuItem";
import withNavbarSidebarhoc from "../../hocs/withNavbarSidebarhoc";
import { GlobalStore } from "../../stores/GlobalStore";
interface Savedvideoprops {}
interface InjectedSavedvideoProps {
  globalStore: GlobalStore;
}
const Savedvideo = inject("globalStore")(
  observer((props: Savedvideoprops) => {
    const { globalStore } = props as InjectedSavedvideoProps;
    globalStore.setStatus(SAVED);
    return (
      <>
        <SaveVideoMainContainer />
      </>
    );
  })
);

export default withNavbarSidebarhoc(Savedvideo);
