import useState from "react";

const Changes = () => {
  const [red, setRed] = useState(true);
  return (
    <div>
      <h1>My color is </h1>
      <button type="button" onClick={() => setRed(!red)}>Change to {red?'red':'blue'}</button>
    </div>
  );
}

export default Changes;