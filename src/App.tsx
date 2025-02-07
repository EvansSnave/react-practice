import { BrowserRouter, Routes, Route } from "react-router";
import Nav from './components/Nav';
import Main from "./components/main/Main";
import Second from "./components/Second";
import "./style/global.scss"

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <div className="content">
        <Routes>
          <Route path="/" element={ <Main /> } />
          <Route path="/second" element={ <Second /> } />
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
