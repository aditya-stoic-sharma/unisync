import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './frontend/Login';
import Register from './frontend/Register';
import Home from './frontend/Home';
import TimeTabel from './frontend/TimeTabel';
import Notes from './frontend/Notes';
import { useState } from 'react';
import Complaint from './frontend/Complaint';
import NoteState from './Context/notes/NoteState';
function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <>
      <NoteState>
        <Router>

          <Routes>

            <Route path="/" element={<Login showAlert={showAlert} />} />
            <Route path="/login" element={<Login showAlert={showAlert} />} />
            <Route path="/register" element={<Register showAlert={showAlert} />} />

            <Route path='/home' element={<Home alert={alert} showAlert={showAlert} />}>
              <Route path="notes" element={<Notes showAlert={showAlert} />} />
              <Route path="timetabel" element={<TimeTabel showAlert={showAlert} />} />
              <Route path="complaint" element={<Complaint showAlert={showAlert} />} />
            </Route>

          </Routes>

        </Router>

      </NoteState>

    </>
  );
}

export default App;
