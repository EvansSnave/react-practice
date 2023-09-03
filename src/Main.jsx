import { AddPerson } from "./AddPersons";
import Changes from "./Comp";
import { RenderPeople } from "./RenderPeople";
import RenderBeers from "./RenderBeers";

const Main = () => {
  return (
  <>
    <Changes />
    <AddPerson />
    <RenderPeople />
    <RenderBeers />
  </>
  )
}

export default Main;