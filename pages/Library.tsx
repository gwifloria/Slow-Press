import React, { useState } from 'react';
import { 
  Book, 
  Headphones, 
  FileText, 
  Film, 
  Clock, 
  Star, 
  Bookmark, 
  PlayCircle, 
  Filter, 
  Library as LibraryIcon,
  Mic2,
  Quote,
  ArrowUpRight,
  MoreHorizontal
} from 'lucide-react';
import { Button } from '../components/ui/Button';

type MediaType = 'PAPER' | 'PODCAST' | 'BOOK' | 'MOVIE' | 'INTERVIEW';

// Using "Depth" instead of "Difficulty" to suit general culture content
type DepthLevel = 'LIGHT' | 'DEEP' | 'PROFOUND';

interface MediaItem {
  id: string;
  type: MediaType;
  depth: DepthLevel;
  title: string;
  creator: string;
  date: string;
  duration: string; 
  tags: string[];
  summary: string;
  quote?: string; // Memorable quote
  coverColor: string; 
}

const CURATED_CONTENT: MediaItem[] = [
  {
    id: '1',
    type: 'BOOK',
    depth: 'PROFOUND',
    title: 'Deep Work',
    creator: 'Cal Newport',
    date: 'Classic',
    duration: '8h Read',
    tags: ['Productivity', 'Focus'],
    summary: '在这个充满干扰的世界里，深度工作的能力日益稀缺。这本书不仅仅是关于效率，更是关于如何过一种有意义的智力生活。',
    quote: 'Who you are, what you think, feel, and do, what you love—is the sum of what you focus on.',
    coverColor: 'bg-amber-600'
  },
  {
    id: '2',
    type: 'MOVIE',
    depth: 'DEEP',
    title: 'Her',
    creator: 'Spike Jonze',
    date: 'Rewatch',
    duration: '2h 6m',
    tags: ['AI', 'Romance'],
    summary: '随着 AI 伴侣越来越普及，重温这部电影有了新的意义。它探讨的不是技术的恐怖，而是人类情感的脆弱。',
    quote: 'The heart is not like a box that gets filled up; it expands in size the more you love.',
    coverColor: 'bg-rose-700'
  },
  {
    id: '3',
    type: 'PAPER',
    depth: 'DEEP',
    title: 'DeepSeek-V3 Report',
    creator: 'DeepSeek AI',
    date: 'Dec 2024',
    duration: '45 min',
    tags: ['Tech', 'LLM'],
    summary: '详细披露了 V3 模型的混合专家架构(MoE)。对于想要理解当前 AI 算力效率边界的人来说，这是必读的技术文献。',
    coverColor: 'bg-blue-600'
  },
  {
    id: '4',
    type: 'INTERVIEW',
    depth: 'LIGHT',
    title: 'Sam Altman: Future of AI',
    creator: 'Lex Fridman',
    date: '2 Days Ago',
    duration: '2h 15m',
    tags: ['Future', 'Chat'],
    summary: 'Lex 与 Sam 的最新对话，没有太多技术细节，更多是关于 AI 安全、人类未来以及 OpenAI 内部文化的坦诚交流。',
    quote: 'We are building tools that amplify human intent.',
    coverColor: 'bg-stone-800'
  },
  {
    id: '5',
    type: 'MOVIE',
    depth: 'PROFOUND',
    title: 'Oppenheimer',
    creator: 'Christopher Nolan',
    date: '2023',
    duration: '3h',
    tags: ['History', 'Physics'],
    summary: '关于科技力量与人类道德困境的终极寓言。当我们掌握了毁灭世界的力量时，我们要如何自处？',
    quote: 'Now I am become Death, the destroyer of worlds.',
    coverColor: 'bg-orange-800'
  },
  {
    id: '6',
    type: 'BOOK',
    depth: 'DEEP',
    title: 'The Beginning of Infinity',
    creator: 'David Deutsch',
    date: 'Classic',
    duration: '12h Read',
    tags: ['Philosophy', 'Science'],
    summary: '解释了为什么解释本身是宇宙中最重要的东西。知识的增长是无限的，只要不违反物理定律，一切皆有可能。',
    quote: 'Problems are inevitable. Problems are soluble.',
    coverColor: 'bg-emerald-700'
  }
];

