import { useState } from "react";

const Changes = () => {
  const [red, setRed] = useState(true);
  const color = red?'red':'blue';
  const contrary = red?'blue':'red';
  const styleH1 = {
    backgroundColor: `${color}`,
    color: `${red?'black':'white'}`,
  }
  const styleButton = {
    backgroundColor: `${contrary}`,
    color: `${contrary === 'blue'?'white': 'gray'}`,
  }
  return (
    <div>
      <h1 style={styleH1}>My color is {color}</h1>
      <button style={styleButton} type="button" onClick={() => setRed(!red)}>Change to {contrary}</button>
    </div>
  );
}

export default Changes;