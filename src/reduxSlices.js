import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

const initial = {
  people: [
    {
      name: 'Kevin',
      age: '22',
      id: 'id1',
    },
    {
      name: 'Alexander',
      age: '21',
      id: 'id2',
    },
  ],
}

const slice = createSlice({
  name: 'slicePractice',
  initialState: initial,
  reducers: {
    addPerson: (state, action) => {
      const id = uuid();
      const { name, age } = action.payload;
      const newPerson = { name, age, id: `id${id}`};
      state.people = state.people.concat(newPerson);
    },
    
    removePerson: (state, action) => {
      const id = action.payload;
      state.people = state.people.filter((person) => person.id !== id);
    }
  },
});

export const { addPerson, removePerson } = slice.actions;
export default slice.reducer;