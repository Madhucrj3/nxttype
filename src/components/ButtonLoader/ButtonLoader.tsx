import { TailSpin } from "react-loader-spinner";
import { ButtonLoaderMain } from "./StyledComponent";

const ButtonLoader = () => {
  return (
    <ButtonLoaderMain>
      <TailSpin color="#e0e3e4" height={30} width={30} />
    </ButtonLoaderMain>
  );
};

export default ButtonLoader;
