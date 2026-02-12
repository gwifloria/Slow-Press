import React from 'react';
import { Button } from '../components/ui/Button';
import { 
  Apple, 
  Smartphone, 
  WifiOff, 
  Zap, 
  Headphones, 
  ArrowRight,
  BellRing
} from 'lucide-react';

export const MobilePromo: React.FC = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
      
      {/* Hero Section */}
      <div className="bg-[#1c1917] text-[#fafaf9] rounded-3xl overflow-hidden relative min-h-[500px] flex items-center mb-12">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1c1917] via-[#1c1917]/90 to-transparent"></div>
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 md:p-16 items-center w-full">
          <div className="space-y-8">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-stone-700 bg-stone-800/50 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs font-bold tracking-widest uppercase text-stone-300">Public Beta Live</span>
             </div>
             
             <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight">
               ZenFlow <br/>
               <span className="text-stone-500">Pocket Edition.</span>
             </h1>
             
             <p className="text-lg text-stone-400 max-w-md leading-relaxed">
               信号不应受限于桌面。在通勤途中收听简报，离线阅读深度长文，或者通过主屏小组件实时监控全网雷达。
             </p>

             <div className="flex flex-col sm:flex-row gap-4">
               <button className="flex items-center justify-center gap-3 bg-white text-stone-900 px-6 py-4 rounded-xl font-bold hover:bg-stone-200 transition-colors">
                  <Apple size={20} /> App Store
               </button>
               <button className="flex items-center justify-center gap-3 bg-stone-800 text-white border border-stone-700 px-6 py-4 rounded-xl font-bold hover:bg-stone-700 transition-colors">
                  <Smartphone size={20} /> Android APK
               </button>
             </div>
             
             <div className="flex items-center gap-4 text-xs text-stone-500 font-mono">
                <span>v2.4.0 (Build 892)</span>
                <span>•</span>
                <span>Requires iOS 17+</span>
             </div>
          </div>

          {/* CSS Phone Mockup */}
          <div className="hidden lg:flex justify-center perspective-1000">
             <div className="relative w-[300px] h-[600px] bg-stone-900 rounded-[3rem] border-8 border-stone-800 shadow-2xl rotate-y-12 rotate-z-6 transform transition-transform hover:rotate-0 duration-700 overflow-hidden">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-stone-950 rounded-b-xl z-20"></div>
                
                {/* Screen Content */}
                <div className="w-full h-full bg-[#fafaf9] flex flex-col pt-12 px-4 relative">
                   {/* Status Bar Sim */}
                   <div className="flex justify-between items-center mb-6">
                      <div className="text-stone-900 font-serif font-bold text-xl">ZenFlow</div>
                      <div className="w-8 h-8 bg-stone-200 rounded-full"></div>
                   </div>

                   {/* Simulated Feed */}
                   <div className="space-y-3">
                      <div className="bg-white p-4 rounded-xl shadow-sm border border-stone-100">
                         <div className="h-2 w-16 bg-rose-100 rounded mb-2"></div>
                         <div className="h-4 w-full bg-stone-800 rounded mb-2"></div>
                         <div className="h-4 w-2/3 bg-stone-800 rounded"></div>
                      </div>
                      <div className="bg-white p-4 rounded-xl shadow-sm border border-stone-100">
                         <div className="h-2 w-16 bg-blue-100 rounded mb-2"></div>
                         <div className="h-4 w-full bg-stone-800 rounded mb-2"></div>
                         <div className="h-4 w-2/3 bg-stone-800 rounded"></div>
                      </div>
                      <div className="bg-stone-900 p-4 rounded-xl shadow-lg mt-4 text-white">
                         <div className="flex items-center gap-2 mb-2">
                           <Headphones size={14} className="animate-pulse" />
                           <span className="text-xs font-bold uppercase">Now Playing</span>
                         </div>
                         <div className="text-sm font-medium">Daily Briefing: AI Update</div>
                         <div className="w-full h-1 bg-stone-700 rounded-full mt-3 overflow-hidden">
                            <div className="w-1/3 h-full bg-emerald-400"></div>
                         </div>
                      </div>
                   </div>

                   {/* Bottom Nav */}
                   <div className="absolute bottom-4 left-4 right-4 h-14 bg-white/80 backdrop-blur-md rounded-2xl flex items-center justify-around shadow-lg border border-stone-100">
                      <div className="w-10 h-1 rounded bg-stone-300"></div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
         <div className="bg-white p-8 rounded-2xl border border-stone-200 hover:shadow-lg transition-all group">
            <div className="w-12 h-12 bg-stone-100 rounded-xl flex items-center justify-center text-stone-900 mb-6 group-hover:scale-110 transition-transform">
               <WifiOff size={24} />
            </div>
            <h3 className="font-serif font-bold text-xl text-stone-900 mb-2">Offline First</h3>
            <p className="text-stone-500 text-sm leading-relaxed">
               地铁、飞机、或深山。所有的文章和简报都会自动缓存。这是属于你的本地知识库。
            </p>
         </div>

         <div className="bg-white p-8 rounded-2xl border border-stone-200 hover:shadow-lg transition-all group">
            <div className="w-12 h-12 bg-stone-100 rounded-xl flex items-center justify-center text-stone-900 mb-6 group-hover:scale-110 transition-transform">
               <Headphones size={24} />
            </div>
            <h3 className="font-serif font-bold text-xl text-stone-900 mb-2">Audio Mode</h3>
            <p className="text-stone-500 text-sm leading-relaxed">
               内置 TTS 引擎，用极度自然的人声朗读任何文章。通勤时间也能高效输入。
            </p>
         </div>

         <div className="bg-white p-8 rounded-2xl border border-stone-200 hover:shadow-lg transition-all group">
            <div className="w-12 h-12 bg-stone-100 rounded-xl flex items-center justify-center text-stone-900 mb-6 group-hover:scale-110 transition-transform">
               <BellRing size={24} />
            </div>
            <h3 className="font-serif font-bold text-xl text-stone-900 mb-2">Smart Push</h3>
            <p className="text-stone-500 text-sm leading-relaxed">
               告别无用的推送。只有当 Radar 监测到“重大”信号（Impact Score &gt; 90）时，才会打扰你。
            </p>
         </div>
      </div>

      {/* Widget Showcase */}
      <div className="bg-stone-200 rounded-3xl p-8 md:p-16 text-center">
         <div className="inline-block p-4 bg-white rounded-2xl shadow-xl mb-8 transform -rotate-2">
            <Zap size={32} className="text-stone-900" />
         </div>
         <h2 className="text-3xl font-serif font-bold text-stone-900 mb-4">
            你的主屏幕，需要一点信号。
         </h2>
         <p className="text-stone-600 max-w-lg mx-auto mb-8">
            ZenFlow iOS Widget 让你可以直接在桌面查看当天的关键信号指标和阅读进度。
         </p>
         <Button variant="primary">查看 Widget 演示 <ArrowRight size={16} className="ml-2" /></Button>
      </div>

    </div>
  );
};