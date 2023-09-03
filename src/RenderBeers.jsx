import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getBeers, purchaseBeerServer, cancelPurchaseServer } from "./beerSlice";

const CreateBeer = ({ beer }) => {
  const dispatch = useDispatch();

  const cancelPurchase = () => {
    dispatch(cancelPurchaseServer(beer.id));
  }

  const purchaseButton = () => {
    dispatch(purchaseBeerServer(beer));
  }

  return (
    <div>
      <p>Name: {beer.name}</p>
      <img src={beer.image} alt="Drink details"/>
      <p>{beer.purchased && <span>Purchased</span>}Description: {beer.description}</p>
      {beer.purchased ? 
        <button
        type="button"
        onClick={cancelPurchase}
        >Cancel purchase</button>
        :
        <button
        type="button"
        onClick={purchaseButton}
        >Purchase drink</button>
      }
    </div>
  )
}

const RenderBeers = () => {
  const dispatch = useDispatch();
  const beers = useSelector((state) => state.beers);

  useEffect(() => {
    if (beers.length === 0) {
      dispatch(getBeers());
    };
  }, [dispatch, beers]);

  return (
    <section>
      {beers.map((beer) => (
        <CreateBeer beer={beer} key={beer.id} />
      ))}
    </section>
  )
}

export default RenderBeers;