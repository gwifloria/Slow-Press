import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#fafaf9] flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-sm mb-6">
            <Sparkles className="w-8 h-8 text-stone-800" />
          </div>
          <h1 className="text-3xl font-serif font-bold text-stone-900 mb-2">Welcome Back</h1>
          <p className="text-stone-500">Sign in to access your AI intelligence stream</p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100">
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">Email Address</label>
              <input 
                type="email" 
                defaultValue="demo@zenflow.ai"
                className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-400/50 transition-all"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">Password</label>
              <input 
                type="password" 
                defaultValue="password"
                className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-400/50 transition-all"
                required
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full py-4 text-base" 
              isLoading={isLoading}
            >
              Sign In <ArrowRight size={18} className="ml-2" />
            </Button>
          </form>
        </div>
        
        <p className="mt-8 text-center text-sm text-stone-400">
          Powered by ZenFlow Intelligence
        </p>
      </div>
    </div>
  );
};
