import { ButtonType } from "../interfaces";
import "../style/buttons.scss";

const CustomButton = ({ text, type, functionality }:{ text: string, type: string, functionality: ButtonType }) => 
  <button type="button" className={`custom-button ${type}`} onClick={functionality}>
    <span>{text}</span>
    <svg className="button-svg" viewBox="0 0 104 104" preserveAspectRatio="none">
      <path vectorEffect="non-scaling-stroke" d="M5 5 H99 V70 L85 99 H5 Z"></path>
    </svg>
  </button>

export default CustomButton;
