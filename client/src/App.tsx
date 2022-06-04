import React from 'react';

import { Route, Routes, Navigate } from 'react-router-dom';
import Splash from './splash';



function App() {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/register"/>}></Route>
      <Route path='/register' element={<Splash entryPoint='register'/>}></Route>
      <Route path='/login' element={<Splash entryPoint='login'/>}></Route>
    </Routes>
  )
}

export default App;
