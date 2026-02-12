import React, { useEffect, useState } from 'react';
import { ChevronLeft, Share2, Printer, MessageCircle, ArrowUpRight, Zap, ArrowDown, Hash, Loader2, ScrollText } from 'lucide-react';
import { SourceType } from '../types';

// Mock Data Structure specifically for the Newspaper Layout
interface StoryCluster {
  id: string;
  topic: string;
  readTime: string;
  officialPost: {
    source: SourceType;
    title: string;
    date: string;
    summary: string;
    url?: string;
  };
  communityReactions: Array<{
    author: string;
    source: SourceType;
    title: string; // The "Take" or "Angle"
    snippet: string;
    avatarColor: string;
  }>;
}

const WEEKLY_CLUSTERS: StoryCluster[] = [
  {
    id: 'topic-1',
    topic: 'Anthropic 模型更新',
    readTime: '3 min',
    officialPost: {
      source: SourceType.ANTHROPIC,
      title: 'Release of Claude 3.5 Sonnet & Haiku',
      date: 'Feb 09, 2026',
      summary: 'Anthropic announces upgraded models with 200k context window, improved reasoning capabilities, and reduced pricing for API usage. New "Computer Use" beta available.',
    },
    communityReactions: [
      {
        author: 'AI_Wizard_CN',
        source: SourceType.XIAOHONGSHU,
        title: 'Claude 3.5 编程实测：吊打 GPT-4o？',
        snippet: '实测了30个Python脚本生成任务，Sonnet 3.5 在一次通过率上高达 92%，特别是对于复杂逻辑的理解...',
        avatarColor: 'bg-rose-100 text-rose-600',
      },
      {
        author: 'DevRel_Tom',
        source: SourceType.DOUYIN,
        title: 'Computer Use 功能保姆级教程',
        snippet: '手把手教你配置 Docker 环境运行 Claude 的新功能，能自动帮定会议室，打工人的福音...',
        avatarColor: 'bg-slate-100 text-slate-600',
      }
    ]
  },
  {
    id: 'topic-2',
    topic: 'Midjourney V7 泄露',
    readTime: '2 min',
    officialPost: {
      source: SourceType.XIAOHONGSHU, // Sometimes the "main event" is a leak found on social media
      title: 'Midjourney V7 Alpha Testing Begins',
      date: 'Feb 08, 2026',
      summary: 'Closed beta testers report significant improvements in text rendering, consistent character generation, and new lighting simulation engines.',
    },
    communityReactions: [
      {
        author: 'DesignDaily',
        source: SourceType.XIAOHONGSHU,
        title: 'V7 光影一致性测试对比图',
        snippet: '看这组对比，V6的人物面部光线还是有些“塑料感”，V7完全解决了环境光遮蔽的问题...',
        avatarColor: 'bg-orange-100 text-orange-600',
      },
      {
        author: 'PromptEngineer',
        source: SourceType.OPENAI, // Cross comparison
        title: 'Is it better than DALL-E 4?',
        snippet: 'While MJ still wins on aesthetics, the prompt adherence of DALL-E 4 specific interaction is still...',
        avatarColor: 'bg-emerald-100 text-emerald-600',
      }
    ]
  },
  {
    id: 'topic-3',
    topic: 'OpenAI Sora 全面公测',
    readTime: '4 min',
    officialPost: {
      source: SourceType.OPENAI,
      title: 'Sora is now available for all Plus users',
      date: 'Feb 07, 2026',
      summary: 'After months of red-teaming, the text-to-video model is live. Features include video extension, editing via prompt, and 1080p export.',
    },
    communityReactions: [
      {
        author: 'MovieMaker_X',
        source: SourceType.XIAOHONGSHU,
        title: 'Sora vs Runway Gen-3 详细对比',
        snippet: '在镜头一致性上 Sora 依然是王者，但是 Runway 的运动笔刷功能在控制力上更胜一筹...',
        avatarColor: 'bg-purple-100 text-purple-600',
      }
    ]
  }
];

