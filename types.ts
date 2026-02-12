export enum SourceType {
  XIAOHONGSHU = 'XiaoHongShu',
  DOUYIN = 'Douyin',
  OPENAI = 'OpenAI',
  ANTHROPIC = 'Anthropic',
  GOOGLE = 'Google',
}

export interface Post {
  id: string;
  title: string;
  content: string;
  author: string;
  source: SourceType;
  date: string;
  tags: string[];
  summary?: string; // Filled by AI
  url?: string;
  likes?: number;
}

export enum LogLevel {
  INFO = 'INFO',
  WARN = 'WARN',
  ERROR = 'ERROR',
  SUCCESS = 'SUCCESS',
}

export interface SystemLog {
  id: string;
  timestamp: string;
  level: LogLevel;
  message: string;
  module: string;
}

export interface CrawlerJob {
  id: string;
  status: 'idle' | 'running' | 'completed' | 'failed';
  progress: number; // 0 to 100
  target: SourceType | 'ALL';
  logs: SystemLog[];
  totalItemsFound: number;
}
