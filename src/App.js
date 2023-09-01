import './App.css';
import Changes from './Comp';
import { AddPerson } from './AddPersons';
import { RenderPeople } from './RenderPeople';
import RenderBeers from './RenderBeers';

function App() {
  return (
    <>
    <Changes />
    <RenderPeople />
    <AddPerson />
    <RenderBeers />
    </>
  );
}

export default App;
