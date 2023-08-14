import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addPerson } from './reduxSlices';

export const AddPerson = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const dispatch = useDispatch();

  const addValues = () => {
    dispatch(addPerson({name, age}));
    setName('');
    setAge('');
  }

  return (
    <div>
      <p>Add a person</p>
      <input 
      value={name}
      placeholder="Name"
      onChange={(e) => setName(e.target.value)}/>
      <input 
      value={age}
      placeholder="Age"
      onChange={(e) => setAge(e.target.value)} />
      <button onClick={addValues}>Add person</button>
    </div>
  );
};