
import React, { useState } from 'react';
import { ChevronLeft, User, Phone, Mail, Building, ArrowRight, CheckCircle, Sparkles, Award, FileText } from 'lucide-react';
import Logo from './Logo';

interface RegistrationProps {
  onBack: () => void;
}

const Registration: React.FC<RegistrationProps> = ({ onBack }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    org: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 pt-24 pb-24">
        <div className="bg-white dark:bg-stone-900 p-12 rounded-3xl shadow-2xl border border-stone-100 dark:border-stone-800 max-w-lg w-full text-center animate-in zoom-in-95 duration-500">
          <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/50 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
            <CheckCircle className="text-emerald-600 dark:text-emerald-400 w-10 h-10" />
          </div>
          <h2 className="text-3xl font-serif text-stone-900 dark:text-white mb-4">Registration Successful!</h2>
          <p className="text-stone-600 dark:text-stone-400 mb-8">
            Thank you for registering, <span className="font-bold text-emerald-600">{formData.name}</span>. Our team will reach out to you shortly to set up your organization's dashboard.
          </p>
          <button 
            onClick={onBack}
            className="w-full py-4 bg-stone-900 dark:bg-emerald-700 text-white rounded-xl font-bold hover:bg-stone-800 dark:hover:bg-emerald-600 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
          >
            Return to Homepage <ArrowRight size={18} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-24 px-4 bg-[#fcfbf7] dark:bg-stone-950 flex items-center justify-center transition-colors">
      <div className="max-w-4xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Decorative Side */}
        <div className="hidden md:block space-y-8 animate-in slide-in-from-left-8 duration-700">
          <div className="flex items-center gap-3">
            <Logo className="w-12 h-12" />
            <h1 className="text-4xl font-serif font-bold text-stone-900 dark:text-white">
              Cotton<span className="text-emerald-700 dark:text-emerald-500">Mark</span> Portal
            </h1>
          </div>
          <div className="space-y-6">
            <h2 className="text-5xl font-serif text-stone-900 dark:text-white leading-tight">
              Unlock Professional <span className="text-emerald-700">Digital Reports</span>
            </h2>
            <p className="text-lg text-stone-600 dark:text-stone-400">
              Join the largest network of certified cotton producers. Access real-time grade notifications, history tracking, and market valuation tools.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 pt-8">
            <div className="p-4 bg-white dark:bg-stone-900 rounded-2xl shadow-sm border dark:border-stone-800 transition-all hover:shadow-emerald-500/10 hover:-translate-y-1">
              <Award className="text-emerald-500 mb-2" />
              <div className="text-xs font-bold text-stone-400 uppercase">Authentic</div>
              <div className="font-bold text-stone-900 dark:text-white">Grading Reports</div>
            </div>
            <div className="p-4 bg-white dark:bg-stone-900 rounded-2xl shadow-sm border dark:border-stone-800 transition-all hover:shadow-emerald-500/10 hover:-translate-y-1">
              <FileText className="text-emerald-500 mb-2" />
              <div className="text-xs font-bold text-stone-400 uppercase">Verification</div>
              <div className="font-bold text-stone-900 dark:text-white">Certified Brand Tag</div>
            </div>
          </div>
        </div>

        {/* Form Side */}
        <div className="bg-white dark:bg-stone-900 p-8 md:p-12 rounded-3xl shadow-2xl border border-stone-100 dark:border-stone-800 relative group transition-all duration-500 hover:shadow-emerald-500/5">
          <button 
            onClick={onBack}
            className="absolute -top-12 left-0 flex items-center gap-2 text-stone-500 hover:text-emerald-600 font-bold transition-all hover:-translate-x-2"
          >
            <ChevronLeft size={20} /> Back
          </button>
          
          <h3 className="text-2xl font-serif text-stone-900 dark:text-white mb-2">Create Portal Account</h3>
          <p className="text-stone-500 dark:text-stone-400 text-sm mb-8">Experience the future of cotton commerce.</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-1 group">
              <label className="text-xs font-bold text-stone-500 dark:text-stone-400 uppercase tracking-widest flex items-center gap-2">
                <User size={14} className="group-focus-within:text-emerald-600 transition-colors" /> Full Name
              </label>
              <input 
                required
                type="text"
                placeholder="John Doe"
                className="w-full p-4 bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all text-stone-900 dark:text-white group-hover:border-emerald-200 dark:group-hover:border-emerald-800"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>

            <div className="space-y-1 group">
              <label className="text-xs font-bold text-stone-500 dark:text-stone-400 uppercase tracking-widest flex items-center gap-2">
                <Phone size={14} className="group-focus-within:text-emerald-600 transition-colors" /> Contact Number
              </label>
              <input 
                required
                type="tel"
                placeholder="+91 98765 43210"
                className="w-full p-4 bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all text-stone-900 dark:text-white group-hover:border-emerald-200 dark:group-hover:border-emerald-800"
                value={formData.contact}
                onChange={(e) => setFormData({...formData, contact: e.target.value})}
              />
            </div>

            <div className="space-y-1 group">
              <label className="text-xs font-bold text-stone-500 dark:text-stone-400 uppercase tracking-widest flex items-center gap-2">
                <Mail size={14} className="group-focus-within:text-emerald-600 transition-colors" /> Email Address
              </label>
              <input 
                required
                type="email"
                placeholder="john@farm.com"
                className="w-full p-4 bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all text-stone-900 dark:text-white group-hover:border-emerald-200 dark:group-hover:border-emerald-800"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div className="space-y-1 group">
              <label className="text-xs font-bold text-stone-500 dark:text-stone-400 uppercase tracking-widest flex items-center gap-2">
                <Building size={14} className="group-focus-within:text-emerald-600 transition-colors" /> Organisation Name <span className="text-[10px] lowercase text-stone-400">(optional)</span>
              </label>
              <input 
                type="text"
                placeholder="Green Valley Farms"
                className="w-full p-4 bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all text-stone-900 dark:text-white group-hover:border-emerald-200 dark:group-hover:border-emerald-800"
                value={formData.org}
                onChange={(e) => setFormData({...formData, org: e.target.value})}
              />
            </div>

            <button 
              type="submit"
              className="w-full py-5 bg-emerald-700 text-white rounded-xl font-bold shadow-xl shadow-emerald-700/20 hover:bg-emerald-600 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 mt-8"
            >
              Request Portal Access <ArrowRight size={20} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
