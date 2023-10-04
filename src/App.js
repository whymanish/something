import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Chat from './Components/Chat';

function App() {
 

  return (
    <>
    <BrowserRouter>
    <Dashboard/>
    <Routes>
<Route path="/chat" element={<Chat/>}/>      
    </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;
