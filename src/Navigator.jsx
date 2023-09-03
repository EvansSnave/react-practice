import { NavLink } from "react-router-dom";

const Navigator = () => {
  return (
    <nav>
      <h1>My practice Website</h1>
      <ul>
        <li><NavLink to="/">Main</NavLink></li>
        <li><NavLink to="/purchases">Purchases</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navigator;