import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
        <header className="bg-gray-200 shadow p-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600 logo">bconto</div>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="/" className="text-gray-700 hover:text-blue-600">Home</a></li>
              <li><a href="#" className="text-gray-700 hover:text-blue-600">Product</a></li>
              <li><a href="#" className="text-gray-700 hover:text-blue-600">Integrations</a></li>
              <li><a href="#" className="text-gray-700 hover:text-blue-600">Teaching</a></li>
              <li><a href="#" className="text-gray-700 hover:text-blue-600">Prices</a></li>
              <li><a href="#" className="text-gray-700 hover:text-blue-600">Accounting Companies</a></li>
            </ul>
          </nav>
          <div className="space-x-2 auth-buttons">
            <button onClick={() => window.location.href='login.html'} className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
            <button onClick={() => window.location.href='register.html'} className="bg-green-500 text-white px-4 py-2 rounded">Register</button>
          </div>
        </header>
        <main className="p-4">
          <Routes>
            <Route path="/" element={<h1 className="text-4xl">Welcome to bconto</h1>} />
            {/* Add more routes as needed */}
          </Routes>
        </main>
        <footer className="bg-gray-200 shadow p-4 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 footer-content">
            <div className="footer-section">
              <h4 className="text-lg font-bold mb-2">bconto</h4>
              <ul>
                <li><a href="#" className="hover:text-gray-800">About bconto</a></li>
                <li><a href="#" className="hover:text-gray-800">Reviews</a></li>
                <li><a href="#" className="hover:text-gray-800">Free account recognition</a></li>
                <li><a href="#" className="hover:text-gray-800">Improvement plan</a></li>
                <li><a href="#" className="hover:text-gray-800">Advantages of the cloud</a></li>
                <li><a href="#" className="hover:text-gray-800">Accounting program comparison</a></li>
                <li><a href="#" className="hover:text-gray-800">For partners</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4 className="text-lg font-bold mb-2">Calculators</h4>
              <ul>
                <li><a href="#" className="hover:text-gray-800">Salary calculator 2024</a></li>
                <li><a href="#" className="hover:text-gray-800">Per diem calculator</a></li>
                <li><a href="#" className="hover:text-gray-800">Calendar of working days</a></li>
                <li><a href="#" className="hover:text-gray-800">Individual activity calculator</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4 className="text-lg font-bold mb-2">Very Serious</h4>
              <ul>
                <li><a href="#" className="hover:text-gray-800">Rules</a></li>
                <li><a href="#" className="hover:text-gray-800">Encyclopedia FAQ</a></li>
                <li><a href="#" className="hover:text-gray-800">Comics</a></li>
                <li><a href="#" className="hover:text-gray-800">Brand</a></li>
                <li><a href="#" className="hover:text-gray-800">Contacts</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4 className="text-lg font-bold mb-2">Languages</h4>
              <ul>
                <li><a href="#" className="hover:text-gray-800">German</a></li>
                <li><a href="#" className="hover:text-gray-800">Polish</a></li>
                <li><a href="#" className="hover:text-gray-800">English</a></li>
                <li><a href="#" className="hover:text-gray-800">Russian</a></li>
              </ul>
            </div>
          </div>
          <form className="mt-4 flex flex-col md:flex-row items-center justify-center newsletter-form">
            <input type="email" placeholder="Email address" className="bg-gray-700 text-gray-200 px-4 py-2 rounded mb-2 md:mb-0 md:mr-2" />
            <label className="flex items-center text-gray-400 mb-2 md:mb-0">
              <input type="checkbox" className="mr-2" /> I agree to receive the newsletter
            </label>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Subscribe</button>
          </form>
          <p className="text-center mt-4 text-gray-600">&copy; bconto 2024</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
