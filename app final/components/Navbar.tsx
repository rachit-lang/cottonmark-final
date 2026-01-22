
import React from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import Logo from './Logo';

interface NavbarProps {
  onHomeClick: () => void;
  onServicesClick: () => void;
  onAboutClick: () => void;
  onPortalClick: () => void;
  currentView: 'home' | 'services' | 'registration' | 'about';
}

const Navbar: React.FC<NavbarProps> = ({ onHomeClick, onServicesClick, onAboutClick, onPortalClick, currentView }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed w-full z-50 bg-white/80 dark:bg-stone-900/80 backdrop-blur-md border-b border-stone-200 dark:border-stone-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div 
            className="flex items-center gap-2 cursor-pointer group" 
            onClick={onHomeClick}
          >
            <Logo className="w-10 h-10 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
            <span className="text-2xl font-serif font-bold text-stone-900 dark:text-white tracking-tight">
              Cotton<span className="text-emerald-700 dark:text-emerald-500 transition-colors group-hover:text-emerald-500">Mark</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={onServicesClick}
              className={`font-medium transition-all hover:scale-105 active:scale-95 ${currentView === 'services' ? 'text-emerald-700 dark:text-emerald-400' : 'text-stone-600 dark:text-stone-400 hover:text-emerald-700 dark:hover:text-emerald-400'}`}
            >
              Services
            </button>
            <button 
              onClick={onAboutClick}
              className={`font-medium transition-all hover:scale-105 active:scale-95 ${currentView === 'about' ? 'text-emerald-700 dark:text-emerald-400' : 'text-stone-600 dark:text-stone-400 hover:text-emerald-700 dark:hover:text-emerald-400'}`}
            >
              About Us
            </button>
            
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-stone-100 dark:hover:bg-stone-800 transition-all hover:scale-110 active:scale-90 text-stone-600 dark:text-stone-400"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            <button 
              onClick={onPortalClick}
              className="bg-stone-900 dark:bg-emerald-700 text-white px-5 py-2 rounded-full font-medium hover:bg-stone-800 dark:hover:bg-emerald-600 hover:scale-105 active:scale-95 transition-all shadow-lg hover:shadow-emerald-500/20 shadow-stone-200 dark:shadow-none"
            >
              Client Portal
            </button>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button onClick={toggleTheme} className="p-2 rounded-full text-stone-600 dark:text-stone-400 hover:scale-110">
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-stone-600 dark:text-stone-400 p-2 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-lg">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-stone-900 border-b border-stone-200 dark:border-stone-800 p-4 space-y-4 animate-in slide-in-from-top-4 duration-300">
          <button 
            onClick={() => { onServicesClick(); setIsOpen(false); }}
            className="block w-full text-left text-stone-600 dark:text-stone-400 font-medium p-2 rounded-lg hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors"
          >
            Services
          </button>
          <button 
            onClick={() => { onAboutClick(); setIsOpen(false); }}
            className="block w-full text-left text-stone-600 dark:text-stone-400 font-medium p-2 rounded-lg hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors"
          >
            About Us
          </button>
          <button 
            onClick={() => { onPortalClick(); setIsOpen(false); }}
            className="w-full bg-stone-900 dark:bg-emerald-700 text-white px-5 py-3 rounded-lg font-medium shadow-md active:scale-95 transition-transform"
          >
            Client Portal
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
