import React from 'react';
import { Button } from '../components/ui/Button';
import { 
  Apple, 
  Smartphone, 
  Wifi, 
  Zap, 
  Headphones, 
  ArrowRight,
  Monitor,
  MousePointer2,
  Command,
  ArrowLeftRight,
  Cloud,
  CheckCircle2,
  Layout,
  Globe
} from 'lucide-react';

export const MobilePromo: React.FC = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 bg-[#fafaf9]">
      
      {/* ================= HERO SECTION (MOBILE FOCUS) ================= */}
      <section className="bg-[#1c1917] text-[#fafaf9] min-h-[85vh] relative overflow-hidden flex flex-col justify-center rounded-3xl mb-12">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-stone-800/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-stone-800/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

        <div className="container max-w-7xl mx-auto px-6 py-20 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="space-y-8 order-2 lg:order-1">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-stone-700 bg-stone-800/50 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs font-bold tracking-widest uppercase text-stone-300">Public Beta Live</span>
             </div>
             
             <h1 className="text-5xl md:text-7xl font-serif font-bold leading-[0.95] tracking-tight">
               ZenFlow <br/>
               <span className="text-stone-500">Pocket Edition.</span>
             </h1>
             
             <p className="text-lg md:text-xl text-stone-400 max-w-lg leading-relaxed font-light">
               信号不应受限于桌面。在通勤途中收听简报，离线阅读深度长文，或者通过主屏小组件实时监控全网雷达。
             </p>

             <div className="flex flex-col sm:flex-row gap-4 pt-4">
               <button className="flex items-center justify-center gap-3 bg-white text-stone-900 px-8 py-4 rounded-2xl font-bold hover:bg-stone-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                  <Apple size={22} /> <span className="text-sm">App Store</span>
               </button>
               <button className="flex items-center justify-center gap-3 bg-stone-800 text-white border border-stone-700 px-8 py-4 rounded-2xl font-bold hover:bg-stone-700 transition-colors">
                  <Smartphone size={22} /> <span className="text-sm">Android APK</span>
               </button>
             </div>
             
             <div className="flex items-center gap-6 text-xs text-stone-500 font-mono border-t border-stone-800 pt-6 max-w-sm">
                <div className="flex items-center gap-2">
                   <Cloud size={14} /> <span>Cloud Sync</span>
                </div>
                <div className="flex items-center gap-2">
                   <Wifi size={14} /> <span>Offline Mode</span>
                </div>
             </div>
          </div>

          {/* Visual: Phone Mockup */}
          <div className="order-1 lg:order-2 flex justify-center perspective-1000 relative">
             {/* Decorative Ring */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-stone-800 rounded-full opacity-50 animate-[spin_60s_linear_infinite]"></div>
             
             <div className="relative w-[320px] h-[640px] bg-stone-900 rounded-[3.5rem] border-[10px] border-stone-800 shadow-2xl rotate-y-[-12deg] rotate-x-[5deg] transform transition-transform hover:rotate-0 duration-700 overflow-hidden group z-20">
                {/* Screen Glare */}
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/10 to-transparent pointer-events-none z-30 rounded-[3rem]"></div>
                
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-stone-950 rounded-b-xl z-20"></div>
                
                {/* Screen Content */}
                <div className="w-full h-full bg-[#fafaf9] flex flex-col pt-12 px-5 relative">
                   <div className="flex justify-between items-center mb-8 mt-2">
                      <div className="text-stone-900 font-serif font-bold text-2xl">ZenFlow</div>
                      <div className="w-8 h-8 bg-stone-200 rounded-full"></div>
                   </div>

                   <div className="space-y-4">
                      {/* Card 1 */}
                      <div className="bg-white p-5 rounded-2xl shadow-lg border border-stone-100 transform transition-transform group-hover:-translate-y-2 duration-500">
                         <div className="flex items-center gap-2 mb-3">
                            <span className="w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 text-[10px] font-bold">A</span>
                            <span className="text-[10px] font-bold text-stone-400 uppercase">Anthropic</span>
                         </div>
                         <div className="h-2 w-16 bg-stone-200 rounded mb-2"></div>
                         <div className="h-5 w-full bg-stone-900 rounded mb-2"></div>
                         <div className="h-16 w-full bg-stone-100 rounded"></div>
                      </div>
                      
                      {/* Card 2 */}
                      <div className="bg-stone-900 p-5 rounded-2xl shadow-xl mt-4 text-white transform transition-transform group-hover:-translate-y-1 duration-700 delay-75">
                         <div className="flex items-center justify-between mb-4">
                           <div className="flex items-center gap-2">
                             <Headphones size={16} className="text-emerald-400 animate-pulse" />
                             <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Audio Mode</span>
                           </div>
                           <span className="text-xs font-mono">12:04</span>
                         </div>
                         <div className="text-lg font-serif font-bold leading-tight mb-4">Weekly Briefing: The Agentic Era</div>
                         <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center">
                               <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-black border-b-[5px] border-b-transparent ml-1"></div>
                            </div>
                            <div className="flex-1 h-1 bg-stone-700 rounded-full overflow-hidden">
                               <div className="w-1/3 h-full bg-emerald-400"></div>
                            </div>
                         </div>
                      </div>
                   </div>

                   {/* Dock */}
                   <div className="absolute bottom-6 left-6 right-6 h-16 bg-white/90 backdrop-blur-xl rounded-3xl flex items-center justify-around shadow-2xl border border-stone-200/50">
                      {[1,2,3,4].map(i => <div key={i} className="w-10 h-10 rounded-xl bg-stone-100"></div>)}
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ================= WEB SHOWCASE SECTION ================= */}
      <section className="py-24 bg-[#fafaf9] relative overflow-hidden">
         <div className="container max-w-7xl mx-auto px-6">
            
            <div className="text-center max-w-3xl mx-auto mb-20">
               <h2 className="text-stone-900 font-serif font-bold text-4xl md:text-5xl mb-6">
                  Not just an App. <br/>A Command Center.
               </h2>
               <p className="text-stone-500 text-lg md:text-xl leading-relaxed">
                  切换到桌面端，释放 ZenFlow 的完整潜能。双栏阅读、深度搜索、以及专为大屏设计的复杂信息处理工作流。
               </p>
            </div>

            {/* BROWSER MOCKUP */}
            <div className="relative rounded-xl bg-stone-900 p-2 md:p-4 shadow-2xl mx-auto border border-stone-800 max-w-6xl group hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] transition-shadow duration-500">
               {/* Browser Window Chrome */}
               <div className="h-8 bg-stone-900 flex items-center px-4 gap-2 border-b border-stone-800 rounded-t-lg">
                  <div className="flex gap-2">
                     <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                     <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                     <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <div className="ml-4 flex-1 max-w-xl mx-auto bg-stone-800/50 h-5 rounded flex items-center justify-center text-[10px] text-stone-500 font-mono">
                     <span className="opacity-50">https://</span>zenflow.ai/dashboard
                  </div>
               </div>

               {/* Inner Content (The App UI) */}
               <div className="bg-stone-50 rounded overflow-hidden h-[500px] md:h-[700px] flex relative">
                  
                  {/* Fake Sidebar */}
                  <div className="w-64 bg-white border-r border-stone-200 hidden md:flex flex-col p-6">
                     <div className="flex items-center gap-2 mb-8">
                        <div className="w-6 h-6 bg-stone-900 rounded flex items-center justify-center text-white"><Zap size={12}/></div>
                        <span className="font-serif font-bold text-stone-900">ZenFlow</span>
                     </div>
                     <div className="space-y-4">
                        <div className="h-8 w-full bg-stone-100 rounded-lg"></div>
                        <div className="h-8 w-3/4 bg-white rounded-lg"></div>
                        <div className="h-8 w-5/6 bg-white rounded-lg"></div>
                     </div>
                     <div className="mt-auto space-y-3">
                        <div className="h-20 w-full bg-stone-900 rounded-xl p-4 flex flex-col justify-center">
                           <div className="h-2 w-12 bg-emerald-500 rounded mb-2"></div>
                           <div className="h-1 w-full bg-stone-700 rounded"></div>
                        </div>
                     </div>
                  </div>

                  {/* Fake Main Content */}
                  <div className="flex-1 p-8 overflow-hidden relative">
                     {/* Header */}
                     <div className="flex justify-between items-end mb-8 border-b-2 border-stone-900 pb-4">
                        <div className="h-10 w-64 bg-stone-900 rounded"></div>
                        <div className="h-8 w-32 bg-stone-200 rounded"></div>
                     </div>

                     {/* Grid */}
                     <div className="grid grid-cols-12 gap-6">
                        <div className="col-span-8 space-y-4">
                           {/* Post 1 */}
                           <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
                              <div className="flex justify-between mb-4">
                                 <div className="h-8 w-8 bg-stone-100 rounded-full"></div>
                                 <div className="h-6 w-20 bg-purple-50 rounded"></div>
                              </div>
                              <div className="h-6 w-3/4 bg-stone-800 rounded mb-3"></div>
                              <div className="space-y-2">
                                 <div className="h-3 w-full bg-stone-200 rounded"></div>
                                 <div className="h-3 w-5/6 bg-stone-200 rounded"></div>
                              </div>
                           </div>
                           {/* Post 2 */}
                           <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm opacity-60">
                              <div className="flex justify-between mb-4">
                                 <div className="h-8 w-8 bg-stone-100 rounded-full"></div>
                              </div>
                              <div className="h-6 w-1/2 bg-stone-800 rounded mb-3"></div>
                              <div className="space-y-2">
                                 <div className="h-3 w-full bg-stone-200 rounded"></div>
                              </div>
                           </div>
                        </div>

                        <div className="col-span-4 space-y-4 hidden lg:block">
                           <div className="bg-stone-900 h-64 rounded-xl shadow-lg p-6">
                              <div className="flex items-center gap-2 mb-4">
                                 <div className="h-4 w-4 bg-orange-400 rounded-full"></div>
                                 <div className="h-4 w-24 bg-stone-700 rounded"></div>
                              </div>
                              <div className="space-y-3">
                                 <div className="h-8 w-full bg-stone-800/50 rounded flex items-center px-2"><div className="h-2 w-20 bg-stone-600 rounded"></div></div>
                                 <div className="h-8 w-full bg-stone-800/50 rounded flex items-center px-2"><div className="h-2 w-16 bg-stone-600 rounded"></div></div>
                                 <div className="h-8 w-full bg-stone-800/50 rounded flex items-center px-2"><div className="h-2 w-24 bg-stone-600 rounded"></div></div>
                              </div>
                           </div>
                        </div>
                     </div>

                     {/* Hover Effect Interaction Hint */}
                     <div className="absolute bottom-10 right-10 bg-black/80 text-white px-4 py-2 rounded-full text-xs font-bold backdrop-blur-md flex items-center gap-2 shadow-xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <MousePointer2 size={14} /> Desktop Exclusive View
                     </div>
                  </div>
               </div>
            </div>

            {/* Feature Grid for Web */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
               <div className="text-center px-4">
                  <div className="w-16 h-16 bg-white border border-stone-200 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                     <Layout size={32} className="text-stone-800" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Broadsheet Layout</h3>
                  <p className="text-stone-500 text-sm">宽屏优化的报纸排版，一屏获取更多高价值信息，减少滚动。</p>
               </div>
               <div className="text-center px-4">
                  <div className="w-16 h-16 bg-white border border-stone-200 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                     <Command size={32} className="text-stone-800" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Power Tools</h3>
                  <p className="text-stone-500 text-sm">全键盘操作支持，批量导出 Prompt 与资源，专为 Power User 设计。</p>
               </div>
               <div className="text-center px-4">
                  <div className="w-16 h-16 bg-white border border-stone-200 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                     <Globe size={32} className="text-stone-800" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Global Radar</h3>
                  <p className="text-stone-500 text-sm">更强大的可视化雷达面板，实时监控多源数据流的抓取状态。</p>
               </div>
            </div>
         </div>
      </section>

      {/* ================= ECOSYSTEM / SYNC SECTION ================= */}
      <section className="py-24 bg-white border-t border-stone-100">
         <div className="container max-w-5xl mx-auto px-6">
            <div className="bg-gradient-to-br from-stone-50 to-white border border-stone-100 rounded-3xl p-8 md:p-16 relative overflow-hidden">
               {/* Background Pattern */}
               <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]"></div>
               
               <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                  <div className="flex-1 space-y-6">
                     <div className="inline-flex items-center gap-2 bg-stone-900 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                        <ArrowLeftRight size={12} /> Seamless Handoff
                     </div>
                     <h2 className="text-4xl font-serif font-bold text-stone-900">
                        Start on Mobile. <br/>Finish on Desktop.
                     </h2>
                     <ul className="space-y-4">
                        <li className="flex items-center gap-3 text-stone-600">
                           <CheckCircle2 size={20} className="text-emerald-500" />
                           <span>阅读进度实时 iCloud 同步</span>
                        </li>
                        <li className="flex items-center gap-3 text-stone-600">
                           <CheckCircle2 size={20} className="text-emerald-500" />
                           <span>手机收藏 Prompt，电脑一键复制</span>
                        </li>
                        <li className="flex items-center gap-3 text-stone-600">
                           <CheckCircle2 size={20} className="text-emerald-500" />
                           <span>统一的订阅管理与支付账户</span>
                        </li>
                     </ul>
                  </div>

                  <div className="flex-1 flex items-center justify-center gap-4">
                     <div className="w-24 h-48 bg-stone-900 rounded-2xl border-4 border-stone-800 shadow-2xl flex items-center justify-center">
                        <Smartphone size={32} className="text-stone-500" />
                     </div>
                     <div className="flex flex-col gap-1">
                        <div className="w-2 h-2 rounded-full bg-stone-300 animate-[bounce_1s_infinite]"></div>
                        <div className="w-2 h-2 rounded-full bg-stone-300 animate-[bounce_1s_infinite_100ms]"></div>
                        <div className="w-2 h-2 rounded-full bg-stone-300 animate-[bounce_1s_infinite_200ms]"></div>
                     </div>
                     <div className="w-64 h-40 bg-white border-4 border-stone-200 rounded-xl shadow-xl flex items-center justify-center">
                        <Monitor size={48} className="text-stone-300" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* ================= FOOTER CTA ================= */}
      <section className="bg-[#1c1917] text-stone-400 py-12 text-center rounded-t-3xl mx-4">
         <div className="container mx-auto px-6">
            <h2 className="text-2xl font-serif text-white mb-6">Ready to upgrade your information diet?</h2>
            <div className="flex justify-center gap-4">
               <Button className="bg-white text-stone-900 hover:bg-stone-200">Get Started for Free</Button>
            </div>
            <p className="text-xs mt-8 font-mono opacity-50">© 2026 ZenFlow Intelligence Inc.</p>
         </div>
      </section>
    </div>
  );
};