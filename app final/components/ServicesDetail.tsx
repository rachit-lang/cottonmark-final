
import React from 'react';
import { Ruler, Activity, Layers, Palette, Trash2, TrendingUp, ShieldCheck, Factory, Handshake, ChevronLeft } from 'lucide-react';

const ServicesDetail: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const metrics = [
    { icon: Ruler, name: 'Staple Length', desc: 'Fiber length in inches/mm. Critical for spinning yarn fineness.' },
    { icon: Activity, name: 'Strength', desc: 'Measured in g/tex. Determines the durability of the final textile.' },
    { icon: Layers, name: 'Micronaire', desc: 'Fineness + maturity. Affects dye uptake and processing.' },
    { icon: Palette, name: 'Color Grade', desc: 'Brightness (Rd) and yellowness (+b) assessment.' },
    { icon: Trash2, name: 'Trash / Leaf', desc: 'Non-lint content percentage. Lower is premium.' },
  ];

  const stapleCategories = [
    { name: 'ELS (Extra-Long)', size: '≥35mm', use: 'Luxury fiber; softest & strongest; least pilling', bg: 'bg-emerald-900 text-white' },
    { name: 'Long Staple', size: '~33–34mm', use: 'Premium garments; smooth & durable', bg: 'bg-emerald-700 text-white' },
    { name: 'Medium Staple', size: '~25–32mm', use: 'Standard cotton; moderate softness', bg: 'bg-emerald-500 text-white' },
    { name: 'Short Staple', size: '<25mm', use: 'Basic textiles; rougher; more pilling', bg: 'bg-stone-400 text-white' },
  ];

  return (
    <div className="pt-24 pb-20 bg-[#fcfbf7] dark:bg-stone-950 transition-colors animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold mb-8 hover:translate-x-[-8px] transition-transform duration-300"
        >
          <ChevronLeft className="group-hover:scale-125 transition-transform" /> Back to Home
        </button>

        <header className="mb-16">
          <h1 className="text-4xl lg:text-6xl font-serif text-stone-900 dark:text-white mb-6">
            The Science of <span className="text-emerald-700 dark:text-emerald-500">Cotton Grading</span>
          </h1>
          <p className="text-xl text-stone-600 dark:text-stone-400 max-w-3xl leading-relaxed">
            Cotton isn't just a commodity; it's a spectrum of quality. Our HVI-driven classification ensures every fiber is valued according to its true industrial potential.
          </p>
        </header>

        {/* HVI Section */}
        <section className="grid lg:grid-cols-2 gap-12 mb-24">
          <div className="bg-white dark:bg-stone-900 p-8 rounded-3xl border border-stone-200 dark:border-stone-800 shadow-xl transition-all duration-500 hover:shadow-2xl hover:border-emerald-200 group">
            <div className="bg-emerald-100 dark:bg-emerald-900/50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:rotate-6 group-hover:scale-110">
              <Factory className="text-emerald-700 dark:text-emerald-400 w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-stone-900 dark:text-white mb-4 group-hover:text-emerald-700 transition-colors">HVI Testing Standard</h2>
            <ul className="space-y-4 text-stone-600 dark:text-stone-400">
              {[
                { title: 'Global Benchmark', text: 'High Volume Instrument testing is the objective international standard.' },
                { title: 'Post-Ginning Analysis', text: 'Performed on lint cotton bales to reflect final mill readiness.' },
                { title: 'Objective Data', text: 'Removes human bias from pricing, enabling premium/discount schedules.' },
              ].map((item, i) => (
                <li key={i} className="flex gap-3 transition-transform hover:translate-x-2">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 shrink-0 group-hover:scale-150 transition-transform"></span>
                  <p><strong>{item.title}:</strong> {item.text}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {metrics.map((m, i) => (
              <div key={i} className="bg-stone-50 dark:bg-stone-800/40 p-5 rounded-2xl border border-stone-100 dark:border-stone-800 transition-all duration-300 hover:bg-white dark:hover:bg-stone-800 hover:shadow-xl hover:-translate-y-2 hover:border-emerald-500/30 group">
                <m.icon className="text-emerald-600 dark:text-emerald-400 w-5 h-5 mb-3 transition-transform group-hover:scale-125 group-hover:rotate-12" />
                <h4 className="font-bold text-stone-900 dark:text-white text-sm mb-1">{m.name}</h4>
                <p className="text-xs text-stone-500 dark:text-stone-400">{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Appearance Hierarchy */}
        <section className="mb-24 overflow-x-auto pb-4">
          <h2 className="text-3xl font-serif text-stone-900 dark:text-white mb-8 text-center">Appearance Grade Spectrum</h2>
          <div className="relative pt-8 pb-12 min-w-[800px] md:min-w-0">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-emerald-600 to-stone-300 dark:from-emerald-500 dark:to-stone-800 -translate-y-1/2 rounded-full hidden md:block opacity-30"></div>
            <div className="grid grid-cols-7 gap-4 relative">
              {['Good Middling (GM)', 'Strict Middling (SM)', 'Middling (M)', 'Strict Low Middling (SLM)', 'Low Middling (LM)', 'Strict Good Ordinary (SGO)', 'Good Ordinary (GO)'].map((grade, i) => (
                <div key={i} className="bg-white dark:bg-stone-900 p-4 rounded-xl border border-stone-200 dark:border-stone-800 text-center shadow-sm z-10 transition-all duration-300 hover:scale-110 hover:-translate-y-4 hover:shadow-2xl hover:border-emerald-500 group cursor-default">
                  <div className="text-emerald-600 dark:text-emerald-400 font-black text-xl mb-1 transition-all group-hover:scale-125">{i + 1}</div>
                  <div className="text-[10px] font-bold text-stone-800 dark:text-stone-200 uppercase tracking-tight leading-tight group-hover:text-emerald-700 transition-colors">{grade}</div>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-6 px-4 text-xs font-bold text-stone-400 uppercase tracking-[0.2em]">
              <span className="animate-pulse">Best Quality</span>
              <span>Baseline Quality</span>
            </div>
          </div>
        </section>

        {/* Staple Matrix */}
        <section className="grid lg:grid-cols-3 gap-12 mb-24">
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-3xl font-serif text-stone-900 dark:text-white">Premium Staple Differentiation</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {stapleCategories.map((cat, i) => (
                <div key={i} className={`${cat.bg} p-6 rounded-2xl shadow-lg transform hover:scale-[1.05] hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 cursor-default group relative overflow-hidden`}>
                  <div className="absolute -right-4 -bottom-4 opacity-10 transition-transform group-hover:scale-150 group-hover:rotate-12">
                    <Ruler size={100} />
                  </div>
                  <div className="flex justify-between items-start mb-2 relative z-10">
                    <h4 className="font-black text-lg group-hover:translate-x-1 transition-transform">{cat.name}</h4>
                    <span className="text-xs font-bold px-2 py-1 bg-white/20 rounded uppercase group-hover:bg-white/40 transition-colors">{cat.size}</span>
                  </div>
                  <p className="text-sm opacity-90 leading-snug relative z-10">{cat.use}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-emerald-50 dark:bg-emerald-900/10 p-8 rounded-3xl border border-emerald-100 dark:border-emerald-800 transition-all hover:shadow-xl hover:bg-white dark:hover:bg-stone-900 group">
            <h3 className="text-xl font-bold text-stone-900 dark:text-white mb-4 group-hover:text-emerald-700 transition-colors">Economic Uplift</h3>
            <p className="text-stone-600 dark:text-stone-400 text-sm mb-6">Certified grading eliminates value leakage, providing 10-30% higher returns for recognized quality.</p>
            <div className="space-y-6">
              {[
                { label: 'Base Price (₹6,000)', val: '100%', color: 'bg-stone-200', pColor: 'text-stone-500' },
                { label: '10% Premium', val: '+ ₹600', color: 'bg-emerald-400', pColor: 'text-emerald-600' },
                { label: '20% Premium', val: '+ ₹1,200', color: 'bg-emerald-600', pColor: 'text-emerald-700' },
                { label: '30% Premium', val: '+ ₹1,800', color: 'bg-emerald-800', pColor: 'text-emerald-800 dark:text-emerald-400' },
              ].map((row, i) => (
                <div key={i} className="space-y-2 group/row cursor-default hover:translate-x-2 transition-transform">
                  <div className={`flex justify-between items-center text-sm font-bold ${row.pColor}`}>
                    <span>{row.label}</span>
                    <span className="scale-90 group-hover/row:scale-110 transition-transform">{row.val}</span>
                  </div>
                  <div className="h-2 bg-stone-100 dark:bg-stone-800 rounded-full overflow-hidden">
                    <div className={`h-full ${row.color} transition-all duration-700 ease-out shadow-sm`} style={{ width: i === 0 ? '100%' : `${70 + i*10}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Strategic Benefits */}
        <section className="bg-stone-900 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-emerald-500/20 transition-colors"></div>
          <div className="text-center mb-12 relative z-10">
            <h2 className="text-3xl font-serif mb-4">Why CottonMark Certification?</h2>
            <p className="text-stone-400 max-w-2xl mx-auto">Standardizing quality creates a virtuous cycle from the farm gate to the fashion retail shelf.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {[
              { icon: TrendingUp, title: 'Premium Pricing', desc: 'Farmers receive better prices for producing longer, cleaner fiber.' },
              { icon: ShieldCheck, title: 'Reduced Rejection', desc: 'Certified quality reduces post-sale deductions and discount losses.' },
              { icon: Handshake, title: 'Direct Mill Links', desc: 'Eliminates intermediaries, increasing the farmer\'s share of final value.' },
            ].map((benefit, i) => (
              <div key={i} className="flex gap-4 group/item hover:bg-white/5 p-4 rounded-2xl transition-all hover:-translate-y-1">
                <benefit.icon className="text-emerald-400 shrink-0 transition-all group-hover/item:scale-125 group-hover/item:rotate-12" />
                <div>
                  <h4 className="font-bold mb-1 transition-colors group-hover/item:text-emerald-400">{benefit.title}</h4>
                  <p className="text-sm text-stone-400">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServicesDetail;
