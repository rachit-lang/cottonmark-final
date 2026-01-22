
import React from 'react';
import { Microscope, Award, LineChart, PackageCheck, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: Microscope,
    title: "HVI Testing",
    desc: "Complete High Volume Instrument testing for length, strength, and micronaire accuracy."
  },
  {
    icon: Award,
    title: "Quality Certification",
    desc: "Independent, third-party certification that builds trust between growers and mills."
  },
  {
    icon: PackageCheck,
    title: "Product Standards",
    desc: "Detailed visual and sensor-based grading based on USDA and global standards."
  },
  {
    icon: LineChart,
    title: "Premium Analysis",
    desc: "Valuation mapping to ensure 10-30% premium pricing for high-grade output."
  }
];

interface ServicesProps {
  onLearnMore?: () => void;
}

const Services: React.FC<ServicesProps> = ({ onLearnMore }) => {
  return (
    <section id="services" className="py-24 bg-stone-50/50 dark:bg-stone-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-serif text-stone-900 dark:text-white mb-4">Core Grading Services</h2>
            <p className="text-stone-500 dark:text-stone-400">Scientifically bridging the gap between farm production and high-value mill requirements.</p>
          </div>
          <button 
            onClick={onLearnMore}
            className="group flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold hover:text-emerald-800 transition-all hover:scale-105"
          >
            Explore All Standards
            <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <div key={i} className="group bg-white dark:bg-stone-900 p-8 rounded-3xl border border-stone-200 dark:border-stone-800 hover:border-emerald-200 dark:hover:border-emerald-700 hover:shadow-2xl hover:shadow-emerald-500/10 dark:hover:shadow-none transition-all duration-300 transform hover:-translate-y-4">
              <div className="w-14 h-14 bg-stone-50 dark:bg-stone-800 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 dark:group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 group-hover:rotate-12">
                <s.icon className="w-7 h-7 text-stone-600 dark:text-stone-400 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 dark:text-white mb-3 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">{s.title}</h3>
              <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
