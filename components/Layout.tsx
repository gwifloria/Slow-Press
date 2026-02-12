import React, { useState } from 'react';
import { 
  Radar,       
  Briefcase,   
  Library as LibraryIcon, 
  Newspaper,    
  LogOut, 
  Menu,
  Sparkles,
  Loader2,
  Coffee,
  Smartphone
} from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { CrawlerJob } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  activeJob: CrawlerJob; 
}

export const Layout: React.FC<LayoutProps> = ({ children, activeJob }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  const navItems = [
    { 
      label: '每周简报', 
      subLabel: 'Briefing',
      icon: Newspaper, 
      path: '/newspaper',
      desc: '科技趋势与人文动态'
    },
    { 
      label: '效能工坊', 
      subLabel: 'Workbench',
      icon: Briefcase, 
      path: '/feed',
      desc: 'SOP、工具与提效模版'
    },
    { 
      label: '精神陈列', 
      subLabel: 'Library',
      icon: LibraryIcon, 
      path: '/library',
      desc: '书籍、影音与深度访谈'
    },
    { 
      label: '全网雷达', 
      subLabel: 'Radar',
      icon: Radar, 
      path: '/signals',
      desc: '原始信号源监控'
    },
  ];

  const isJobRunning = activeJob.status === 'running';

  return (
    // APP SHELL LAYOUT: h-screen + overflow-hidden prevents body scroll.
    // Sidebar and Main Content handle their own scrolling.
    <div className="h-screen flex bg-stone-50 font-sans text-stone-800 overflow-hidden">
      
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-stone-900/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-stone-200 transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 flex flex-col
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Header - Fixed at top */}
        <div className="p-8 pb-6 flex-shrink-0">
            <div className="flex items-center gap-3 text-stone-900 mb-1">
              <div className="w-8 h-8 bg-stone-900 rounded-lg flex items-center justify-center text-white shadow-sm">
                <Sparkles size={16} />
              </div>
              <span className="text-xl font-serif font-bold tracking-tight">ZenFlow</span>
            </div>
            <p className="text-[10px] text-stone-400 font-medium pl-11 uppercase tracking-wider">
              Life & Intelligence OS
            </p>
        </div>

        {/* Navigation - Takes available space and scrolls if needed */}
        <nav className="flex-1 px-4 space-y-2 overflow-y-auto scrollbar-thin scrollbar-thumb-stone-100">
            <div className="px-4 pb-2 pt-1">
              <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Modules</span>
            </div>
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsSidebarOpen(false)}
                  className={`
                    group flex items-start gap-3 px-4 py-3 rounded-xl transition-all duration-200 border border-transparent
                    ${isActive 
                      ? 'bg-stone-50 border-stone-200 shadow-sm' 
                      : 'hover:bg-stone-50 hover:border-stone-100'}
                  `}
                >
                  <item.icon size={20} className={`mt-0.5 ${isActive ? 'text-stone-900' : 'text-stone-400 group-hover:text-stone-600'}`} />
                  <div>
                    <div className={`font-bold text-sm ${isActive ? 'text-stone-900' : 'text-stone-600'}`}>
                      {item.label}
                    </div>
                    <div className={`text-[10px] ${isActive ? 'text-stone-500' : 'text-stone-400'} font-medium`}>
                      {item.desc}
                    </div>
                  </div>
                </Link>
              );
            })}
        </nav>

        {/* Footer Area - Pinned at bottom */}
        <div className="flex-shrink-0 bg-white z-10">
            {/* Active Job Indicator */}
            {activeJob.status !== 'idle' && (
                <div className="px-4 pb-2 pt-2">
                    <div className="bg-stone-900 text-stone-50 rounded-xl p-4 shadow-lg cursor-pointer hover:bg-stone-800 transition-colors group"
                        onClick={() => navigate('/signals')}>
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-[10px] font-bold uppercase tracking-wider opacity-70 flex items-center gap-1">
                                <Radar size={12} className={isJobRunning ? "animate-pulse" : ""} />
                                Radar System
                            </span>
                            {isJobRunning && <Loader2 size={12} className="animate-spin" />}
                        </div>
                        <div className="text-xs font-medium mb-2 truncate text-stone-300 group-hover:text-white transition-colors">
                            Scanning: {activeJob.target === 'ALL' ? 'Global Network' : activeJob.target}
                        </div>
                        <div className="w-full bg-stone-700 rounded-full h-1 overflow-hidden">
                            <div 
                                className={`h-full rounded-full transition-all duration-500 ${activeJob.status === 'failed' ? 'bg-rose-500' : 'bg-emerald-400'}`}
                                style={{ width: `${activeJob.progress}%` }} 
                            />
                        </div>
                    </div>
                </div>
            )}

            <div className="p-4 border-t border-stone-100 space-y-2">
                <Link to="/mobile" onClick={() => setIsSidebarOpen(false)}>
                    <div className="flex items-center gap-3 px-4 py-3 bg-stone-900 text-stone-50 rounded-xl shadow-lg hover:bg-stone-800 transition-all group">
                    <Smartphone size={18} className="text-stone-400 group-hover:text-white transition-colors" />
                    <div>
                        <div className="text-xs font-bold">Download App</div>
                        <div className="text-[10px] text-stone-400">iOS & Android</div>
                    </div>
                    </div>
                </Link>

                <div className="flex items-center gap-3 px-4 py-3 bg-stone-50/50 rounded-xl border border-stone-100">
                    <Coffee size={18} className="text-stone-400" />
                    <div>
                    <div className="text-xs font-bold text-stone-600">Daily Wisdom</div>
                    <div className="text-[10px] text-stone-400 italic">"Focus on the signal."</div>
                    </div>
                </div>
                
                <button 
                onClick={handleLogout}
                className="flex items-center gap-3 px-4 py-3 w-full text-stone-500 hover:text-stone-900 hover:bg-stone-50 rounded-xl transition-colors"
                >
                <LogOut size={18} />
                <span className="text-sm font-medium">退出登录</span>
                </button>
            </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        {/* Mobile Header - Fixed at top on small screens */}
        <header className="lg:hidden h-16 bg-white border-b border-stone-200 flex items-center px-4 justify-between flex-shrink-0 z-30">
          <div className="flex items-center gap-2">
            <Sparkles size={18} className="text-stone-900" />
            <span className="font-serif font-bold text-lg">ZenFlow</span>
          </div>
          <button onClick={() => setIsSidebarOpen(true)} className="p-2 text-stone-600">
            <Menu size={24} />
          </button>
        </header>

        {/* Content Scroll Container */}
        <div className="flex-1 overflow-y-auto scroll-smooth">
          <div className="p-4 md:p-8 max-w-6xl mx-auto pb-24">
             {children}
          </div>
        </div>
      </main>
    </div>
  );
};