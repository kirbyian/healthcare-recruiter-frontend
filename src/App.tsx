import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import Banner from './components/layout/Banner';

function App() {
  return (
    <div>
      <Banner text="Healthcare Recruiter Jobs" color="#3498db" />
      <br></br>
      <Dashboard/>
    </div>
       
  );
}

export default App;
