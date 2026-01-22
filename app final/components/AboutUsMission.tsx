
import React from 'react';
import { Shield, Globe, Award, ArrowRight, Zap } from 'lucide-react';

interface AboutUsMissionProps {
  onLearnMore: () => void;
}

const AboutUsMission: React.FC<AboutUsMissionProps> = ({ onLearnMore }) => {
  return (
    <section className="py-24 bg-white dark:bg-stone-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold mb-4">
            <Shield className="w-5 h-5" />
            Our Foundation
          </div>
          <h2 className="text-4xl lg:text-6xl font-serif text-stone-900 dark:text-white mb-6">
            Preserving <span className="text-emerald-700 dark:text-emerald-500">Integrity</span> in every Fiber
          </h2>
          <p className="text-xl text-stone-600 dark:text-stone-400 max-w-3xl mx-auto leading-relaxed">
            CottonMark stands as the definitive wall against market uncertainty. We don't just measure cotton; we protect the livelihood of the global textile community.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Globe,
              title: "Our Reach",
              desc: "Providing reliable grading services across our growing network of regional centers."
            },
            {
              icon: Award,
              title: "HVI Precision",
              desc: "Every sample is tested using High Volume Instrument technology for absolute accuracy."
            },
            {
              icon: Zap,
              title: "Reliable Testing",
              desc: "Our systems are designed for consistency, ensuring fair valuation for your crop."
            }
          ].map((item, i) => (
            <div key={i} className="p-8 rounded-[32px] bg-stone-50 dark:bg-stone-900 border border-stone-100 dark:border-stone-800 hover:border-emerald-500/30 transition-all hover:-translate-y-2 group">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center text-emerald-700 dark:text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 dark:text-white mb-3">{item.title}</h3>
              <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button 
            onClick={onLearnMore}
            className="inline-flex items-center gap-3 px-10 py-5 bg-stone-900 dark:bg-emerald-700 text-white rounded-2xl font-bold hover:bg-stone-800 dark:hover:bg-emerald-600 transition-all hover:scale-105 group shadow-xl"
          >
            Learn More About Our Journey
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUsMission;
