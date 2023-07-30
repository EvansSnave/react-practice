import { useState } from "react";

const Changes = () => {
  const [red, setRed] = useState(true);
  const color = red?'red':'blue';
  const contrary = red?'blue':'red';
  return (
    <div>
      <h1>My color is {color}</h1>
      <button type="button" onClick={() => setRed(!red)}>Change to {contrary}</button>
    </div>
  );
}

export default Changes;