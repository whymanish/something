import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Chat from './Components/Chat';
import QrCode from './Components/QrCode';
import KanbanBoard from './Components/KanbanBoard';
import Board from './Components/Kanban/Board';
import VendorValidation from './Components/VendorValidation';
import Event from './Components/EventPage/Event';
import EventsData from './Components/EventPage/EventsData';
import Sidebar from './Components/EventTest/Sidebar';
import Header from './Components/EventTest/Header';
import EventTable from './Components/EventTest/EventTable';
import BudgetManagement from './Components/EventTest/BudgetManagement';
import OrganizerCalendar from './Components/EventTest/OrganizerCalendar';
import ChatApp from './Components/ChatPage/ChatApp';
import SignUpForm from './Components/Kanban/SignUpForm';
import LoginForm from './Components/Kanban/LoginForm';
import SignupForm from './Components/Kanban/SignUpForm';
function App() {
 

  return (
    <>
 <LoginForm/>
    </>
    
  );
}

export default App;
