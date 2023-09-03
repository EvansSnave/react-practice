import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigator from './Navigator';
import Main from './Main';
import Purchases from './Purchases';

function App() {
  return (
    <Router>
      <Navigator />
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/purchases" element={<Purchases />}/>
      </Routes>
    </Router>
  );
}

export default App;
