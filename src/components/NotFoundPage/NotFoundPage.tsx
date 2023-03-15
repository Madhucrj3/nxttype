import { inject, observer } from "mobx-react";
import { GlobalStore } from "../../stores/GlobalStore";
import {
  EmptySavedVideoMainHeading,
  EmptySavedVideoMainDescription,
  EmptySavedVideoMainContainer,
  EmptySavedVideoMain,
  EmptySavedVideoMainImg,
} from "./styledComponents";
interface EmptySavedprops {
  NoSavedSrc: string;
  NoSavedAlt: string;
  NoSavedHeading: string;
  NoSavedDescription: string;
}
interface InjectedEmptySavedpropsProps extends EmptySavedprops {
  globalStore: GlobalStore;
}
const NotFoundPage = inject("globalStore")(
  observer((props: EmptySavedprops) => {
    const { NoSavedSrc, NoSavedAlt, NoSavedHeading, NoSavedDescription } =
      props;
    const { globalStore: theme } = props as InjectedEmptySavedpropsProps;
    return (
      <EmptySavedVideoMainContainer bcol={theme.themes} col={theme.themes}>
        <EmptySavedVideoMain>
          <EmptySavedVideoMainImg
            src={NoSavedSrc}
            alt={NoSavedAlt}
          ></EmptySavedVideoMainImg>
        </EmptySavedVideoMain>
        <EmptySavedVideoMainHeading>
          {NoSavedHeading}
        </EmptySavedVideoMainHeading>
        <EmptySavedVideoMainDescription>
          {NoSavedDescription}
        </EmptySavedVideoMainDescription>
      </EmptySavedVideoMainContainer>
    );
  })
);

export default NotFoundPage;
