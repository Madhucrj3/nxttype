import { inject, observer } from "mobx-react";
import NotFoundPage from "../../components/NotFoundPage";
import {
  NOT_FOUND_DARK_ROUTE,
  NOT_FOUND_LIGHT_ROUTE,
} from "../../constants/ImageUrl";
import withNavbarSidebarhoc from "../../hocs/withNavbarSidebarhoc";
import { GlobalStore } from "../../stores/GlobalStore";
import { NotFoundContainer } from "./StyledComponent";

interface NotFoundProps {}

interface InjectedNotFoundProps {
  globalStore: GlobalStore;
}
const NotFound = inject("globalStore")(
  observer((props: NotFoundProps) => {
    const { globalStore: theme } = props as InjectedNotFoundProps;

    return (
      <NotFoundContainer>
        <NotFoundPage
          NoSavedHeading="Page Not Found"
          NoSavedDescription="We are Sorry, the page you requested could not be found"
          NoSavedSrc={
            theme.themes === "Light"
              ? NOT_FOUND_LIGHT_ROUTE
              : NOT_FOUND_DARK_ROUTE
          }
          NoSavedAlt="empty"
        />
      </NotFoundContainer>
    );
  })
);

export default withNavbarSidebarhoc(NotFound);
