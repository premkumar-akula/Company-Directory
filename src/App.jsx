// src/App.jsx
import React from 'react';
import { CompanyProvider } from './context/CompanyContext';
import CompaniesDirectory from './pages/CompaniesDirectory';
import './App.css';

function App() {
  return (
    <CompanyProvider>
      <div className="App">
        <header className="app-header">
          <div className="header-content">
            <h1>Companies Directory</h1>
            <p>Discover and filter companies worldwide</p>
          </div>
        </header>
        <main className="main-content">
          <CompaniesDirectory />
        </main>
        <footer className="app-footer">
          <div className="footer-content">
            <p>&copy; 2024 Companies Directory. All rights reserved.</p>
            <div className="footer-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </footer>
      </div>
    </CompanyProvider>
  );
}

export default App;