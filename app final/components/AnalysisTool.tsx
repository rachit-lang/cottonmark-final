
import React, { useState, useRef } from 'react';
import { analyzeCottonQuality } from '../services/geminiService';
import { GradingResult } from '../types';
import { Upload, Sparkles, Loader2, ClipboardCheck, Ruler, Activity, Layers, Palette, Trash2, ShieldAlert } from 'lucide-react';

const AnalysisTool: React.FC = () => {
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<GradingResult | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAnalyze = async () => {
    if (!description && !image) return;
    setLoading(true);
    try {
      const report = await analyzeCottonQuality(description, image || undefined);
      setResult(report);
    } catch (error) {
      console.error("Analysis failed", error);
      alert("Something went wrong with the AI analysis. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const MetricCard = ({ icon: Icon, label, value }: { icon: any, label: string, value: string }) => (
    <div className="bg-stone-50 dark:bg-stone-800/50 p-4 rounded-xl border border-stone-100 dark:border-stone-700 transition-all duration-300 hover:bg-white dark:hover:bg-stone-800 hover:shadow-xl hover:-translate-y-1 hover:border-emerald-200 dark:hover:border-emerald-800 group">
      <div className="flex items-center gap-3 mb-2">
        <Icon className="w-4 h-4 text-emerald-600 dark:text-emerald-400 transition-transform group-hover:scale-125" />
        <span className="text-xs font-bold text-stone-500 dark:text-stone-400 uppercase tracking-wider">{label}</span>
      </div>
      <div className="text-lg font-bold text-stone-900 dark:text-white">{value}</div>
    </div>
  );

  return (
    <section id="analyze" className="py-24 bg-white dark:bg-stone-950 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold mb-4">
            <Sparkles className="w-5 h-5 animate-pulse" />
            Next-Gen Grading
          </div>
          <h2 className="text-4xl lg:text-5xl font-serif text-stone-900 dark:text-white mb-6">Smart AI Fiber <span className="text-emerald-700 dark:text-emerald-500">Analysis</span></h2>
          <p className="text-stone-600 dark:text-stone-400 text-lg">
            Upload a photo of your cotton sample. Our Gemini engine provides instant estimation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Input Side */}
          <div className="space-y-8">
            <div 
              className={`border-2 border-dashed rounded-3xl p-12 text-center transition-all duration-300 cursor-pointer relative group ${image ? 'border-emerald-200 dark:border-emerald-700 bg-emerald-50/30 dark:bg-emerald-900/10' : 'border-stone-200 dark:border-stone-800 hover:border-emerald-300 dark:hover:border-emerald-700 hover:bg-stone-50/50 dark:hover:bg-stone-900 hover:shadow-2xl'}`}
              onClick={() => fileInputRef.current?.click()}
            >
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleFileChange} 
                className="hidden" 
                accept="image/*"
              />
              {image ? (
                <div className="space-y-4">
                  <img src={image} alt="Preview" className="max-h-64 mx-auto rounded-xl shadow-lg border-2 border-white dark:border-stone-800 transition-transform group-hover:scale-105" />
                  <p className="text-sm font-medium text-stone-500 dark:text-stone-400 group-hover:text-emerald-600 transition-colors">Click to change image</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="mx-auto w-16 h-16 bg-stone-100 dark:bg-stone-900 rounded-full flex items-center justify-center transition-all group-hover:scale-110 group-hover:bg-emerald-100">
                    <Upload className="text-stone-400 dark:text-stone-600 w-8 h-8 group-hover:text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-stone-900 dark:text-white">Upload Cotton Sample Image</p>
                    <p className="text-stone-500 dark:text-stone-500">High-res macros work best</p>
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-bold text-stone-700 dark:text-stone-300 uppercase tracking-wider">Additional Description</label>
              <textarea 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="e.g., Brazilian origin, picked in dry conditions..."
                className="w-full h-32 p-4 bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-stone-900 dark:text-white placeholder:text-stone-400 dark:placeholder:text-stone-600 shadow-sm hover:shadow-md"
              />
            </div>

            <button 
              onClick={handleAnalyze}
              disabled={loading || (!description && !image)}
              className="w-full py-5 bg-stone-900 dark:bg-emerald-700 text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-stone-800 dark:hover:bg-emerald-600 transition-all transform hover:-translate-y-1 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-stone-200 dark:shadow-none active:scale-95"
            >
              {loading ? <Loader2 className="animate-spin" /> : <Sparkles />}
              {loading ? 'Processing Analysis...' : 'Generate Instant Grade Report'}
            </button>
          </div>

          {/* Results Side */}
          <div className="relative">
            {!result && !loading ? (
              <div className="h-full flex flex-col items-center justify-center p-12 bg-stone-50/50 dark:bg-stone-900/20 rounded-3xl border border-stone-100 dark:border-stone-800 border-dashed text-stone-400 dark:text-stone-600 transition-all hover:bg-stone-100/50">
                <ClipboardCheck className="w-16 h-16 mb-4 opacity-20 transition-transform hover:scale-110" />
                <p className="font-medium">Your report will appear here</p>
              </div>
            ) : loading ? (
              <div className="h-full flex flex-col items-center justify-center p-12 bg-white dark:bg-stone-900 rounded-3xl border border-stone-200 dark:border-stone-800 shadow-sm animate-pulse">
                <div className="w-full h-8 bg-stone-100 dark:bg-stone-800 rounded mb-8"></div>
                <div className="grid grid-cols-2 gap-4 w-full">
                  {[1, 2, 3, 4].map(i => <div key={i} className="h-20 bg-stone-50 dark:bg-stone-800/50 rounded-xl"></div>)}
                </div>
              </div>
            ) : result && (
              <div className="bg-white dark:bg-stone-900 p-8 rounded-3xl shadow-2xl border border-stone-100 dark:border-stone-800 ring-1 ring-stone-900/5 dark:ring-white/5 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="text-xs font-black text-emerald-700 dark:text-emerald-500 uppercase tracking-[0.2em] mb-1">Grading Certificate</h3>
                    <div className="text-3xl font-serif text-stone-900 dark:text-white">Summary Report</div>
                  </div>
                  <div className="text-right">
                    <div className="text-4xl font-black text-stone-900 dark:text-white transition-all hover:scale-110 cursor-default">{result.grade.split(' ')[0]}</div>
                    <div className="text-xs text-stone-500 dark:text-stone-400 font-bold uppercase tracking-widest">Base Grade</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <MetricCard icon={Ruler} label="Staple Length" value={result.stapleLength} />
                  <MetricCard icon={Activity} label="Strength" value={result.strength} />
                  <MetricCard icon={Layers} label="Micronaire" value={result.micronaire} />
                  <MetricCard icon={Palette} label="Color Grade" value={result.colorGrade} />
                  <MetricCard icon={Trash2} label="Trash Content" value={result.trashContent} />
                  <MetricCard icon={ShieldAlert} label="Est. Market Value" value={result.marketValue} />
                </div>

                <div className="bg-stone-50 dark:bg-stone-800/50 p-6 rounded-2xl border border-stone-100 dark:border-stone-700 mb-8 transition-colors hover:bg-emerald-50/30 dark:hover:bg-emerald-900/5">
                  <h4 className="text-sm font-bold text-stone-900 dark:text-white mb-2">Expert Observations</h4>
                  <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">{result.explanation}</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 py-4 bg-emerald-700 text-white rounded-xl font-bold hover:bg-emerald-800 transition-all hover:shadow-lg active:scale-95 text-sm">Download PDF Report</button>
                  <button className="flex-1 py-4 bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 rounded-xl font-bold hover:bg-stone-200 dark:hover:bg-stone-700 transition-all hover:shadow-md active:scale-95 text-sm">Send to Warehouse</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalysisTool;
