import { useSelector, useDispatch } from "react-redux";
import { removePerson } from "./reduxSlices";

export const RenderPeople = () => {
  const people = useSelector((state) => state.slicePractice.people);
  const dispatch = useDispatch();
  const divs = people.map((person, index) => {
    return (
      <div>
        <p>Person number {index + 1}</p>
        <p>Name: {person.name}</p>
        <p>Age: {person.age}</p>
        <button type="button" onClick={() => dispatch(removePerson(person.id))}>Remove person</button>
      </div>
    )
  });
  return divs;
}