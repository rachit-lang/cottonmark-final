
import React from 'react';
import { ChevronLeft, Factory, Microscope, ClipboardCheck, Store, ArrowUpRight, DollarSign, Target, Heart, TrendingUp } from 'lucide-react';

const AboutUsDetail: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <div className="pt-24 pb-20 bg-[#fcfbf7] dark:bg-stone-950 transition-colors animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold mb-8 hover:translate-x-[-8px] transition-transform duration-300"
        >
          <ChevronLeft className="group-hover:scale-125 transition-transform" /> Back to Home
        </button>

        <header className="mb-20 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-7xl font-serif text-stone-900 dark:text-white mb-6">
            Pioneering the <span className="text-emerald-700 dark:text-emerald-500 italic">Future</span> of Cotton
          </h1>
          <p className="text-xl text-stone-600 dark:text-stone-400 leading-relaxed">
            CottonMark was founded on a simple principle: transparency creates value. By bridging the gap between field production and mill requirements, we ensure quality is always rewarded.
          </p>
        </header>

        {/* Workflow Section */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-stone-900 dark:text-white mb-4">The CottonMark Workflow</h2>
            <div className="h-1 w-24 bg-emerald-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="absolute top-1/4 left-0 w-full h-0.5 bg-emerald-100 dark:bg-stone-800 hidden md:block -z-10"></div>
            
            {[
              { icon: Factory, title: 'In-Ginning Sampling', desc: 'Precision samples are taken directly from the gin, ensuring representativeness.' },
              { icon: Microscope, title: 'Lab Analysis', desc: 'Samples undergo HVI and visual classing in our ISO-certified facilities.' },
              { icon: ClipboardCheck, title: 'Certification', desc: 'A digital quality passport is issued, detailing every key fiber metric.' },
              { icon: Store, title: 'Market Listing', desc: 'Graded bales are listed on our trading hub with real-time valuation premiums.' },
            ].map((step, i) => (
              <div key={i} className="bg-white dark:bg-stone-900 p-8 rounded-[32px] border border-stone-100 dark:border-stone-800 shadow-xl text-center group transition-all hover:-translate-y-2 hover:border-emerald-500/30">
                <div className="w-16 h-16 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl flex items-center justify-center text-emerald-700 dark:text-emerald-400 mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                  <step.icon size={32} />
                </div>
                <h3 className="font-bold text-lg text-stone-900 dark:text-white mb-3">{step.title}</h3>
                <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed">{step.desc}</p>
                <div className="mt-4 text-emerald-600 dark:text-emerald-500 font-black opacity-20 group-hover:opacity-100 transition-opacity">0{i + 1}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Economic Impact Section */}
        <section className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="space-y-8">
            <h2 className="text-4xl font-serif text-stone-900 dark:text-white leading-tight">
              How Grading Drives <span className="text-emerald-700 dark:text-emerald-500">Sales & Profit</span>
            </h2>
            <p className="text-lg text-stone-600 dark:text-stone-400">
              In an uncertified market, premium cotton is often sold at baseline prices due to lack of proof. CottonMark changes the economics of the harvest.
            </p>
            
            <div className="space-y-4">
              {[
                { icon: DollarSign, title: 'Eliminate Value Leakage', text: 'Stop selling premium fiber at "fair average quality" prices. Certification proves your product\'s worth.' },
                { icon: Target, title: 'Targeted Mill Matching', desc: 'We connect your specific fiber profile (e.g., high strength) to mills that pay premiums for those traits.' },
                { icon: Heart, title: 'Build Buyer Trust', desc: 'Certified grading reduces post-sale arbitration and build long-term premium contracts.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-2xl bg-white dark:bg-stone-900 border border-stone-100 dark:border-stone-800 transition-all hover:shadow-lg">
                  <div className="text-emerald-600 dark:text-emerald-500 shrink-0">
                    <item.icon />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 dark:text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-stone-500 dark:text-stone-400">{"text" in item ? item.text : item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-emerald-900 rounded-[40px] p-12 text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-emerald-500/20 transition-colors"></div>
            <h3 className="text-3xl font-serif mb-8">Economic Performance</h3>
            
            <div className="space-y-8">
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-stone-300 font-medium">Market Reach</span>
                  <ArrowUpRight className="text-emerald-400" />
                </div>
                <div className="text-4xl font-bold mb-2">+400%</div>
                <p className="text-sm text-stone-400">Increase in potential buyer pool once certified quality is listed on global exchanges.</p>
              </div>

              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-stone-300 font-medium">Profit Retention</span>
                  {/* Fix: TrendingUp icon added to Profit Retention metric */}
                  <TrendingUp className="text-emerald-400" />
                </div>
                <div className="text-4xl font-bold mb-2">15-25%</div>
                <p className="text-sm text-stone-400">Average reduction in "value leakage" experienced by producers after joining CottonMark.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center py-20 bg-stone-100 dark:bg-stone-900 rounded-[48px] border border-stone-200 dark:border-stone-800">
          <h2 className="text-4xl font-serif text-stone-900 dark:text-white mb-6">Ready to Capture Your True Worth?</h2>
          <p className="text-lg text-stone-600 dark:text-stone-400 mb-10 max-w-2xl mx-auto">
            Join hundreds of producers who have transformed their sales performance through precision data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="px-10 py-5 bg-emerald-700 text-white rounded-2xl font-bold hover:bg-emerald-800 transition-all hover:scale-105 shadow-xl"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Get Started Today
            </button>
            <button className="px-10 py-5 bg-white dark:bg-stone-800 text-stone-900 dark:text-white border border-stone-200 dark:border-stone-700 rounded-2xl font-bold hover:bg-stone-50 dark:hover:bg-stone-700 transition-all">
              Download Org Profile
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUsDetail;
