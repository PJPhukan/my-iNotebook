
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Component section
import Home from './Components/Home/Home';
import Navber from './Components/Home/Navber/Navber'
import About from './Components/About/About'
import NoteState from './Context/notes/noteState';
function App() {
  return (
    <>
    {/* Context api */}
      <NoteState>
        {/* Router setup */}
        <BrowserRouter>
          <Navber />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/about' element={<About />} />
          </Routes>
        </BrowserRouter>
      </NoteState>

    </>
  );
}

export default App;
