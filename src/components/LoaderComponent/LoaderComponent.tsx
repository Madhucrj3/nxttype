import { TailSpin } from "react-loader-spinner";
import { MainLoader } from "./StyledComponent";
const LoaderMain = () => {
  return (
    <MainLoader>
      <TailSpin color="#00BFFF" height={50} width={50} />
    </MainLoader>
  );
};

export default LoaderMain;