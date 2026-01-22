
import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onCtaClick?: () => void;
  onAboutClick?: () => void;
  onPortalClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick, onAboutClick, onPortalClick }) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#fcfbf7] dark:bg-stone-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="animate-in fade-in slide-in-from-left-8 duration-700">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-400 text-sm font-bold mb-8 border border-emerald-100 dark:border-emerald-800/50 shadow-sm transition-transform hover:scale-105">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
              </span>
              Standardized Grading Authority
            </div>
            <h1 className="text-5xl lg:text-7xl font-serif text-stone-900 dark:text-white leading-[1.1] mb-6 tracking-tight">
              Value is in the <span className="text-emerald-700 dark:text-emerald-500 italic">Grade.</span> <br />Not Just the Crop.
            </h1>
            <p className="text-xl text-stone-600 dark:text-stone-400 mb-10 max-w-lg leading-relaxed">
              Eliminate value leakage with independent, precision grading. From HVI lab testing to global standard certification for every producer.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <button 
                onClick={onPortalClick}
                className="inline-flex items-center justify-center px-10 py-4.5 bg-emerald-700 dark:bg-emerald-600 text-white rounded-2xl font-black hover:bg-emerald-800 dark:hover:bg-emerald-500 transition-all transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-500/30 shadow-xl shadow-emerald-200 dark:shadow-none group text-lg"
              >
                Start Grading
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>
              <button 
                onClick={onCtaClick}
                className="inline-flex items-center justify-center px-10 py-4.5 bg-white dark:bg-stone-800 text-stone-900 dark:text-white border border-stone-200 dark:border-stone-700 rounded-2xl font-black hover:bg-stone-50 dark:hover:bg-stone-700 transition-all transform hover:-translate-y-1 hover:shadow-xl text-lg"
              >
                Explore Services
              </button>
            </div>
            
            <div className="mt-14 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[20, 21, 22, 23].map(i => (
                  <img key={i} className="w-12 h-12 rounded-full border-4 border-white dark:border-stone-900 transition-transform hover:scale-125 hover:z-20 cursor-pointer shadow-md" src={`https://picsum.photos/seed/${i}/100`} alt="Client" />
                ))}
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-stone-900 dark:text-stone-200 font-black">500+ Producers</span>
                <span className="text-xs text-stone-500 dark:text-stone-500 uppercase font-bold tracking-widest">Global Network</span>
              </div>
            </div>
          </div>
          
          {/* Single Static Image Content */}
          <div className="mt-16 lg:mt-0 relative group animate-in fade-in slide-in-from-right-8 duration-1000">
            <div className="relative h-[550px] lg:h-[650px] w-full rounded-[40px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-none border border-stone-200/50 dark:border-emerald-900/20 bg-stone-100 dark:bg-stone-900 transform transition-all duration-700 hover:scale-[1.02] hover:shadow-emerald-500/20">
              <img 
                src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=85&w=1200" 
                alt="Premium Lint Quality Assessment"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-stone-900/10 to-transparent"></div>
              
              {/* Image Info Tag */}
              <div className="absolute bottom-10 left-10 p-6 bg-white/90 dark:bg-stone-900/90 backdrop-blur-md rounded-2xl border border-white/20 dark:border-stone-800 transition-all duration-500 group-hover:-translate-y-2">
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-100 dark:bg-emerald-900/50 p-3 rounded-xl">
                    <CheckCircle2 className="text-emerald-700 dark:text-emerald-400 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 dark:text-white text-lg">Premium Lint Quality</h4>
                    <p className="text-stone-600 dark:text-stone-400 text-sm">HVI-linked fiber assessment in action.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background Aesthetic Elements */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-emerald-500/10 rounded-full -z-10 blur-[80px] animate-pulse"></div>
            <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-emerald-600/5 rounded-full -z-10 blur-[100px]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
