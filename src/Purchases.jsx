import { useSelector } from "react-redux";

const Purchases = () => {
  const drinks = useSelector((state) => state.beers);
  const purchased = drinks.filter((beer) => beer.purchased);
  return (
    <div>
      <h1>Purchased drinks</h1>
      {purchased.map((beer) => (
        <p key={beer.id}>{beer.name}</p>
      ))}
    </div>
  )
}

export default Purchases;