import './App.css';
import AppFooter from './Components/AppFooter';
import AppHeader from './Components/AppHeader';
import { Routes, Route } from 'react-router-dom';
import Home from './Views/Home';
import About from './Views/About';

function App() {
  return (
    <div> 
      <AppHeader/>
      <AppFooter/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
