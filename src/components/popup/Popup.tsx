import  { ReactNode } from "react";
import "./popup.css";
import close from "./icons/close.png";
import useNavStore from "../data/NavStore";

interface PopupProps {
  children: ReactNode; // Adding type for children prop
}

const Popup = ({ children }: PopupProps) => {
  const { showPopup, setshowPopup } = useNavStore(); // Ensure that useNavStore returns correctly typed values
  
  const handleClose = () => {
    console.log("changes");
    setshowPopup();
  };

  return showPopup ? (
    <div>
      <div onClick={handleClose} className="overlay"></div>
      <div className="popup">
        <button className="close-btn" onClick={handleClose}>
          <img style={{ width: 15 }} src={close} alt="close button" />
        </button>
        <div className="content">{children}</div>
      </div>
    </div>
  ) : null;
};

export default Popup;
