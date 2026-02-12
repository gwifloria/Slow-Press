import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { Post, SourceType } from '../types';
import { 
  MessageSquare, 
  Heart, 
  Flame, 
  Search,
  Bookmark,
  Code2,       // Icon for Tutorials/Code
  LayoutTemplate,     // Icon for Templates
  Wand2,       // Icon for Prompts
  Download,    // Icon for Resources
  Copy,
  Briefcase
} from 'lucide-react';

// Enhanced Mock Data focusing on UTILITY and "How-To" rather than just News
const MOCK_RESOURCES: (Post & { impactScore: number, category: 'TUTORIAL' | 'TEMPLATE' | 'PROMPT' | 'TOOL', assetType?: string })[] = [
  {
    id: '1',
    title: 'DeepSeek 满血版提示词模板：让它扮演资深架构师',
    content: '经过反复测试，这套 System Prompt 可以让 DeepSeek V3 在输出代码时严格遵守 Clean Architecture 规范...',
    author: 'PromptWizard',
    source: SourceType.XIAOHONGSHU,
    date: '5m ago',
    tags: ['DeepSeek', 'Prompt', 'Coding'],
    likes: 8420,
    impactScore: 99,
    category: 'PROMPT',
    assetType: 'Copyable Text'
  },
  {
    id: '2',
    title: 'Notion Life OS: 2026 Ultimate Template',
    content: 'A complete dashboard for managing projects, habits, and finances. Based on the PARA method.',
    author: 'Productivity_Guru',
    source: SourceType.XIAOHONGSHU, 
    date: '24m ago',
    tags: ['Notion', 'Productivity', 'PARA'],
    likes: 2100,
    impactScore: 88,
    category: 'TEMPLATE',
    assetType: 'Notion Link'
  },
  {
    id: '3',
    title: 'Automating Weekly Reports with Python & Claude',
    content: 'Stop writing reports manually. This script pulls data from CSV and uses Claude to write the summary.',
    author: 'DevOps_Guy',
    source: SourceType.XIAOHONGSHU,
    date: '2h ago',
    tags: ['Automation', 'Python', 'Efficiency'],
    likes: 340,
    impactScore: 65,
    category: 'TUTORIAL',
    assetType: 'Github Gist'
  },
  {
    id: '4',
    title: 'Midjourney V7 Lighting Preset Pack',
    content: '15 presets for cinematic lighting. Just append these parameters to your prompt.',
    author: 'Visual_Nomad',
    source: SourceType.DOUYIN,
    date: '1h ago',
    tags: ['Midjourney', 'Art', 'Design'],
    likes: 5600,
    impactScore: 92,
    category: 'TOOL',
    assetType: 'Config File'
  }
];

const TRENDING_ASSETS = [
  { name: 'DeepSeek Coder V2 Prompt', type: 'Prompt', downloads: '12k' },
  { name: 'PARA Method Notion Template', type: 'Template', downloads: '9.5k' },
  { name: 'Obsidian Zettelkasten Setup', type: 'Config', downloads: '5k' },
  { name: 'Video to Sound FX Workflow', type: 'Workflow', downloads: '3.2k' },
];

type FilterType = 'ALL' | 'TUTORIAL' | 'PROMPT' | 'TEMPLATE';

