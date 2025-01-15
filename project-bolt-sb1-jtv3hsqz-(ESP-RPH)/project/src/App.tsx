import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { useAuth } from './contexts/AuthContext';
import Header from './components/Header';
import Hero from './components/Hero';
import EquipmentSection from './components/EquipmentSection';
import ServicesSection from './components/ServicesSection';
import IndustriesSection from './components/IndustriesSection';
import EmergencySection from './components/EmergencySection';
import Footer from './components/Footer';
import TechnicianDashboard from './components/technician/TechnicianDashboard';
import EquipmentInspectionPage from './pages/EquipmentInspectionPage';
import InspectionReviewPage from './pages/InspectionReviewPage';
import TechnicianSettings from './components/settings/technician/TechnicianSettings';

function AppContent() {
  const { isAuthenticated, user } = useAuth();

  if (isAuthenticated && user?.role === 'technician') {
    return (
      <Routes>
        <Route path="/dashboard" element={<TechnicianDashboard />} />
        <Route path="/equipment/:id/inspect" element={<EquipmentInspectionPage />} />
        <Route path="/inspection/:id/review" element={<InspectionReviewPage />} />
        <Route path="/settings" element={<TechnicianSettings />} />
        <Route path="/" element={<TechnicianDashboard />} />
      </Routes>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <Hero />
        <EquipmentSection />
        <ServicesSection />
        <IndustriesSection />
        <EmergencySection />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;