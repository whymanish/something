// src/components/MainContent.js
import React from 'react';
import Calendar from './Calendar';
import Chat from './Chat';
import { Link } from 'react-router-dom';
const MainContent = () => {
  return (
    <main className="bg-[#f5f8fe] p-4">
      <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
      <div className="bg-white h-[120vh] mb-40 p-4 shadow-md rounded-md">
       <Link to="/chat"><button>CHAT</button></Link>
      </div>
    </main>
  );
};

export default MainContent;
