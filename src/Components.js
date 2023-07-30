import useState from "react";

const Changes = () => {
  const [red, setRed] = useState(true);
  return (
    <div>
      <p className="color">color</p>
      <button className="buttonChange" type="button" onClick={() => setRed(!red)}>Hi</button>
    </div>
    );
}

export default Changes;