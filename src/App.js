import './App.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom'
export const  App = () => {
  return (
    <>
  <Routes>
    <Route path='/*' element={<>home</>}/>
    <Route path='/login/*' element={<>login</>}/>
    <Route path='/register/*' element={<>register</>}/>
    <Route path='/user/*' element={<>user</>}/>
    <Route path='/score/*' element={<>score</>}/>
  </Routes>
    </>
  );
}

