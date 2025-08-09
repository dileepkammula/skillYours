import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Simulations from './pages/Simulations';
import Dashboard from './pages/Dashboard';
import SimulationDetail from './pages/SimulationDetail';
import Demo from './pages/Demo';
import Footer from './components/Footer';

function App() {
  const [user, setUser] = useState({ name: 'Alex Johnson', isLoggedIn: true });

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header user={user} />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/simulations" element={<Simulations />} />
            <Route path="/dashboard" element={<Dashboard user={user} />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/simulation/:id" element={<SimulationDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;