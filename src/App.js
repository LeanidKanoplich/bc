import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  return (
    <div>
      <header className="bg-gray-200 shadow p-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">bconto</div>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link></li>
            <li><Link to="/dashboard" className="text-gray-700 hover:text-blue-600">Dashboard</Link></li>
          </ul>
        </nav>
      </header>
      <main className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
