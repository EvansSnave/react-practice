import { useSelector } from "react-redux";

const Purchases = () => {
  const drinks = useSelector((state) => state.beers.beer);
  return (
    <div>
      <h1>Purchased drinks</h1>

    </div>
  )
}

export default Purchases;