// --- LOADING SKELETON COMPONENT ---
const LoadingSkeleton = () => {
  const [loadingText, setLoadingText] = useState('正在获取信号...');

  useEffect(() => {
    const texts = [
      '正在扫描可靠信源...',
      '过滤无效噪音...',
      '聚合关键信息...',
      '正在排版生成周报...'
    ];
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % texts.length;
      setLoadingText(texts[i]);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-7xl mx-auto pb-20 px-4 md:px-8 animate-in fade-in duration-1000">
      {/* Header Skeleton */}
      <div className="text-center mb-10 border-b-2 border-stone-100 pb-6 relative max-w-5xl mx-auto">
        <div className="flex justify-between items-end mb-4 px-2 opacity-50">
          <div className="h-3 w-24 bg-stone-200 rounded"></div>
          <div className="h-3 w-32 bg-stone-200 rounded"></div>
        </div>
        
        {/* Big Title Skeleton */}
        <div className="h-16 md:h-24 w-3/4 bg-stone-100 mx-auto mb-4 rounded-sm animate-pulse"></div>
        
        {/* Loading Indicator */}
        <div className="flex items-center justify-center gap-3 mt-8 mb-2">
          <Loader2 className="animate-spin text-stone-300" size={18} />
          <span className="text-stone-400 font-mono text-xs tracking-widest uppercase">{loadingText}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative max-w-6xl mx-auto">
        {/* Left Sidebar Skeleton */}
        <div className="hidden lg:block lg:col-span-3">
          <div className="space-y-4 pt-8">
            <div className="h-4 w-1/2 bg-stone-200 rounded"></div>
            <div className="h-3 w-full bg-stone-100 rounded"></div>
            <div className="h-3 w-3/4 bg-stone-100 rounded"></div>
            <div className="h-3 w-5/6 bg-stone-100 rounded"></div>
          </div>
        </div>

        {/* Center Content Skeleton */}
        <div className="lg:col-span-9 max-w-3xl">
          {/* Executive Summary Skeleton */}
          <div className="bg-stone-50 rounded-xl p-8 mb-16 border border-stone-100">
            <div className="h-6 w-1/3 bg-stone-200 rounded mb-6"></div>
            <div className="space-y-3">
              <div className="h-4 w-full bg-stone-200 rounded"></div>
              <div className="h-4 w-full bg-stone-200 rounded"></div>
              <div className="h-4 w-5/6 bg-stone-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Newspaper: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  return (
    <div className="max-w-7xl mx-auto animate-in fade-in duration-700 pb-20 px-4 md:px-8">
      
      {/* Editorial Header */}
      <div className="text-center mb-10 border-b-2 border-stone-900 pb-6 relative max-w-5xl mx-auto">
        <div className="flex justify-between items-end mb-4 px-2">
          <div className="text-left">
             <div className="flex items-center gap-2 text-stone-500 mb-1">
                <ScrollText size={14} />
                <span className="text-[10px] font-bold tracking-widest uppercase">Weekly Intelligence</span>
             </div>
             <div className="text-xs font-serif italic text-stone-600">"ZenFlow: 科技、效能与人文"</div>
          </div>
          <div className="text-right">
             <div className="text-[10px] font-bold tracking-widest uppercase text-stone-400">Vol. 42</div>
             <div className="text-xs text-stone-600">2026年 2月4日 - 2月10日</div>
          </div>
        </div>
        
        <h1 className="font-serif text-6xl md:text-8xl font-bold text-stone-900 tracking-tighter leading-none mb-2">
          ZEN BRIEFING
        </h1>
        <div className="h-1 w-full bg-stone-900 mb-1"></div>
        <div className="h-px w-full bg-stone-900"></div>
      </div>

      {/* Utilities */}
      <div className="flex items-center justify-between mb-12 text-stone-500 px-2 max-w-5xl mx-auto">
        <button className="flex items-center gap-2 hover:text-stone-900 transition-colors text-sm font-medium group">
          <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> 
          往期回顾
        </button>
        <div className="flex gap-4">
          <button className="hover:text-stone-900 transition-colors flex items-center gap-2 text-xs uppercase tracking-wider font-bold">
            <Share2 size={16} /> 分享
          </button>
          <button className="hover:text-stone-900 transition-colors flex items-center gap-2 text-xs uppercase tracking-wider font-bold">
            <Printer size={16} /> 打印
          </button>
        </div>
      </div>

      {/* MAIN CONTENT GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative">
        
        {/* LEFT SIDEBAR: STICKY TOC (Visible on Desktop) */}
        <aside className="hidden lg:block lg:col-span-3">
          <div className="sticky top-8 bg-white/50 backdrop-blur-sm border border-stone-200 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-6 text-stone-900">
               <Hash size={16} />
               <span className="font-bold text-sm tracking-wide uppercase">本期导读</span>
            </div>
            <ul className="space-y-4">
              <li>
                <button 
                  onClick={() => scrollToSection('summary')}
                  className="text-left text-sm text-stone-500 hover:text-stone-900 hover:font-medium transition-all group flex items-start gap-2"
                >
                  <span className="text-stone-300 group-hover:text-stone-900 transition-colors">00</span>
                  核心摘要
                </button>
              </li>
              {WEEKLY_CLUSTERS.map((cluster, idx) => (
                <li key={cluster.id}>
                  <button 
                    onClick={() => scrollToSection(cluster.id)}
                    className="text-left text-sm text-stone-500 hover:text-stone-900 hover:font-medium transition-all group flex items-start gap-2"
                  >
                    <span className="text-stone-300 group-hover:text-stone-900 transition-colors">0{idx + 1}</span>
                    <span className="line-clamp-2">{cluster.topic}</span>
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-stone-100">
              <div className="text-xs text-stone-400 font-medium uppercase tracking-wider mb-2">预估阅读时间</div>
              <div className="text-xl font-serif font-bold text-stone-800">12 分钟</div>
            </div>
          </div>
        </aside>

        {/* CENTER COLUMN: CONTENT */}
        <div className="lg:col-span-9 max-w-3xl">
          
          {/* SECTION 1: EXECUTIVE SUMMARY */}
          <div id="summary" className="scroll-mt-32 mb-16">
            <div className="relative border-y-2 border-stone-900 py-10 px-4 md:px-0">
              {/* Floating Label */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#fafaf9] px-4">
                 <div className="flex items-center gap-2 text-stone-900">
                   <Zap size={18} className="fill-stone-900" />
                   <span className="font-serif font-bold text-lg tracking-tight">本周信号</span>
                 </div>
              </div>

              <div className="max-w-none text-stone-800">
                {/* Headline Quote */}
                <div className="relative mb-8 text-center">
                   <p className="font-serif text-2xl md:text-3xl font-bold leading-snug text-stone-900">
                     "Anthropic 开启智能体元年，<br className="hidden md:block" />Midjourney 跨越光影恐怖谷。"
                   </p>
                </div>
                
                {/* Two-Column Text */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-base md:text-lg leading-relaxed text-stone-600 text-justify font-sans">
                  <div className="relative">
                     <span className="font-bold text-stone-900 block mb-2 text-xs uppercase tracking-widest text-left border-b border-stone-200 pb-1">Agentic Workflow</span>
                     <p>本周焦点是 Anthropic 激进推进的 <span className="font-medium text-stone-800">"Computer Use"</span> 能力。这标志着 AI 正从单纯的聊天伴侣，进化为能够实际操控桌面的数字员工。对于效能追求者来说，这是重新设计工作流的最佳时机。</p>
                  </div>
                  <div>
                     <span className="font-bold text-stone-900 block mb-2 text-xs uppercase tracking-widest text-left border-b border-stone-200 pb-1">Visual Intelligence</span>
                     <p>与此同时，Midjourney V7 的泄露图暗示其正转向更逼真的<span className="font-medium text-stone-800">物理光照引擎</span>。这不仅仅是画质的提升，更是数字内容创作（AIGC）进入电影级叙事的重要里程碑。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* MOBILE TOC (Visible only on Mobile) */}
          <div className="lg:hidden mb-12 border-y border-stone-200 py-6">
             <h3 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-4">本期目录</h3>
             <div className="space-y-3">
                {WEEKLY_CLUSTERS.map((cluster, idx) => (
                  <button 
                    key={cluster.id}
                    onClick={() => scrollToSection(cluster.id)}
                    className="flex w-full items-center justify-between text-left group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-stone-300 font-bold">0{idx + 1}</span>
                      <span className="font-serif text-stone-800 font-medium text-lg">{cluster.topic}</span>
                    </div>
                    <ArrowDown size={14} className="text-stone-300 -rotate-90 group-hover:rotate-0 transition-transform" />
                  </button>
                ))}
             </div>
          </div>

          {/* SECTION 2: TOPIC CLUSTERS */}
          <div className="space-y-20">
            {WEEKLY_CLUSTERS.map((cluster, index) => (
              <div key={cluster.id} id={cluster.id} className="group scroll-mt-24">
                {/* Cluster Header */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-mono text-4xl text-stone-200 font-bold">0{index + 1}</span>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-stone-900 group-hover:text-stone-600 transition-colors">
                    {cluster.topic}
                  </h3>
                  <div className="h-px bg-stone-200 flex-1 mt-2"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                  
                  {/* LEFT COL: OFFICIAL EVENT (Fact) */}
                  <div className="md:col-span-7">
                    <div className="bg-white border border-stone-200 rounded-2xl p-6 h-full hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="px-2 py-1 bg-stone-900 text-stone-50 text-[10px] font-bold uppercase tracking-wider rounded">
                          官方信源
                        </span>
                        <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">
                          {cluster.officialPost.source}
                        </span>
                        <span className="text-xs text-stone-400 ml-auto">{cluster.officialPost.date}</span>
                      </div>
                      
                      <h4 className="font-serif text-2xl font-bold text-stone-900 mb-4 leading-tight">
                        {cluster.officialPost.title}
                      </h4>
                      
                      <p className="text-stone-600 leading-relaxed text-lg mb-6 border-l-2 border-stone-100 pl-4">
                        {cluster.officialPost.summary}
                      </p>
                      
                      <button className="flex items-center text-sm font-bold text-stone-800 hover:text-stone-500 transition-colors mt-auto">
                        阅读官方公告 <ArrowUpRight size={16} className="ml-1" />
                      </button>
                    </div>
                  </div>

                  {/* RIGHT COL: COMMUNITY LENS (Insight) */}
                  <div className="md:col-span-5 flex flex-col gap-4">
                     <div className="flex items-center gap-2 mb-1 pl-1">
                        <MessageCircle size={16} className="text-stone-400" />
                        <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">社区视角</span>
                     </div>
                     
                     {cluster.communityReactions.map((reaction, rIndex) => (
                       <div key={rIndex} className="bg-stone-50 rounded-xl p-5 border border-stone-100 hover:bg-white hover:border-stone-200 hover:shadow-sm transition-all relative">
                          {/* Quote Decorator */}
                          <span className="absolute top-4 right-4 text-6xl font-serif text-stone-200/50 leading-none pointer-events-none">”</span>
                          
                          <div className="flex items-start gap-3 mb-3">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${reaction.avatarColor}`}>
                              {reaction.author[0]}
                            </div>
                            <div>
                              <div className="text-xs font-bold text-stone-800">{reaction.author}</div>
                              <div className="text-[10px] text-stone-400 uppercase">{reaction.source}</div>
                            </div>
                          </div>
                          
                          <h5 className="font-bold text-stone-800 text-sm mb-2 leading-snug">
                            {reaction.title}
                          </h5>
                          <p className="text-xs text-stone-500 leading-relaxed line-clamp-3">
                            {reaction.snippet}
                          </p>
                       </div>
                     ))}
                  </div>

                </div>
              </div>
            ))}
          </div>
          
        </div>

      </div>

      {/* Footer / Coming Next */}
      <div className="mt-24 border-t border-stone-200 pt-12 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="text-center md:text-left">
             <div className="font-serif font-bold text-xl text-stone-900 mb-2">订阅 ZenFlow 日报</div>
             <p className="text-stone-500 text-sm">每天清晨，我们将信号去噪后发送到您的邮箱。</p>
           </div>
           <div className="flex w-full md:w-auto max-w-sm gap-2">
              <input 
                type="email" 
                placeholder="输入您的邮箱" 
                className="bg-white border border-stone-200 px-4 py-2 rounded-lg text-sm flex-1 focus:outline-none focus:ring-1 focus:ring-stone-400"
              />
              <button className="bg-stone-900 text-white px-6 py-2 rounded-lg text-sm font-bold hover:bg-stone-700 transition-colors">
                订阅
              </button>
           </div>
        </div>
      </div>

    </div>
  );
};