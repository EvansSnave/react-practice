import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigator from './Navigator';
import Main from './Main';

function App() {
  return (
    <Router>
      <Navigator />
      <Routes>
        <Route path="/" element={<Main />}/>
      </Routes>
    </Router>
  );
}

export default App;