export const Dashboard: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('ALL');

  const filteredPosts = activeFilter === 'ALL' 
    ? MOCK_RESOURCES 
    : MOCK_RESOURCES.filter(p => p.category === activeFilter);

  return (
    <div className="animate-in fade-in duration-500 pb-20">
      
      {/* Header section focusing on "Efficiency" */}
      <div className="mb-10 flex items-end justify-between border-b-2 border-stone-900 pb-6">
        <div>
           <div className="flex items-center gap-2 text-stone-500 mb-2">
             <Briefcase size={20} />
             <span className="text-xs font-bold uppercase tracking-widest">Workbench</span>
           </div>
           <h1 className="text-4xl font-serif font-bold text-stone-900 mb-2">效能工坊</h1>
           <p className="text-stone-500 max-w-xl text-lg">
             工具是为了给人省时间的。这里汇集 Prompt、模版、自动化脚本与高效工作流。
           </p>
        </div>
        <div className="hidden md:block">
           <Button className="bg-stone-900 text-white rounded-lg px-6">
              <Download size={16} className="mr-2" /> 贡献资源
           </Button>
        </div>
      </div>

      {/* Modern Filter Bar */}
      <div className="sticky top-0 z-20 bg-[#fafaf9]/95 backdrop-blur-md border-b border-stone-200 py-3 mb-6 -mx-4 px-4 md:-mx-8 md:px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1 md:pb-0">
             <button 
               onClick={() => setActiveFilter('ALL')}
               className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeFilter === 'ALL' ? 'bg-stone-900 text-white shadow-md' : 'bg-white border border-stone-200 text-stone-600 hover:bg-stone-50'}`}
             >
               全部资源
             </button>
             <button 
               onClick={() => setActiveFilter('PROMPT')}
               className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${activeFilter === 'PROMPT' ? 'bg-purple-600 text-white shadow-md' : 'bg-white border border-stone-200 text-stone-600 hover:bg-stone-50'}`}
             >
               <Wand2 size={14} /> 提示词
             </button>
             <button 
               onClick={() => setActiveFilter('TUTORIAL')}
               className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${activeFilter === 'TUTORIAL' ? 'bg-blue-600 text-white shadow-md' : 'bg-white border border-stone-200 text-stone-600 hover:bg-stone-50'}`}
             >
               <Code2 size={14} /> 教程/脚本
             </button>
             <button 
               onClick={() => setActiveFilter('TEMPLATE')}
               className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${activeFilter === 'TEMPLATE' ? 'bg-orange-600 text-white shadow-md' : 'bg-white border border-stone-200 text-stone-600 hover:bg-stone-50'}`}
             >
               <LayoutTemplate size={14} /> 模版/SOP
             </button>
          </div>
          
          <div className="hidden md:flex items-center bg-white border border-stone-200 rounded-xl px-3 py-2 w-64 shadow-sm focus-within:ring-2 focus-within:ring-stone-200">
            <Search size={14} className="text-stone-400 mr-2" />
            <input 
              type="text" 
              placeholder="搜索工作流..." 
              className="bg-transparent text-sm text-stone-800 placeholder:text-stone-400 focus:outline-none w-full"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
        
        {/* LEFT COLUMN: THE FEED (8 Cols) */}
        <div className="lg:col-span-8 space-y-6">
          {filteredPosts.map((post) => (
            <div 
              key={post.id} 
              className="group bg-white rounded-2xl p-0 border border-stone-200 shadow-sm hover:shadow-lg transition-all cursor-pointer overflow-hidden flex flex-col"
            >
              {/* Card Header with Category & Meta */}
              <div className="px-6 pt-6 pb-2 flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold
                    ${post.source === SourceType.XIAOHONGSHU ? 'bg-rose-50 text-rose-600' : 'bg-stone-100 text-stone-600'}
                  `}>
                    {post.author[0]}
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 text-lg leading-tight group-hover:text-stone-600 transition-colors">
                      {post.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-stone-400 mt-1">
                      <span className="font-medium text-stone-600">{post.author}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                      <span>•</span>
                      <span className="uppercase tracking-wider font-bold">{post.source}</span>
                    </div>
                  </div>
                </div>
                
                {/* Category Icon */}
                <div className={`p-2 rounded-lg 
                  ${post.category === 'PROMPT' ? 'bg-purple-50 text-purple-600' : ''}
                  ${post.category === 'TUTORIAL' ? 'bg-blue-50 text-blue-600' : ''}
                  ${post.category === 'TEMPLATE' ? 'bg-orange-50 text-orange-600' : ''}
                  ${post.category === 'TOOL' ? 'bg-emerald-50 text-emerald-600' : ''}
                `}>
                  {post.category === 'PROMPT' && <Wand2 size={20} />}
                  {post.category === 'TUTORIAL' && <Code2 size={20} />}
                  {post.category === 'TEMPLATE' && <LayoutTemplate size={20} />}
                  {post.category === 'TOOL' && <Download size={20} />}
                </div>
              </div>

              {/* Card Body */}
              <div className="px-6 py-2">
                <p className="text-stone-600 text-sm leading-relaxed">
                  {post.content}
                </p>
                
                {/* Visual Asset / Action Area */}
                <div className="mt-4 bg-stone-50 rounded-xl border border-stone-100 p-3 flex items-center justify-between group/asset hover:bg-stone-100 transition-colors">
                   <div className="flex items-center gap-3">
                      <div className="p-2 bg-white rounded-lg border border-stone-200 shadow-sm">
                        {post.category === 'PROMPT' ? <Copy size={16} className="text-stone-500" /> : <Download size={16} className="text-stone-500" />}
                      </div>
                      <span className="text-xs font-mono font-medium text-stone-600">
                        {post.assetType || 'View Content'}
                      </span>
                   </div>
                   <Button size="sm" variant="secondary" className="opacity-0 group-hover/asset:opacity-100 transition-opacity">
                      Get It
                   </Button>
                </div>

                <div className="flex gap-2 mt-4 flex-wrap">
                   {post.tags.map(tag => (
                     <span key={tag} className="text-[10px] bg-white border border-stone-200 px-2 py-1 rounded-md text-stone-500 font-medium hover:border-stone-400 transition-colors">
                       #{tag}
                     </span>
                   ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-4 border-t border-stone-100 px-6 py-3 bg-stone-50/50 flex items-center justify-between">
                 <div className="flex gap-6">
                    <button className="flex items-center gap-1.5 text-stone-400 hover:text-rose-500 transition-colors text-xs font-bold">
                      <Heart size={16} className={post.likes && post.likes > 2000 ? "fill-rose-500 text-rose-500" : ""} /> 
                      {post.likes}
                    </button>
                    <button className="flex items-center gap-1.5 text-stone-400 hover:text-blue-500 transition-colors text-xs font-bold">
                      <MessageSquare size={16} /> 
                      Discuss
                    </button>
                 </div>
                 <button className="text-stone-400 hover:text-stone-900 transition-colors">
                    <Bookmark size={18} />
                 </button>
              </div>
            </div>
          ))}
          
          <div className="py-8 text-center">
            <Button variant="ghost" className="text-stone-400">加载更多资源...</Button>
          </div>
        </div>

        {/* RIGHT COLUMN: UTILITY SIDEBAR (4 Cols) */}
        <div className="hidden lg:block lg:col-span-4 space-y-6">
          
          {/* Trending Assets */}
          <div className="bg-stone-900 text-stone-50 rounded-2xl p-6 shadow-xl sticky top-24">
            <div className="flex items-center gap-2 mb-6 border-b border-stone-700 pb-4">
               <Flame size={18} className="text-orange-400 fill-current" />
               <h2 className="font-bold text-lg">Hot Assets</h2>
            </div>
            
            <div className="space-y-4">
              {TRENDING_ASSETS.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between group cursor-pointer hover:bg-stone-800 p-2 -mx-2 rounded-lg transition-colors">
                   <div>
                     <div className="font-medium text-sm text-stone-200">{item.name}</div>
                     <div className="text-[10px] text-stone-500 uppercase tracking-wider font-bold mt-0.5">{item.type}</div>
                   </div>
                   <div className="flex items-center text-xs font-bold text-stone-400 bg-stone-800 px-2 py-1 rounded group-hover:bg-stone-700 group-hover:text-white">
                      <Download size={10} className="mr-1" /> {item.downloads}
                   </div>
                </div>
              ))}
            </div>

            <button className="w-full mt-6 py-3 border border-stone-700 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-stone-800 transition-colors text-stone-400 hover:text-white">
              View Leaderboard
            </button>
          </div>
          
          {/* Quick Upload CTA */}
          <div className="bg-gradient-to-br from-rose-100 to-orange-100 rounded-2xl p-6 border border-rose-200 text-center">
             <h3 className="font-serif font-bold text-rose-900 text-lg mb-2">Share your workflow</h3>
             <p className="text-rose-700/80 text-sm mb-4">Got a template that saves time? Share it with the community.</p>
             <Button className="w-full bg-rose-900 hover:bg-rose-800 text-white shadow-none border-0">
               Contribute
             </Button>
          </div>

        </div>

      </div>
    </div>
  );
};