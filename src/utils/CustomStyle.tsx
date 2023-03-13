import  { Styles } from "react-modal";
const customStyles = (currtheme: string): Styles => ({
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      background: "none",
      border: "none",
      transform: "translate(-50%, -50%)",
    },
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor:
        currtheme === "Light"
          ? "rgb(48 42 42 / 48%)"
          : "rgba(255, 255, 255, 0.50)",
    },
  });
  export default customStyles;