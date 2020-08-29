import React from 'react';
import './App.css';
import Nav from './components/Nav'
import EmployeeTable from './components/EmployeeTable'
import Container from "./components/Container";
function App() {
  return (
    <div className="App">
      <Nav />
      <EmployeeTable />
      <Container />
    </div>
  );
}

export default App;
