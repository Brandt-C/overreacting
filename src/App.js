import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Shop from './views/Shop';
import { useState } from 'react';

const App = () => {

  const [students, setStudents] = useState(['Moi', 'me', 'myself', 'I'])

  return (
    <div className="App">
      <Navbar students={students} />
      <Routes>
        <Route children path='/' element={<Home />} />
        <Route children path='/shop' element={<Shop students={students} setStudents={setStudents}/>} />
      </Routes>
    </div>
  );
}

export default App;
