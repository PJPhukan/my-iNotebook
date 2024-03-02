
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
function App() {
  return (
    <>
      {/* Context api */}
      <NoteState>
        {/* Router setup */}
        <BrowserRouter>
          <Navber />
          <Alert massage="This is an alert" />
          <div className="container">
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/about' element={<About />} />
              <Route exact path='/login' element={<Login />} />
              <Route exact path='/signup' element={<Signup />} />
            </Routes>
          </div>

        </BrowserRouter>
      </NoteState>

    </>
  );
}

export default App;
