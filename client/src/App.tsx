import React from 'react';

import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './login';
import Register from './register';


function App() {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/register"/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
    </Routes>
  )
}

export default App;
