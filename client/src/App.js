import React from 'react'
import { Route, Routes } from "react-router-dom";
import Header from './Components/header';
import Home from './Pages/home';
import Login from './Pages/login';
import Register from './Pages/register';
import Fileupload from './Pages/fileupload';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/file-upload' element={<Fileupload/>}/>

      </Routes>
    </div>
  );
}

export default App;
