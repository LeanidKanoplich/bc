import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './components/home';
import Dashboard from './components/dashboard';
import Login from './components/login';
import Register from './components/register';

function App() {
  return (
    <div className="App">
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-2xl">Welcome to bconto</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>
      </header>
      <main className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
