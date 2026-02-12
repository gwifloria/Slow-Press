import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { Crawler } from './pages/Crawler';
import { Newspaper } from './pages/Newspaper';
import { Library } from './pages/Library';
import { useMockCrawlerSocket } from './services/mockWebSocket';

function App() {
  // Hoist the crawler state to the top level so it persists across navigation
  const { job, startCrawl, stopCrawl } = useMockCrawlerSocket();

  return (
    <Router>
      <Routes>
        {/* Redirect Root to Newspaper (The Core Value) */}
        <Route path="/" element={<Navigate to="/newspaper" replace />} />
        
        <Route path="/newspaper" element={
          <Layout activeJob={job}>
            <Newspaper />
          </Layout>
        } />

        <Route path="/feed" element={
          <Layout activeJob={job}>
            <Dashboard />
          </Layout>
        } />

        <Route path="/library" element={
          <Layout activeJob={job}>
            <Library />
          </Layout>
        } />
        
        <Route path="/signals" element={
          <Layout activeJob={job}>
            <Crawler job={job} onStart={startCrawl} onStop={stopCrawl} />
          </Layout>
        } />

        {/* Removed System Logs Route - User doesn't need to see this */}

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/newspaper" replace />} />
      </Routes>
    </Router>
  );
}

export default App;