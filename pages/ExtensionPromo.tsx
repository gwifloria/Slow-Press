import React from 'react';
import { Button } from '../components/ui/Button';
import { 
  Puzzle, 
  Chrome, 
  CheckCircle2, 
  Zap, 
  MousePointer2,
  Copy,
  Scissors,
  ArrowRight,
  Sparkles
} from 'lucide-react';

export const ExtensionPromo: React.FC = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden rounded-3xl bg-[#fafaf9] border border-stone-200 pb-20 pt-16 px-6 md:px-16 mb-12">
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 border border-orange-200/50">
             <Puzzle size={14} />
             <span className="text-xs font-bold tracking-widest uppercase">ZenFlow Clipper v1.0</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-stone-900 tracking-tight leading-[1.1]">
            Don't lose that Prompt. <br/>
            <span className="text-stone-400">Capture it instantly.</span>
          </h1>
          
          <p className="text-lg text-stone-500 max-w-2xl mx-auto leading-relaxed">
            网页才是最大的知识库。ZenFlow 浏览器插件让你在浏览 Twitter、Reddit 或 Github 时，一键将优质 Prompt、代码片段和灵感存入 Workbench。
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
             <Button className="bg-stone-900 text-white h-14 px-8 rounded-2xl text-base shadow-xl hover:scale-105 transition-transform">
                <Chrome size={20} className="mr-2" /> Add to Chrome
             </Button>
             <Button variant="ghost" className="h-14 px-8 rounded-2xl text-base text-stone-500 hover:text-stone-900">
                View Documentation
             </Button>
          </div>
        </div>
      </section>

      {/* ================= INTERACTIVE DEMO ================= */}
      <section className="mb-24">
         <div className="max-w-5xl mx-auto">
            <div className="bg-stone-900 rounded-2xl p-4 shadow-2xl border border-stone-800 overflow-hidden relative group">
               
               {/* Browser Chrome */}
               <div className="flex items-center gap-4 mb-4 px-2">
                  <div className="flex gap-2">
                     <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                     <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                     <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <div className="flex-1 bg-stone-800 h-8 rounded-lg flex items-center px-4 text-xs font-mono text-stone-500">
                     <span className="text-stone-300">github.com</span>/awesome-chatgpt-prompts
                  </div>
                  <div className="flex items-center gap-3">
                     <div className="w-8 h-8 rounded-full bg-stone-700 flex items-center justify-center hover:bg-stone-600 cursor-pointer transition-colors relative">
                        <Puzzle size={16} className="text-white" />
                        {/* Extension Badge */}
                        <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-rose-500 rounded-full border-2 border-stone-700"></div>
                     </div>
                  </div>
               </div>

               {/* Viewport Content */}
               <div className="bg-white rounded-lg h-[450px] overflow-hidden relative flex flex-col p-10 font-sans text-stone-800 select-none">
                  
                  {/* Fake Page Content */}
                  <h2 className="text-3xl font-bold mb-6">Act as a Senior Frontend Developer</h2>
                  <p className="mb-4 text-stone-600">To get the best results, you should provide context about the technology stack.</p>
                  
                  {/* The Selection */}
                  <div className="bg-blue-100/50 p-6 rounded-xl border border-blue-200 relative group/selection cursor-text">
                     <p className="font-mono text-sm text-blue-900 leading-relaxed">
                        "I want you to act as a Senior Frontend Developer. I will describe a project details you will code project with these tools: Create React App, yarn, Ant Design, ESlint, PorpTypes, Axios..."
                     </p>
                     
                     {/* Cursor Simulation */}
                     <MousePointer2 className="absolute -bottom-4 -right-4 fill-stone-900 text-stone-50 stroke-2 drop-shadow-lg z-50 animate-bounce" />

                     {/* CONTEXT MENU (The Magic) */}
                     <div className="absolute top-1/2 left-3/4 w-56 bg-white/95 backdrop-blur-md rounded-lg shadow-2xl border border-stone-200/50 overflow-hidden transform transition-all duration-300 origin-top-left z-40">
                        <div className="py-1.5">
                           <div className="px-4 py-2 hover:bg-stone-100 text-sm flex items-center gap-3 text-stone-500">
                              <Copy size={14} /> Copy
                           </div>
                           <div className="px-4 py-2 hover:bg-stone-100 text-sm flex items-center gap-3 text-stone-500">
                              <Zap size={14} /> Explain
                           </div>
                           <div className="h-px bg-stone-100 my-1"></div>
                           <div className="px-4 py-2 bg-stone-50 text-sm flex items-center gap-3 text-stone-900 font-bold hover:bg-stone-100 cursor-pointer">
                              <div className="w-5 h-5 bg-stone-900 rounded flex items-center justify-center">
                                 <Sparkles size={10} className="text-white" />
                              </div>
                              Save to ZenFlow
                           </div>
                        </div>
                     </div>
                  </div>

                  <p className="mt-6 text-stone-400">More prompts below...</p>
                  <div className="space-y-3 mt-4">
                     <div className="h-4 bg-stone-100 w-full rounded"></div>
                     <div className="h-4 bg-stone-100 w-5/6 rounded"></div>
                     <div className="h-4 bg-stone-100 w-4/6 rounded"></div>
                  </div>

                  {/* Success Toast Simulation */}
                  <div className="absolute top-6 right-6 bg-stone-900 text-white px-4 py-3 rounded-xl shadow-xl flex items-center gap-3 animate-in slide-in-from-top-4 fade-in duration-500 delay-1000 fill-mode-forwards opacity-0" style={{animationDelay: '1.5s'}}>
                     <CheckCircle2 size={18} className="text-emerald-400" />
                     <div>
                        <div className="text-xs font-bold">Saved to Workbench</div>
                        <div className="text-[10px] text-stone-400">Tags: #Coding #Persona</div>
                     </div>
                  </div>

               </div>
            </div>
         </div>
      </section>

      {/* ================= FEATURES GRID ================= */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 max-w-6xl mx-auto px-6">
         <div className="bg-white p-8 rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-stone-100 rounded-xl flex items-center justify-center mb-6 text-stone-900">
               <Scissors size={24} />
            </div>
            <h3 className="font-bold text-xl mb-3 text-stone-900">Smart Clipping</h3>
            <p className="text-stone-500 leading-relaxed text-sm">
               不仅仅是复制粘贴。插件会自动抓取当前页面的 URL、标题和元数据，确保存档内容可溯源。
            </p>
         </div>
         
         <div className="bg-white p-8 rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-6 text-purple-600">
               <Zap size={24} />
            </div>
            <h3 className="font-bold text-xl mb-3 text-stone-900">AI Auto-Tagging</h3>
            <p className="text-stone-500 leading-relaxed text-sm">
               利用 Gemini 模型自动分析剪藏内容的语义，自动打上 #Prompt #Code 等标签，无需手动整理。
            </p>
         </div>

         <div className="bg-white p-8 rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-6 text-emerald-600">
               <CheckCircle2 size={24} />
            </div>
            <h3 className="font-bold text-xl mb-3 text-stone-900">Instant Sync</h3>
            <p className="text-stone-500 leading-relaxed text-sm">
               你在浏览器里保存的灵感，下一秒就会出现在手机 App 和桌面端 Workbench 中，随时调用。
            </p>
         </div>
      </section>

      {/* ================= FOOTER CTA ================= */}
      <section className="bg-stone-900 rounded-3xl p-12 text-center relative overflow-hidden">
         <div className="relative z-10">
            <h2 className="text-3xl font-serif text-white mb-6">Start building your Prompt Library.</h2>
            <Button className="bg-white text-stone-900 h-12 px-8 rounded-xl font-bold hover:bg-stone-200">
               Install Extension for Free <ArrowRight size={16} className="ml-2" />
            </Button>
         </div>
         {/* Background decoration */}
         <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-10 left-10 w-32 h-32 bg-rose-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
         </div>
      </section>

    </div>
  );
};