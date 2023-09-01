import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getBeers } from "./beerSlice";

const CreateBeer = ({ beer }) => {
  return (
    <div>
      <p>Name: {beer.name}</p>
      <img src={beer.image} alt="Drink details"/>
      <p>Description: {beer.description}</p>
    </div>
  )
}

const RenderBeers = () => {
  const dispatch = useDispatch();
  const beers = useSelector((state) => state.beers.beer);
  useEffect(() => {
    dispatch(getBeers());
  }, [dispatch]);
  return (
    <section>
      {beers.map((beer) => (
        <CreateBeer beer={beer} key={beer.id} />
      ))}
    </section>
  )
}

export default RenderBeers;