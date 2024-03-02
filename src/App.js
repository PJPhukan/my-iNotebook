
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Component section
import Home from './Components/Home/Home';
import Navber from './Components/Home/Navber/Navber'
import About from './Components/About/About'
import NoteState from './Context/notes/noteState';
import Alert from './Components/Home/Note/Alert/Alert';
import Login from './Components/Authentication/Login';
import Signup from './Components/Authentication/Signup';
import { useState } from 'react';
function App() {

  const [alert, setalert] = useState(null);
  const showAlert = (massage, type) => {
    setalert({
      msg: massage,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 2000);
  }

  return (
    <>
      {/* Context api */}
      <NoteState>
        {/* Router setup */}
        <BrowserRouter>
          <Navber />
          <Alert alert={alert} />
          <div className="container">
            <Routes>
              <Route exact path='/' element={<Home showAlert={showAlert} />} />
              <Route exact path='/about' element={<About />} />
              <Route exact path='/login' element={<Login showAlert={showAlert} />} />
              <Route exact path='/signup' element={<Signup showAlert={showAlert} />} />
            </Routes>
          </div>

        </BrowserRouter>
      </NoteState>

    </>
  );
}

export default App;
