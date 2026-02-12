import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '../components/ui/Card';
import { CrawlerJob, LogLevel } from '../types';
import { Search, Filter, AlertCircle, CheckCircle2, Info } from 'lucide-react';

interface SystemLogsProps {
  job: CrawlerJob;
}

export const SystemLogs: React.FC<SystemLogsProps> = ({ job }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterLevel, setFilterLevel] = useState<LogLevel | 'ALL'>('ALL');

  const filteredLogs = job.logs.filter(log => {
    const matchesSearch = log.message.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          log.module.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = filterLevel === 'ALL' || log.level === filterLevel;
    return matchesSearch && matchesLevel;
  }).reverse(); // Show newest first

  const stats = {
    error: job.logs.filter(l => l.level === LogLevel.ERROR).length,
    warn: job.logs.filter(l => l.level === LogLevel.WARN).length,
    info: job.logs.filter(l => l.level === LogLevel.INFO).length,
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-serif font-bold text-stone-900">System Activity Logs</h1>
        <p className="text-stone-500 mt-1">Detailed execution records and diagnostics.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
           <CardContent className="p-4 flex items-center gap-4">
             <div className="p-3 bg-rose-50 text-rose-500 rounded-xl">
               <AlertCircle size={24} />
             </div>
             <div>
               <div className="text-2xl font-bold text-stone-800">{stats.error}</div>
               <div className="text-xs text-stone-500">Total Errors</div>
             </div>
           </CardContent>
        </Card>
        <Card>
           <CardContent className="p-4 flex items-center gap-4">
             <div className="p-3 bg-amber-50 text-amber-500 rounded-xl">
               <AlertCircle size={24} />
             </div>
             <div>
               <div className="text-2xl font-bold text-stone-800">{stats.warn}</div>
               <div className="text-xs text-stone-500">Warnings</div>
             </div>
           </CardContent>
        </Card>
        <Card>
           <CardContent className="p-4 flex items-center gap-4">
             <div className="p-3 bg-blue-50 text-blue-500 rounded-xl">
               <Info size={24} />
             </div>
             <div>
               <div className="text-2xl font-bold text-stone-800">{stats.info}</div>
               <div className="text-xs text-stone-500">Info Logs</div>
             </div>
           </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h2 className="font-bold text-stone-800">Log Entries</h2>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
                <input 
                  type="text" 
                  placeholder="Search logs..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-stone-50 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-stone-400/50 w-full sm:w-64"
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter size={16} className="text-stone-400" />
                <select 
                  value={filterLevel}
                  onChange={(e) => setFilterLevel(e.target.value as any)}
                  className="px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-stone-400/50"
                >
                  <option value="ALL">All Levels</option>
                  <option value={LogLevel.INFO}>Info</option>
                  <option value={LogLevel.WARN}>Warning</option>
                  <option value={LogLevel.ERROR}>Error</option>
                  <option value={LogLevel.SUCCESS}>Success</option>
                </select>
              </div>
            </div>
          </div>
        </CardHeader>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-stone-500 uppercase bg-stone-50 border-b border-stone-100">
              <tr>
                <th className="px-6 py-3 font-medium">Time</th>
                <th className="px-6 py-3 font-medium">Level</th>
                <th className="px-6 py-3 font-medium">Module</th>
                <th className="px-6 py-3 font-medium">Message</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {filteredLogs.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-6 py-8 text-center text-stone-400">
                    No logs found matching your criteria.
                  </td>
                </tr>
              ) : (
                filteredLogs.map((log) => (
                  <tr key={log.id} className="hover:bg-stone-50/50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-stone-500 font-mono text-xs">
                      {log.timestamp}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 rounded-md text-xs font-bold
                        ${log.level === LogLevel.INFO ? 'bg-stone-100 text-stone-600' : ''}
                        ${log.level === LogLevel.WARN ? 'bg-amber-50 text-amber-600' : ''}
                        ${log.level === LogLevel.ERROR ? 'bg-rose-50 text-rose-600' : ''}
                        ${log.level === LogLevel.SUCCESS ? 'bg-emerald-50 text-emerald-600' : ''}
                      `}>
                        {log.level}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-stone-600 font-medium">
                      {log.module}
                    </td>
                    <td className="px-6 py-4 text-stone-700 max-w-md truncate" title={log.message}>
                      {log.message}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};