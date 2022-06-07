import React from 'react';


import { Route, Routes } from 'react-router-dom';
import Login from './login';
import Register from './register';
import AppNavBar from './navbar';
import Splash from './splash';

function App() {
  return (
    <>
      <AppNavBar />
      <Routes>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/' element={<Splash />}></Route>
      </Routes>
    </>

  )
}

export default App;
