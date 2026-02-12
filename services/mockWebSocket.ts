import { useState, useCallback, useRef, useEffect } from 'react';
import { CrawlerJob, LogLevel, SystemLog, SourceType } from '../types';

// This hook simulates a WebSocket connection that pushes progress updates
// and logs from a backend crawler.

export const useMockCrawlerSocket = () => {
  const [job, setJob] = useState<CrawlerJob>({
    id: 'job-init',
    status: 'idle',
    progress: 0,
    target: 'ALL',
    logs: [],
    totalItemsFound: 0,
  });

  const intervalRef = useRef<number | null>(null);

  const addLog = (level: LogLevel, message: string, module: string) => {
    const newLog: SystemLog = {
      id: Math.random().toString(36).substr(2, 9),
      timestamp: new Date().toLocaleTimeString(),
      level,
      message,
      module
    };
    setJob(prev => ({ ...prev, logs: [...prev.logs, newLog] }));
  };

  const startCrawl = useCallback((target: SourceType | 'ALL') => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    setJob({
      id: Math.random().toString(36).substr(2, 9),
      status: 'running',
      progress: 0,
      target,
      logs: [],
      totalItemsFound: 0,
    });

    addLog(LogLevel.INFO, `Connecting to ${target} crawler nodes...`, 'System');
    
    let progress = 0;
    let steps = 0;

    intervalRef.current = window.setInterval(() => {
      steps++;
      
      // Simulate randomness
      const rand = Math.random();
      
      if (rand > 0.95) {
         addLog(LogLevel.WARN, 'Rate limit detected, pausing for 2s...', 'Network');
      } else if (rand > 0.98) {
         addLog(LogLevel.ERROR, 'Proxy node timeout (192.168.x.x)', 'Network');
      } else if (rand > 0.7) {
         addLog(LogLevel.INFO, `Parsed item #${Math.floor(Math.random() * 1000)} successfully`, 'Parser');
         setJob(prev => ({ ...prev, totalItemsFound: prev.totalItemsFound + 1 }));
      }

      progress += Math.random() * 5;
      
      if (progress >= 100) {
        progress = 100;
        if (intervalRef.current) clearInterval(intervalRef.current);
        setJob(prev => ({ ...prev, status: 'completed', progress: 100 }));
        addLog(LogLevel.SUCCESS, 'Crawling session finished successfully.', 'System');
      } else {
        setJob(prev => ({ ...prev, progress: Math.min(progress, 99) }));
      }
    }, 800);
  }, []);

  const stopCrawl = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setJob(prev => ({ ...prev, status: 'idle' }));
    addLog(LogLevel.WARN, 'Process terminated by user.', 'System');
  }, []);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return { job, startCrawl, stopCrawl };
};
