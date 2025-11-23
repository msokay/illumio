import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ProjectProvider } from './context/ProjectContext';
import { Header } from './components/Header';
import { LandingPage } from './pages/LandingPage';
import { CreatePage } from './pages/CreatePage';
import { EditorPage } from './pages/EditorPage';

declare global {
  interface Window {
    webkitAudioContext: typeof AudioContext;
  }
}

const App: React.FC = () => {
  return (
    <ProjectProvider>
      <Router>
        <div className="min-h-screen bg-illumio-bg text-illumio-text font-sans selection:bg-purple-500/30">
          <Header />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/create" element={<CreatePage />} />
            <Route path="/edit" element={<EditorPage />} />
          </Routes>
        </div>
      </Router>
    </ProjectProvider>
  );
};

export default App;