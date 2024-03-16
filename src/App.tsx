import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import Banner from './components/layout/Banner';
import { NavBar } from './components/dashboard/NavBar';
import { Route, Routes } from 'react-router-dom';
import ArchivedJobs from './components/dashboard/ArchivedJobs';

function App() {
  return (
    <div>
      <Banner text="Healthcare Recruiter Jobs" color="#3498db" />
      <NavBar/>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/home" element={<Dashboard />} />
        <Route path="/archived" element={<ArchivedJobs />} />
      </Routes>
    </div>
       
  );
}

export default App;
