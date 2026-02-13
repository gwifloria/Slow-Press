import React from 'react';
import { Button } from '../components/ui/Button';
import { 
  Monitor, 
  ArrowRight,
  Puzzle,
  Command,
  Zap,
  Globe,
  Layout,
  MousePointer2,
  CheckCircle2,
  Terminal,
  Search,
  Copy,
  Plus,
  Newspaper,
  ScrollText,
  Maximize2,
  Code2,
  Wand2,
  Download,
  Share2,
  BookOpen,
  Coffee,
  X,
  ChevronLeft,
  ChevronRight,
  RotateCw
} from 'lucide-react';

export const MobilePromo: React.FC = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 bg-[#fafaf9]">
      
      {/* ================= 1. HERO SECTION (BROWSER BASED OS) ================= */}
      <section className="bg-[#0c0a09] text-[#e5e5e5] min-h-[90vh] relative overflow-hidden flex flex-col justify-center rounded-b-[3rem] py-24 px-4 md:px-0 mb-0">
        
        {/* Ambient Glows */}
        <div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] bg-stone-800/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-emerald-900/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container max-w-7xl mx-auto z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-6">
          
          {/* Text Content */}
          <div className="space-y-8 order-2 lg:order-1 relative z-20">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-stone-800 bg-stone-900/80 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs font-bold tracking-widest uppercase text-stone-400">Web-Based Intelligence OS</span>
             </div>
             
             <h1 className="text-5xl md:text-7xl font-serif font-bold leading-[1.05] tracking-tight text-white">
               Your Command Center <br/>
               <span className="text-stone-500">in the Browser.</span>
             </h1>
             
             <p className="text-lg md:text-xl text-stone-400 max-w-lg leading-relaxed font-light">
               无需下载 App。在一个为大屏浏览器优化的沉浸式控制台中，掌控从信号抓取、深度阅读到知识归档的完整工作流。
             </p>

             <div className="flex flex-col sm:flex-row gap-4 pt-4">
               <button className="flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-stone-200 transition-all shadow-[0_0_25px_rgba(255,255,255,0.15)] group">
                  <Globe size={20} /> 
                  <span className="text-sm">Open Web App</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
               </button>
               <button className="flex items-center justify-center gap-3 bg-stone-900 text-stone-300 border border-stone-800 px-8 py-4 rounded-xl font-bold hover:bg-stone-800 transition-colors">
                  <Terminal size={20} /> <span className="text-sm">View Changelog</span>
               </button>
             </div>
          </div>

          {/* Visual: BROWSER Mockup (Not App Window) */}
          <div className="order-1 lg:order-2 perspective-1200 relative h-[500px] md:h-[600px] flex items-center justify-center">
             <div className="relative w-[900px] h-[550px] bg-[#1c1917] rounded-xl border border-stone-800 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.7)] rotate-y-[-12deg] rotate-x-[5deg] transform transition-transform hover:rotate-0 duration-1000 group z-20 overflow-hidden ml-12 md:ml-0 flex flex-col">
                
                {/* Browser Toolbar (The Key Differentiator) */}
                <div className="h-12 bg-[#292524] flex items-center px-4 gap-4 border-b border-stone-800 w-full flex-shrink-0">
                   {/* Traffic Lights (Browser Window controls) */}
                   <div className="flex gap-1.5 opacity-50"><div className="w-3 h-3 rounded-full bg-stone-600"></div><div className="w-3 h-3 rounded-full bg-stone-600"></div><div className="w-3 h-3 rounded-full bg-stone-600"></div></div>
                   
                   {/* Navigation Arrows */}
                   <div className="flex gap-2 text-stone-500">
                      <ChevronLeft size={16} />
                      <ChevronRight size={16} />
                      <RotateCw size={14} />
                   </div>

                   {/* Address Bar */}
                   <div className="flex-1 bg-[#1c1917] h-8 rounded-md border border-stone-700 flex items-center justify-center text-xs font-mono text-emerald-500 relative">
                      <div className="absolute left-2 text-stone-500"><Search size={12}/></div>
                      <span className="text-stone-400">https://</span>app.zenflow.ai<span className="text-stone-600">/dashboard</span>
                   </div>
                   
                   {/* User Profile */}
                   <div className="w-6 h-6 rounded-full bg-stone-700"></div>
                </div>

                {/* Web App Content */}
                <div className="flex-1 flex overflow-hidden">
                   {/* Sidebar */}
                   <div className="w-16 md:w-56 bg-[#0f0f0f] border-r border-stone-800 flex flex-col p-4">
                      <div className="flex items-center gap-3 text-white mb-6">
                         <div className="w-8 h-8 bg-white text-black rounded-lg flex items-center justify-center"><Zap size={16}/></div>
                         <span className="font-serif font-bold hidden md:block">ZenFlow</span>
                      </div>
                      <div className="space-y-1">
                          <div className="h-8 bg-stone-800/50 rounded-lg w-full flex items-center px-3 gap-3 text-white"><Layout size={14}/><span className="text-xs hidden md:block">Dashboard</span></div>
                          <div className="h-8 rounded-lg w-full flex items-center px-3 gap-3 text-stone-500"><Globe size={14}/><span className="text-xs hidden md:block">Radar</span></div>
                      </div>
                   </div>
                   
                   {/* Main Dashboard Area */}
                   <div className="flex-1 bg-[#1c1917] p-6 relative overflow-hidden">
                      <div className="grid grid-cols-2 gap-4 h-full">
                         <div className="col-span-2 md:col-span-1 space-y-4">
                            <div className="bg-[#292524] p-5 rounded-xl border border-stone-800">
                               <div className="h-2 w-24 bg-stone-700 rounded mb-4"></div>
                               <div className="space-y-2"><div className="h-2 w-full bg-stone-800 rounded"></div><div className="h-2 w-5/6 bg-stone-800 rounded"></div></div>
                            </div>
                            <div className="bg-[#292524] p-5 rounded-xl border border-stone-800 opacity-60"><div className="h-2 w-full bg-stone-800 rounded"></div></div>
                         </div>
                         <div className="hidden md:block col-span-1 space-y-4">
                            <div className="bg-[#292524] h-32 rounded-xl border border-stone-800 p-4 relative">
                               <div className="text-2xl font-bold text-white">842</div>
                               <div className="text-[10px] text-stone-500 uppercase">Signals Processed</div>
                               {/* Graph Mockup */}
                               <div className="absolute bottom-4 left-4 right-4 h-8 flex items-end gap-1">
                                  <div className="w-full bg-emerald-900/30 h-[40%] rounded-sm"></div>
                                  <div className="w-full bg-emerald-900/50 h-[70%] rounded-sm"></div>
                                  <div className="w-full bg-emerald-500 h-[50%] rounded-sm shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                                  <div className="w-full bg-emerald-900/30 h-[60%] rounded-sm"></div>
                               </div>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ================= 2. NEWSPAPER SECTION (BROADSHEET UI) ================= */}
      <section className="py-32 bg-[#fafaf9] relative overflow-hidden">
        <div className="container max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            {/* Visual: Broadsheet Web Layout */}
            <div className="relative group order-2 lg:order-1 perspective-1000">
               {/* Background Shadow */}
               <div className="absolute inset-0 bg-stone-200/50 rounded-sm transform rotate-[-2deg] scale-100 z-0"></div>
               
               {/* The Paper UI - Designed to look like a clean NYT/FT style site */}
               <div className="relative z-10 bg-[#fbfaf9] shadow-2xl border border-stone-200 h-[600px] overflow-hidden flex flex-col transform transition-all duration-700 group-hover:rotate-y-2 group-hover:scale-[1.01]">
                  {/* Website Header */}
                  <div className="border-b-2 border-black p-6 text-center bg-[#fffbf5]">
                     <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-400 mb-1">Weekly Intelligence</div>
                     <h2 className="text-5xl font-serif font-black text-black tracking-tighter leading-none mb-4">ZEN BRIEFING</h2>
                     <div className="grid grid-cols-3 border-t border-black pt-2 text-[10px] font-bold uppercase text-stone-500">
                        <div className="text-left">Vol. 42</div>
                        <div className="text-center">Feb 2026</div>
                        <div className="text-right">Est. 12m Read</div>
                     </div>
                  </div>

                  {/* Columns */}
                  <div className="flex-1 p-6 grid grid-cols-3 gap-6 bg-[#fffbf5] overflow-hidden relative">
                     {/* Gradient fade at bottom */}
                     <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#fffbf5] to-transparent z-20"></div>

                     {/* Col 1: Headlines */}
                     <div className="col-span-2 space-y-6">
                        <article>
                           <h3 className="text-2xl font-serif font-bold leading-tight mb-2">Anthropic's "Computer Use" Changes Everything.</h3>
                           <div className="h-40 bg-stone-200 w-full mb-3 grayscale opacity-80 mix-blend-multiply"></div>
                           <div className="flex gap-2 text-[10px] font-serif leading-relaxed text-justify text-stone-800 columns-2">
                              <p><span className="text-3xl float-left mr-1 font-bold">T</span>he latest release marks a pivotal moment in agentic workflows. By allowing the model to control the mouse...</p>
                              <p>For power users, this means the friction between planning and doing is about to vanish entirely.</p>
                           </div>
                        </article>
                     </div>

                     {/* Col 2: Sidebar */}
                     <div className="col-span-1 border-l border-stone-200 pl-4 space-y-4">
                        <div className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-2">In Brief</div>
                        <div className="space-y-4">
                           <div>
                              <div className="h-1 w-8 bg-black mb-1"></div>
                              <h4 className="font-serif font-bold text-sm leading-tight mb-1">Midjourney V7</h4>
                              <p className="text-[9px] text-stone-500">New lighting engine leaked.</p>
                           </div>
                           <div>
                              <div className="h-1 w-8 bg-black mb-1"></div>
                              <h4 className="font-serif font-bold text-sm leading-tight mb-1">OpenAI Sora</h4>
                              <p className="text-[9px] text-stone-500">Public beta opens today.</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Text Content */}
            <div className="order-1 lg:order-2 space-y-8">
               <div className="w-12 h-12 bg-white border border-stone-200 rounded-xl flex items-center justify-center text-stone-900 shadow-sm">
                  <Newspaper size={24} />
               </div>
               <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 leading-[1.1]">
                  Broadsheet UI. <br/>
                  <span className="text-stone-400">High Density, Low Noise.</span>
               </h2>
               <p className="text-lg text-stone-600 leading-relaxed">
                  大多数网页流为了增加“用户时长”而设计得极其稀疏。ZenFlow 借鉴传统大报（Broadsheet）排版，专为 27 寸以上桌面大屏优化。
               </p>
               <ul className="space-y-4 pt-2">
                  <li className="flex items-start gap-3">
                     <Maximize2 size={20} className="mt-1 text-stone-900" />
                     <div>
                        <div className="font-bold text-stone-900">3x Information Density</div>
                        <div className="text-sm text-stone-500">一屏尽览全网 AI 动态，减少 40% 的无效滚动。</div>
                     </div>
                  </li>
                  <li className="flex items-start gap-3">
                     <ScrollText size={20} className="mt-1 text-stone-900" />
                     <div>
                        <div className="font-bold text-stone-900">Curated by AI + Humans</div>
                        <div className="text-sm text-stone-500">自动聚合官方公告与社区神评，一眼看透事件全貌。</div>
                     </div>
                  </li>
               </ul>
            </div>
        </div>
      </section>

      {/* ================= 3. NEW SECTION: READER MODE (THE BRIDGE) ================= */}
      <section className="py-24 bg-[#f5f5f4] border-y border-stone-200">
         <div className="container max-w-4xl mx-auto px-6 text-center">
            <div className="mb-12">
               <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-sm text-stone-800 mb-6">
                  <BookOpen size={20} />
               </div>
               <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">
                  From Scanning to <span className="italic font-light">Deep Reading</span>.
               </h2>
               <p className="text-stone-500 text-lg max-w-2xl mx-auto">
                  当你发现感兴趣的信号时，一键进入沉浸式阅读模式。去除所有侧边栏、广告和干扰，只留下纯粹的文字与思考。
               </p>
            </div>

            {/* Reader Mode Visual */}
            <div className="bg-white rounded-t-3xl shadow-xl border border-stone-200 p-12 max-w-2xl mx-auto relative overflow-hidden h-[400px]">
               <div className="absolute top-0 left-0 w-full h-1 bg-stone-900"></div>
               <div className="text-left font-serif max-w-lg mx-auto">
                  <div className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-6">Reader View</div>
                  <h3 className="text-3xl font-bold text-stone-900 mb-6 leading-tight">The Art of Focus in the Age of AI</h3>
                  <div className="flex items-center gap-2 mb-8 text-stone-500 text-sm italic">
                     <Coffee size={14} /> 5 min read
                  </div>
                  <p className="text-xl leading-relaxed text-stone-700 mb-6">
                     "In a world where intelligence is abundant, the ability to focus becomes the ultimate scarcity. We built ZenFlow not to add more content, but to curate better context..."
                  </p>
                  <p className="text-xl leading-relaxed text-stone-700">
                     The interface fades away. It's just you and the ideas.
                  </p>
               </div>
               {/* Fade out bottom */}
               <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
            </div>
         </div>
      </section>

      {/* ================= 4. WORKBENCH SECTION (THE ARSENAL) ================= */}
      <section className="py-32 bg-[#1c1917] text-stone-200 relative">
         {/* Background Grid */}
         <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>

         <div className="container max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-20">
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-800 text-stone-400 border border-stone-700 mb-6">
                  <Terminal size={14} />
                  <span className="text-xs font-bold tracking-widest uppercase">Efficiency Workbench</span>
               </div>
               <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                  Build your Arsenal.
               </h2>
               <p className="text-stone-400 text-lg">
                  光看不够。Workbench 是你的数字化军火库。这里汇集了经过验证的 Prompt、自动化脚本和 Notion 模版。
               </p>
            </div>

            {/* The Workbench Grid Visualization */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               
               {/* Card 1: Prompt (Code Style) */}
               <div className="bg-[#292524] rounded-2xl p-6 border border-stone-800 hover:border-purple-500/50 transition-colors group relative overflow-hidden flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                     <div className="w-10 h-10 rounded-lg bg-purple-900/30 text-purple-400 flex items-center justify-center">
                        <Wand2 size={20} />
                     </div>
                     <span className="text-[10px] bg-purple-900/20 text-purple-300 px-2 py-1 rounded border border-purple-500/20">System Prompt</span>
                  </div>
                  <h3 className="font-bold text-white mb-3">DeepSeek Coder V2</h3>
                  <div className="bg-black/50 rounded-lg p-3 font-mono text-xs text-stone-400 mb-4 border border-stone-800 flex-1">
                     <span className="text-purple-400">const</span> <span className="text-blue-400">role</span> = <span className="text-green-400">"Senior Architect"</span>;<br/>
                     <span className="text-stone-500">// Optimized for reasoning...</span><br/>
                     <span className="text-stone-500">// Clean Architecture rules...</span>
                  </div>
                  <Button size="sm" className="w-full bg-stone-800 hover:bg-stone-700 border border-stone-700 text-stone-300">
                     <Copy size={14} className="mr-2" /> Copy to Clipboard
                  </Button>
               </div>

               {/* Card 2: Script (Featured - Large) */}
               <div className="md:col-span-2 bg-gradient-to-br from-stone-800 to-[#292524] rounded-2xl p-8 border border-stone-700 shadow-2xl relative overflow-hidden flex flex-col justify-between">
                  <div>
                     <div className="flex justify-between items-start mb-6">
                        <div className="flex items-center gap-2 mb-2">
                           <Code2 size={20} className="text-blue-400" />
                           <span className="text-xs font-bold uppercase tracking-widest text-blue-400">Automation Script</span>
                        </div>
                        <div className="bg-stone-950/50 backdrop-blur rounded-lg px-3 py-1 text-xs font-mono text-stone-400 border border-stone-700">
                           Python • v2.4
                        </div>
                     </div>
                     <h3 className="text-2xl font-bold text-white mb-2">Weekly Report Generator</h3>
                     <p className="text-sm text-stone-400 leading-relaxed max-w-md">
                        Automatically pulls data from Notion database, summarizes it using Claude 3.5 Sonnet, and generates a formatted PDF.
                     </p>
                  </div>
                  
                  <div className="mt-8 bg-black rounded-lg p-4 font-mono text-xs border border-stone-800 text-stone-500 shadow-inner overflow-hidden relative">
                     {/* Syntax Highlight Mock */}
                     <div className="flex gap-2 mb-3 border-b border-stone-800 pb-2">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                     </div>
                     <div>
                        <span className="text-pink-500">import</span> pandas <span className="text-pink-500">as</span> pd<br/>
                        <span className="text-pink-500">from</span> zenflow <span className="text-pink-500">import</span> Agent<br/>
                        <br/>
                        <span className="text-blue-400">def</span> <span className="text-yellow-400">generate_report</span>(data):<br/>
                        &nbsp;&nbsp;<span className="text-stone-600"># Init AI Agent</span><br/>
                        &nbsp;&nbsp;agent = Agent(model=<span className="text-green-400">"claude-3-5"</span>)<br/>
                        &nbsp;&nbsp;<span className="text-pink-500">return</span> agent.analyze(data)
                     </div>
                  </div>
               </div>

               {/* Card 3: Template */}
               <div className="bg-[#292524] rounded-2xl p-6 border border-stone-800 hover:border-orange-500/50 transition-colors group flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                     <div className="w-10 h-10 rounded-lg bg-orange-900/30 text-orange-400 flex items-center justify-center">
                        <Layout size={20} />
                     </div>
                     <span className="text-[10px] bg-orange-900/20 text-orange-300 px-2 py-1 rounded border border-orange-500/20">Notion</span>
                  </div>
                  <h3 className="font-bold text-white mb-2">PARA Dashboard</h3>
                  <p className="text-xs text-stone-500 mb-4 leading-relaxed flex-1">
                     Projects, Areas, Resources, Archives. A complete lifecycle management system.
                  </p>
                  <Button size="sm" className="w-full bg-stone-800 hover:bg-stone-700 border border-stone-700 text-stone-300">
                     <Download size={14} className="mr-2" /> Duplicate
                  </Button>
               </div>

               {/* Card 4: Community */}
               <div className="md:col-span-2 bg-[#292524] rounded-2xl p-6 border border-stone-800 flex items-center justify-between hover:bg-stone-800 transition-colors cursor-pointer group">
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 bg-stone-800 rounded-full flex items-center justify-center text-stone-400 group-hover:bg-white group-hover:text-black transition-colors">
                        <Plus size={24} />
                     </div>
                     <div>
                        <h3 className="font-bold text-white text-lg">Contribute Resource</h3>
                        <p className="text-sm text-stone-500">Share your workflow with 10k+ users.</p>
                     </div>
                  </div>
                  <ArrowRight size={20} className="text-stone-600 group-hover:text-white transition-colors" />
               </div>

            </div>
         </div>
      </section>

      {/* ================= 5. EXTENSION SECTION (THE INPUT) ================= */}
      <section className="py-24 bg-white border-t border-stone-200">
         <div className="container max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            
            {/* Interactive Browser Demo */}
            <div className="relative group perspective-800">
               <div className="absolute inset-0 bg-stone-100 rounded-2xl transform rotate-3 scale-95 opacity-50 z-0"></div>
               <div className="relative z-10 bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden h-[400px]">
                  {/* Fake Browser Toolbar */}
                  <div className="h-10 border-b border-stone-100 flex items-center px-4 bg-stone-50/50 gap-4">
                     <div className="flex gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-stone-300"></div><div className="w-2.5 h-2.5 rounded-full bg-stone-300"></div></div>
                     <div className="flex-1 bg-white h-6 rounded border border-stone-200 text-[10px] text-stone-400 flex items-center px-2">x.com/post/123...</div>
                  </div>
                  {/* Content */}
                  <div className="p-8 font-sans">
                     <div className="flex gap-4 mb-4">
                        <div className="w-10 h-10 rounded-full bg-stone-200"></div>
                        <div className="space-y-2 flex-1"><div className="h-3 w-32 bg-stone-200 rounded"></div><div className="h-3 w-full bg-stone-100 rounded"></div></div>
                     </div>
                     {/* The Selected Text */}
                     <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 relative mb-4 group/select">
                        <p className="font-serif text-lg text-stone-800 italic selection:bg-blue-200">"The best prompt for coding is actually simpler than you think..."</p>
                        {/* Clipper Button */}
                        <div className="absolute -right-12 -bottom-4 bg-stone-900 text-white px-3 py-2 rounded-lg shadow-xl flex items-center gap-2 transform transition-all duration-300 translate-y-2 opacity-100">
                           <Puzzle size={14} className="text-emerald-400" />
                           <span className="text-xs font-bold">Clip to OS</span>
                        </div>
                        <MousePointer2 className="absolute bottom-[-20px] right-[-30px] fill-black text-white" size={24} />
                     </div>
                  </div>
               </div>
            </div>

            {/* Text Content */}
            <div className="space-y-8 pl-0 md:pl-10">
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 border border-purple-200/50">
                  <Puzzle size={14} />
                  <span className="text-xs font-bold tracking-widest uppercase">ZenFlow Clipper</span>
               </div>
               <h2 className="text-4xl font-serif font-bold text-stone-900 leading-tight">
                  Don't lose the signal. <br/>
                  <span className="text-stone-400">Capture it instantly.</span>
               </h2>
               <p className="text-lg text-stone-500 leading-relaxed">
                  WebOS 的强大始于输入。ZenFlow 浏览器插件让你在浏览 X、Github 或 Reddit 时，一键将优质 Prompt 和代码片段结构化存入 Workbench。
               </p>
               
               <ul className="space-y-4 pt-4">
                  <li className="flex items-center gap-4">
                     <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-900">
                        <Zap size={18} />
                     </div>
                     <div>
                        <div className="font-bold text-stone-900 text-sm">AI Auto-Tagging</div>
                        <div className="text-xs text-stone-500">自动分析语义，打上 #Prompt 或 #Tool 标签</div>
                     </div>
                  </li>
                  <li className="flex items-center gap-4">
                     <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-900">
                        <Copy size={18} />
                     </div>
                     <div>
                        <div className="font-bold text-stone-900 text-sm">One-Click Copy</div>
                        <div className="text-xs text-stone-500">存入即标准化，方便随时调用</div>
                     </div>
                  </li>
               </ul>

               <div className="pt-4">
                  <Button className="bg-stone-900 text-white px-8 h-12 text-base">Install Extension</Button>
               </div>
            </div>
         </div>
      </section>

      {/* ================= FOOTER CTA ================= */}
      <section className="bg-[#0c0a09] text-stone-400 py-20 text-center rounded-t-[3rem] mx-4 relative overflow-hidden mt-0">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-stone-800/20 via-[#0c0a09] to-[#0c0a09]"></div>
         <div className="container mx-auto px-6 relative z-10 max-w-2xl">
            <h2 className="text-4xl font-serif text-white mb-8">Upgrade your information diet.</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
               <Button className="bg-white text-stone-900 hover:bg-stone-200 px-10 h-14 text-base rounded-2xl shadow-[0_0_20px_rgba(255,255,255,0.1)]">Get Started for Free</Button>
            </div>
            <p className="text-xs mt-12 font-mono opacity-30">© 2026 ZenFlow Intelligence Inc.</p>
         </div>
      </section>
    </div>
  );
};