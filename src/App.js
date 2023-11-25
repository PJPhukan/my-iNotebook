
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Component section
import Home from './Components/Home/Home';
import Navber from './Components/Home/Navber/Navber'
import About from './Components/About/About'
function App() {
  return (
    <>
    {/* Router setup */}
      <BrowserRouter>
     
        <Navber />
        <Routes>
          <Route exact  path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
