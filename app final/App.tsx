
import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import AboutUsSummary from './components/AboutUsSummary';
import AboutUsDetail from './components/AboutUsDetail';
import ServicesDetail from './components/ServicesDetail';
import Registration from './components/Registration';
import AnalysisTool from './components/AnalysisTool';
import AboutUsMission from './components/AboutUsMission';
import Footer from './components/Footer';

type ViewState = 'home' | 'services' | 'registration' | 'about';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('home');

  const navigateToServices = () => {
    setView('services');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateHome = () => {
    setView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToRegistration = () => {
    setView('registration');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToAbout = () => {
    setView('about');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#fcfbf7] dark:bg-stone-950 selection:bg-emerald-200 selection:text-emerald-900 dark:selection:bg-emerald-500/30 dark:selection:text-emerald-200">
        <Navbar 
          onHomeClick={navigateHome} 
          onServicesClick={navigateToServices} 
          onPortalClick={navigateToRegistration}
          onAboutClick={navigateToAbout}
          currentView={view} 
        />
        <main>
          {view === 'home' && (
            <>
              <Hero onCtaClick={navigateToServices} onAboutClick={navigateToAbout} onPortalClick={navigateToRegistration} />
              <AnalysisTool />
              <AboutUsMission onLearnMore={navigateToAbout} />
              <Services onLearnMore={navigateToServices} />
              <AboutUsSummary onLearnMore={navigateToAbout} />
            </>
          )}
          {view === 'services' && (
            <ServicesDetail onBack={navigateHome} />
          )}
          {view === 'about' && (
            <AboutUsDetail onBack={navigateHome} />
          )}
          {view === 'registration' && (
            <Registration onBack={navigateHome} />
          )}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
