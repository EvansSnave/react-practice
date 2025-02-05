import { ButtonType } from "../interfaces";
import "../style/buttons.scss";

const CustomButton = ({ text, type, functionality }:{ text: string, type: string, functionality: ButtonType }) => 
  <div className="wrap"><button type="button" className={ type } onClick={ functionality }>{ text }</button></div>

export default CustomButton;
