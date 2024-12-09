import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Dashboard } from './components/Dashboard';
import { Playground } from './components/Playground';
import { About } from './components/About';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen transition-colors duration-200">
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/playground" element={ <Playground />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;