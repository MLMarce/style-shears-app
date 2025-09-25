import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HomePage } from '@/components/pages/HomePage';
import { ServicesPage } from '@/components/pages/ServicesPage';
import { BookingPage } from '@/components/pages/BookingPage';

const Index = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedService, setSelectedService] = useState(null);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'services':
        return (
          <ServicesPage 
            onNavigate={setCurrentPage} 
            onSelectService={setSelectedService} 
          />
        );
      case 'booking':
        return (
          <BookingPage 
            selectedService={selectedService} 
            onNavigate={setCurrentPage} 
          />
        );
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