export const Library: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<MediaType | 'ALL'>('ALL');

  const getDepthBadge = (depth: DepthLevel) => {
    switch (depth) {
      case 'LIGHT': return <span className="w-2 h-2 rounded-full bg-emerald-400 ring-2 ring-emerald-100" title="Light Depth"></span>;
      case 'DEEP': return <span className="w-2 h-2 rounded-full bg-blue-500 ring-2 ring-blue-100" title="Deep Dive"></span>;
      case 'PROFOUND': return <span className="w-2 h-2 rounded-full bg-purple-500 ring-2 ring-purple-100" title="Profound Wisdom"></span>;
    }
  };

  const getIcon = (type: MediaType) => {
    switch (type) {
      case 'PAPER': return <FileText size={16} />;
      case 'PODCAST': return <Headphones size={16} />;
      case 'BOOK': return <Book size={16} />;
      case 'MOVIE': return <Film size={16} />;
      case 'INTERVIEW': return <Mic2 size={16} />;
    }
  };

  const getTypeLabel = (type: MediaType) => {
    switch (type) {
      case 'PAPER': return 'Paper';
      case 'PODCAST': return 'Podcast';
      case 'BOOK': return 'Book';
      case 'MOVIE': return 'Movie';
      case 'INTERVIEW': return 'Interview';
    }
  };

  const filteredItems = activeFilter === 'ALL' 
    ? CURATED_CONTENT 
    : CURATED_CONTENT.filter(item => item.type === activeFilter);

  return (
    <div className="animate-in fade-in duration-700 pb-20 max-w-7xl mx-auto px-4 md:px-8">
      
      {/* Compact Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6 border-b border-stone-200 pb-4">
        <div>
          <h1 className="text-3xl font-serif font-bold text-stone-900 flex items-center gap-3">
            <LibraryIcon size={28} className="text-stone-800" />
            精神陈列室
          </h1>
          <p className="text-stone-500 text-sm mt-1">
            收藏那些经得起时间考验的深度内容。
          </p>
        </div>
        
        {/* Minimalist Filter */}
        <div className="flex gap-1 overflow-x-auto no-scrollbar">
           {['ALL', 'BOOK', 'MOVIE', 'INTERVIEW', 'PAPER'].map((f) => (
             <button
               key={f}
               onClick={() => setActiveFilter(f as any)}
               className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap border ${
                 activeFilter === f 
                  ? 'bg-stone-800 text-white border-stone-800' 
                  : 'bg-white text-stone-500 border-stone-200 hover:border-stone-400'
               }`}
             >
               {f === 'ALL' ? 'All' : getTypeLabel(f as any)}
             </button>
           ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Main Gallery Grid */}
        <div className="lg:col-span-9">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredItems.map((item) => (
              <div key={item.id} className="group bg-white rounded-xl border border-stone-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col h-full relative">
                 
                 {/* Visual Cover Area (Compact) */}
                 <div className={`h-32 ${item.coverColor} relative p-4 flex flex-col justify-between text-white/90 overflow-hidden`}>
                    {/* Hover Quote Overlay */}
                    {item.quote && (
                      <div className="absolute inset-0 bg-stone-900/95 p-4 flex items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                         <p className="font-serif italic text-stone-200 text-xs leading-relaxed">
                           "{item.quote}"
                         </p>
                      </div>
                    )}

                    <div className="flex justify-between items-start z-0">
                       <div className="bg-black/20 backdrop-blur-sm p-1.5 rounded-lg">
                          {getIcon(item.type)}
                       </div>
                       {getDepthBadge(item.depth)}
                    </div>
                    <div className="z-0">
                       <span className="text-[10px] font-bold uppercase tracking-widest opacity-75">
                         {getTypeLabel(item.type)}
                       </span>
                    </div>
                 </div>

                 {/* Content Body */}
                 <div className="p-4 flex-1 flex flex-col">
                   <div className="mb-auto">
                     <h3 className="font-serif font-bold text-stone-900 text-lg leading-tight mb-1 group-hover:text-stone-600 transition-colors line-clamp-1">
                       {item.title}
                     </h3>
                     <div className="text-xs font-medium text-stone-500 mb-3 flex items-center gap-1">
                       <span>{item.creator}</span>
                       <span className="text-stone-300">•</span>
                       <span>{item.duration}</span>
                     </div>
                     <p className="text-stone-500 text-xs leading-relaxed line-clamp-3 mb-4">
                       {item.summary}
                     </p>
                   </div>

                   <div className="pt-3 border-t border-stone-100 flex items-center justify-between mt-2">
                      <div className="flex gap-1 flex-wrap">
                        {item.tags.slice(0, 2).map(tag => (
                          <span key={tag} className="text-[10px] bg-stone-50 text-stone-400 px-1.5 py-0.5 rounded border border-stone-100">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <button className="text-stone-300 hover:text-stone-900 transition-colors">
                         <ArrowUpRight size={16} />
                      </button>
                   </div>
                 </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sticky Sidebar */}
        <div className="lg:col-span-3 space-y-6">
           {/* Sticky container */}
           <div className="sticky top-6 space-y-6">
             
             {/* Curator Note Card */}
             <div className="bg-[#1c1917] text-[#fafaf9] rounded-xl p-5 shadow-lg relative overflow-hidden">
                <Quote size={40} className="absolute -top-2 -right-2 text-stone-700 opacity-20" />
                <h4 className="font-bold text-xs uppercase tracking-widest mb-3 text-stone-400">Curator's Note</h4>
                <p className="font-serif italic text-sm leading-relaxed mb-3 opacity-90">
                  "The goal is not to read everything, but to read the right things deeply."
                </p>
                <div className="w-8 h-1 bg-stone-700 rounded-full"></div>
             </div>

             {/* Mini Must Read List */}
             <div className="border border-stone-200 rounded-xl p-5 bg-white">
                <div className="flex items-center justify-between mb-4">
                   <h4 className="font-bold text-stone-800 text-xs uppercase tracking-wide">Hall of Fame</h4>
                   <Star size={14} className="text-stone-400" />
                </div>
                <ul className="space-y-3">
                   <li className="group cursor-pointer">
                      <div className="text-xs font-medium text-stone-900 group-hover:underline">Naval's Almanac</div>
                      <div className="text-[10px] text-stone-400">Eric Jorgenson</div>
                   </li>
                   <li className="group cursor-pointer">
                      <div className="text-xs font-medium text-stone-900 group-hover:underline">Infinite Jest</div>
                      <div className="text-[10px] text-stone-400">David Foster Wallace</div>
                   </li>
                   <li className="group cursor-pointer">
                      <div className="text-xs font-medium text-stone-900 group-hover:underline">Sapiens</div>
                      <div className="text-[10px] text-stone-400">Yuval Noah Harari</div>
                   </li>
                </ul>
             </div>

             <div className="bg-stone-100 rounded-xl p-4 text-center border border-stone-200 border-dashed">
                <p className="text-xs text-stone-500 mb-2">Have a recommendation?</p>
                <button className="text-xs font-bold text-stone-800 bg-white px-3 py-1.5 rounded shadow-sm border border-stone-200 hover:bg-stone-50 transition-colors">
                  Submit Entry
                </button>
             </div>

           </div>
        </div>

      </div>
    </div>
  );
};