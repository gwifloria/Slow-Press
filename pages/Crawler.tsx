import React, { useEffect, useRef, useState } from 'react';
import { Card, CardHeader, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { CrawlerJob, LogLevel, SourceType } from '../types';
import { Play, Square, Terminal as TerminalIcon, Radio, QrCode, Smartphone, X, Loader2 } from 'lucide-react';

interface CrawlerProps {
  job: CrawlerJob;
  onStart: (target: SourceType | 'ALL') => void;
  onStop: () => void;
}

export const Crawler: React.FC<CrawlerProps> = ({ job, onStart, onStop }) => {
  const logContainerRef = useRef<HTMLDivElement>(null);
  const [selectedTarget, setSelectedTarget] = useState<SourceType | 'ALL'>(SourceType.XIAOHONGSHU);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isLoginProcessing, setIsLoginProcessing] = useState(false);

  // Auto-scroll logs
  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [job.logs]);

  const handleStartRequest = () => {
    if (selectedTarget === SourceType.XIAOHONGSHU || selectedTarget === 'ALL') {
      setShowLoginModal(true);
    } else {
      onStart(selectedTarget);
    }
  };

  const handleSimulateScan = () => {
    setIsLoginProcessing(true);
    // Simulate scan delay
    setTimeout(() => {
      setIsLoginProcessing(false);
      setShowLoginModal(false);
      onStart(selectedTarget);
    }, 2000);
  };

  const getLogColor = (level: LogLevel) => {
    switch (level) {
      case LogLevel.INFO: return 'text-stone-400';
      case LogLevel.WARN: return 'text-amber-400';
      case LogLevel.ERROR: return 'text-rose-400';
      case LogLevel.SUCCESS: return 'text-emerald-400';
      default: return 'text-stone-500';
    }
  };

  return (
    <div className="relative space-y-6 animate-in slide-in-from-bottom-4 duration-500">
      
      {/* Login Modal Overlay */}
      {showLoginModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/40 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl shadow-xl max-w-sm w-full p-6 relative">
            <button 
              onClick={() => setShowLoginModal(false)}
              className="absolute top-4 right-4 text-stone-400 hover:text-stone-800"
            >
              <X size={20} />
            </button>
            
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-rose-50 text-rose-500 mb-2">
                <Smartphone size={24} />
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-900">Xiaohongshu Login</h3>
              <p className="text-sm text-stone-500 px-4">
                Please scan the code to authorize the crawler to access recent influencer posts.
              </p>
              
              <div className="flex justify-center py-4">
                <div className="w-48 h-48 bg-stone-100 rounded-xl border-2 border-stone-200 border-dashed flex items-center justify-center relative overflow-hidden group">
                  {isLoginProcessing ? (
                    <div className="flex flex-col items-center gap-2 text-rose-500">
                       <Loader2 size={32} className="animate-spin" />
                       <span className="text-xs font-medium">Verifying...</span>
                    </div>
                  ) : (
                    <>
                      <QrCode size={64} className="text-stone-300 group-hover:text-stone-400 transition-colors" />
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/20 pointer-events-none" />
                    </>
                  )}
                </div>
              </div>

              <div className="pt-2">
                <Button 
                  onClick={handleSimulateScan} 
                  disabled={isLoginProcessing}
                  className="w-full"
                >
                  {isLoginProcessing ? 'Connecting...' : 'Simulate Scan & Authorize'}
                </Button>
                <p className="text-xs text-stone-400 mt-3">
                  Secure connection via ZenFlow Proxy
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div>
        <h1 className="text-3xl font-serif font-bold text-stone-900">Signal Status</h1>
        <p className="text-stone-500 mt-1">Monitor connectivity with social media platforms and official feeds.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Controls Column */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <h2 className="font-bold text-stone-800 flex items-center gap-2">
                <Radio size={18} /> Connectivity Control
              </h2>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-stone-600">Signal Source</label>
                <div className="grid grid-cols-2 gap-2">
                  <button 
                    onClick={() => setSelectedTarget(SourceType.XIAOHONGSHU)}
                    className={`px-3 py-2 rounded-lg text-sm text-left flex items-center gap-2 transition-all ${selectedTarget === SourceType.XIAOHONGSHU ? 'bg-stone-800 text-white shadow-md ring-2 ring-stone-200' : 'bg-white border border-stone-200 hover:bg-stone-50'}`}
                  >
                    <span className={`w-2 h-2 rounded-full ${selectedTarget === SourceType.XIAOHONGSHU ? 'bg-rose-400' : 'bg-stone-300'}`}></span> Xiaohongshu
                  </button>
                  <button 
                    onClick={() => setSelectedTarget(SourceType.DOUYIN)}
                    className={`px-3 py-2 rounded-lg text-sm text-left flex items-center gap-2 transition-all ${selectedTarget === SourceType.DOUYIN ? 'bg-stone-800 text-white shadow-md ring-2 ring-stone-200' : 'bg-white border border-stone-200 hover:bg-stone-50'}`}
                  >
                    <span className={`w-2 h-2 rounded-full ${selectedTarget === SourceType.DOUYIN ? 'bg-slate-400' : 'bg-stone-300'}`}></span> Douyin
                  </button>
                  <button 
                     onClick={() => setSelectedTarget(SourceType.OPENAI)}
                     className={`px-3 py-2 rounded-lg text-sm text-left flex items-center gap-2 transition-all ${selectedTarget === SourceType.OPENAI ? 'bg-stone-800 text-white shadow-md ring-2 ring-stone-200' : 'bg-white border border-stone-200 hover:bg-stone-50'}`}
                  >
                    <span className={`w-2 h-2 rounded-full ${selectedTarget === SourceType.OPENAI ? 'bg-emerald-400' : 'bg-stone-300'}`}></span> Official Logs
                  </button>
                  <button 
                     onClick={() => setSelectedTarget('ALL')}
                     className={`px-3 py-2 rounded-lg text-sm text-left flex items-center gap-2 transition-all ${selectedTarget === 'ALL' ? 'bg-stone-800 text-white shadow-md ring-2 ring-stone-200' : 'bg-white border border-stone-200 hover:bg-stone-50'}`}
                  >
                    <span className={`w-2 h-2 rounded-full ${selectedTarget === 'ALL' ? 'bg-blue-400' : 'bg-stone-300'}`}></span> All Sources
                  </button>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-100">
                {job.status === 'running' ? (
                  <Button variant="danger" className="w-full" onClick={onStop}>
                    <Square size={16} className="mr-2 fill-current" /> Stop Receiver
                  </Button>
                ) : (
                  <Button className="w-full" onClick={handleStartRequest}>
                    <Play size={16} className="mr-2 fill-current" /> Init Sequence
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-stone-600">Status</span>
                <span className={`text-xs px-2 py-1 rounded-full uppercase font-bold tracking-wider
                  ${job.status === 'running' ? 'bg-blue-50 text-blue-600' : ''}
                  ${job.status === 'idle' ? 'bg-stone-100 text-stone-500' : ''}
                  ${job.status === 'completed' ? 'bg-emerald-50 text-emerald-600' : ''}
                `}>
                  {job.status}
                </span>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-xs text-stone-500">
                  <span>Sync Progress</span>
                  <span>{Math.round(job.progress)}%</span>
                </div>
                <div className="w-full h-2 bg-stone-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-stone-800 transition-all duration-300 ease-out"
                    style={{ width: `${job.progress}%` }}
                  />
                </div>
              </div>
              
              <div className="mt-6 grid grid-cols-2 gap-4">
                 <div className="bg-stone-50 p-3 rounded-xl text-center">
                    <div className="text-xl font-bold text-stone-800">{job.totalItemsFound}</div>
                    <div className="text-xs text-stone-500">Signals Captured</div>
                 </div>
                 <div className="bg-stone-50 p-3 rounded-xl text-center">
                    <div className="text-xl font-bold text-stone-800">
                      {job.logs.filter(l => l.level === LogLevel.ERROR).length}
                    </div>
                    <div className="text-xs text-stone-500">Lost Packets</div>
                 </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Terminal/Log Column */}
        <div className="lg:col-span-2 h-[500px]">
          <div className="h-full bg-[#1c1917] rounded-2xl overflow-hidden flex flex-col shadow-lg border border-stone-800">
            {/* Terminal Header */}
            <div className="bg-[#292524] px-4 py-2 flex items-center justify-between border-b border-stone-800">
              <div className="flex items-center gap-2">
                <TerminalIcon size={14} className="text-stone-400" />
                <span className="text-xs font-mono text-stone-400">crawlerd.service — zenflow-node-01</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-stone-600"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-stone-600"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-stone-600"></div>
                </div>
              </div>
            </div>

            {/* Terminal Body */}
            <div 
              ref={logContainerRef}
              className="flex-1 overflow-y-auto p-4 font-mono text-xs md:text-sm space-y-1.5 scrollbar-thin scrollbar-thumb-stone-700 scrollbar-track-transparent"
            >
              {job.logs.length === 0 && (
                <div className="h-full flex flex-col items-center justify-center text-stone-600 opacity-50">
                  <TerminalIcon size={48} className="mb-4" />
                  <p>Waiting for command...</p>
                </div>
              )}
              
              {job.logs.map((log) => (
                <div key={log.id} className="flex gap-3 hover:bg-white/5 p-0.5 rounded px-1">
                  <span className="text-stone-500 w-20 shrink-0 select-none">{log.timestamp}</span>
                  <span className={`font-bold w-16 shrink-0 ${getLogColor(log.level)}`}>
                    {log.level}
                  </span>
                  <span className="text-stone-500 w-20 shrink-0 hidden md:block">[{log.module}]</span>
                  <span className="text-stone-300 break-all">{log.message}</span>
                </div>
              ))}
              
              {job.status === 'running' && (
                <div className="animate-pulse text-stone-500 pt-2">_</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};