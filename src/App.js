import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Skill from './components/skills/Skill';

function App() {
  return (
    <Router>
      <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/test" element={<Skill/>} />
      </Routes>
    </Router>
  );
}

export default App;
