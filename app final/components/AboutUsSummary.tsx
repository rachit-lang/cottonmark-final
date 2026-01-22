
import React from 'react';
import { Briefcase, TrendingUp, ShieldCheck, ArrowRight, BarChart3, Target } from 'lucide-react';

interface AboutUsSummaryProps {
  onLearnMore: () => void;
}

const AboutUsSummary: React.FC<AboutUsSummaryProps> = ({ onLearnMore }) => {
  return (
    <section className="py-24 bg-white dark:bg-stone-950 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
          {/* Stat Highlight Column (Replaces Image) */}
          <div className="relative animate-in slide-in-from-left-8 duration-700">
            <div className="relative z-10 bg-emerald-900 dark:bg-emerald-900/40 p-12 lg:p-16 rounded-[48px] shadow-2xl border border-emerald-800/50 dark:border-emerald-500/20 overflow-hidden group">
              {/* Decorative Background Elements */}
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl group-hover:bg-emerald-500/30 transition-colors"></div>
              <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl"></div>
              
              <div className="relative z-10 text-center lg:text-left">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-500/20 rounded-3xl mb-8 border border-emerald-500/30 transition-transform group-hover:scale-110 group-hover:rotate-3">
                  <BarChart3 className="text-emerald-400 w-10 h-10" />
                </div>
                
                <div className="flex flex-col gap-2">
                  <span className="text-emerald-500 font-black tracking-[0.3em] uppercase text-sm">Economic Impact</span>
                  <div className="text-7xl lg:text-9xl font-serif font-black text-white mb-4 tabular-nums">
                    30<span className="text-emerald-500">%</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-serif text-white mb-4 leading-tight">Average Profit Margin Increase</h3>
                <p className="text-emerald-100/70 text-lg leading-relaxed max-w-sm">
                  Producers using CottonMark certified grading consistently capture higher market premiums compared to uncertified crops.
                </p>
                
                <div className="mt-10 flex flex-wrap gap-4">
                  <div className="px-4 py-2 bg-white/5 rounded-full border border-white/10 text-white text-xs font-bold flex items-center gap-2">
                    <Target size={14} className="text-emerald-500" /> Market Matched
                  </div>
                  <div className="px-4 py-2 bg-white/5 rounded-full border border-white/10 text-white text-xs font-bold flex items-center gap-2">
                    <TrendingUp size={14} className="text-emerald-500" /> Premium Verified
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background Aesthetic Blur */}
            <div className="absolute -inset-4 bg-emerald-500/5 blur-[100px] -z-10 rounded-full"></div>
          </div>

          {/* Text Content Column */}
          <div className="mt-12 lg:mt-0 animate-in slide-in-from-right-8 duration-700">
            <div className="inline-flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold mb-4">
              <Briefcase className="w-5 h-5" />
              Our Organization
            </div>
            <h2 className="text-4xl lg:text-5xl font-serif text-stone-900 dark:text-white mb-6">
              Empowering the Cotton <span className="text-emerald-700 dark:text-emerald-500">Value Chain</span>
            </h2>
            <p className="text-xl text-stone-600 dark:text-stone-400 mb-8 leading-relaxed">
              CottonMark is the premier authority in fiber classification. We translate technical quality into market value, ensuring every producer captures their true worth through precision data.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex gap-4 group cursor-default">
                <div className="shrink-0 w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center text-emerald-700 dark:text-emerald-400 transition-transform group-hover:scale-110">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 dark:text-white mb-1">Scientific Integrity</h4>
                  <p className="text-stone-500 dark:text-stone-400 text-sm">Certified laboratories using global standards to eliminate grading disputes and ensure accuracy.</p>
                </div>
              </div>
              <div className="flex gap-4 group cursor-default">
                <div className="shrink-0 w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center text-emerald-700 dark:text-emerald-400 transition-transform group-hover:scale-110">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 dark:text-white mb-1">Sales Optimization</h4>
                  <p className="text-stone-500 dark:text-stone-400 text-sm">Actionable insights that help you position your crop in premium market windows globally.</p>
                </div>
              </div>
            </div>

            <button 
              onClick={onLearnMore}
              className="inline-flex items-center gap-2 px-8 py-4 bg-stone-900 dark:bg-emerald-700 text-white rounded-xl font-bold hover:bg-stone-800 dark:hover:bg-emerald-600 transition-all hover:scale-105 group shadow-lg"
            >
              How it Works
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSummary;
