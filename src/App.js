import React from 'react';
import './App.css';
import Nav from './components/Nav'
import EmployeeTable from './components/EmployeeTable'
function App() {
  return (
    <div className="App">
      <Nav />
      <EmployeeTable />
    </div>
  );
}

export default App;
