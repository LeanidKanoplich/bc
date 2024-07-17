import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Убедитесь, что путь к файлу указан верно
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
