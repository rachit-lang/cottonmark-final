
import React from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { TrendingUp, Globe } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const data = [
  { month: 'Jan', price: 82.4 },
  { month: 'Feb', price: 84.1 },
  { month: 'Mar', price: 83.5 },
  { month: 'Apr', price: 86.8 },
  { month: 'May', price: 88.2 },
  { month: 'Jun', price: 87.5 },
  { month: 'Jul', price: 89.9 },
  { month: 'Aug', price: 92.4 },
  { month: 'Sep', price: 91.2 },
];

const MarketChart: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="market" className="py-24 bg-stone-50 dark:bg-stone-900/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold mb-4">
              <Globe className="w-5 h-5" />
              Real-time Market Insights
            </div>
            <h2 className="text-4xl font-serif text-stone-900 dark:text-white mb-6">Market Trends & <span className="text-emerald-700 dark:text-emerald-500">Analytics</span></h2>
            <p className="text-stone-600 dark:text-stone-400 mb-8 leading-relaxed">
              Stay ahead of the curve with our integrated market intelligence. We track global cotton indices to provide you with the most relevant valuation data for your graded samples.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-white dark:bg-stone-900 p-4 rounded-xl shadow-sm dark:shadow-none border dark:border-stone-800">
                <div className="bg-emerald-100 dark:bg-emerald-900/50 p-2 rounded-lg">
                  <TrendingUp className="text-emerald-700 dark:text-emerald-400 w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-stone-500 dark:text-stone-500 font-bold uppercase">ICE Cotton No. 2</div>
                  <div className="text-lg font-bold text-stone-900 dark:text-white">92.45c <span className="text-sm text-emerald-600 dark:text-emerald-400">+1.2%</span></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2 bg-white dark:bg-stone-900 p-8 rounded-3xl shadow-xl dark:shadow-none shadow-stone-200 border border-stone-100 dark:border-stone-800">
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={isDark ? "#292524" : "#f0f0f0"} />
                  <XAxis 
                    dataKey="month" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{fill: isDark ? '#a8a29e' : '#78716c', fontSize: 12}} 
                    dy={10} 
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{fill: isDark ? '#a8a29e' : '#78716c', fontSize: 12}} 
                    domain={['dataMin - 5', 'dataMax + 5']} 
                  />
                  <Tooltip 
                    contentStyle={{
                      borderRadius: '12px', 
                      border: 'none', 
                      backgroundColor: isDark ? '#1c1917' : '#ffffff',
                      boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
                      color: isDark ? '#ffffff' : '#000000'
                    }}
                    cursor={{stroke: '#10b981', strokeWidth: 2}}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="price" 
                    stroke="#10b981" 
                    strokeWidth={3}
                    fillOpacity={1} 
                    fill="url(#colorPrice)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-6 text-center text-xs text-stone-400 dark:text-stone-600 font-medium">
              * Price per lb in USD. Source: Internal CottonMark Trading Hub
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketChart;
