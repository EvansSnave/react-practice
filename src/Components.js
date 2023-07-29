import { useEffect, useState } from "react";

const Changes = (props) => {
  const [object, setObject] = useState({
    name: props.name,
    color: 'red',
  });

  useEffect(() => {
    document.querySelector('.color').textContent = `My color is ${object.color}`;
  }, [object.color]);

  const update = (color) => {
    setObject( previous => {
      return { ...previous, color: color}
    })
  }

return (
  <div>
    <p>My name is { object.name }</p>
    <p className="color"></p>
    <button className="buttonChange" type="button" onClick={object.color === 'red'?() => update('blue'): () => update('red')}>
      Change to {object.color === 'red'? 'blue': 'red'}</button>
  </div>
  );
}

export default Changes;