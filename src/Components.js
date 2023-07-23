import { useState, useEffect, useRef } from "react";

const Changes = (props) => {
  const [object, setObject] = useState({
    name: props.name,
    color: 'red',
  });

  const value = useRef(object.color).current;

  const update = (arg) => {
    setObject( previous => {
      return { ...previous, color: arg}
    })
  }

  useEffect(() => {
    if (value === 'red') {
      update('blue');
    }
  }, [value]);

  return (
    <div>
      <p>My name is { object.name }</p>
      <p>My color is { object.color }</p>
      <button type="button" onClick={ () => update(value) }>blue</button>
    </div>
  );
}

export default Changes;