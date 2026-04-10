import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Mic, BookOpen, ChevronRight, Sparkles, Globe, LogIn } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

interface LandingProps {
  isLoggedIn: boolean;
}

export default function Landing({ isLoggedIn }: LandingProps) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f5f5f5] selection:bg-black selection:text-white flex flex-col">
      <Header />
      
      <main className="flex-1 flex flex-col">
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-24 flex-1 flex flex-col justify-center">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 space-y-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm"
              >
                <Sparkles size={16} className="text-yellow-500" />
                <span className="text-xs font-bold uppercase tracking-widest text-gray-500">AI-Powered Learning</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-black text-gray-900 leading-[1.1] tracking-tighter"
              >
                Master Japanese <br />
                <span className="text-gray-400">for the IT Workplace.</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-500 leading-relaxed max-w-xl"
              >
                Practice realistic IT communication scenarios with AI. From job interviews to technical discussions, improve your Japanese skills through immersive roleplay.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <button 
                  onClick={() => navigate('/topics')}
                  className="px-8 py-5 bg-black text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-gray-800 transition-all shadow-xl shadow-black/10 active:scale-[0.98]"
                >
                  Start Free Practice
                  <ChevronRight size={20} />
                </button>
                {!isLoggedIn && (
                  <button 
                    onClick={() => navigate('/login')}
                    className="px-8 py-5 bg-white text-black border-2 border-gray-100 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:border-black active:scale-[0.98] transition-all"
                  >
                    <LogIn size={20} />
                    Log In
                  </button>
                )}
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="pt-8 flex items-center gap-6"
              >
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                      <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-400 font-medium">
                  Try free scenarios as a guest. <br />
                  No credit card required.
                </p>
              </motion.div>
            </div>

            <div className="flex-1 grid grid-cols-1 gap-4 w-full">
              <FeatureCard 
                icon={<BookOpen size={24} />} 
                title="Study Library" 
                desc="Master IT vocabulary and read sample dialogues before practicing."
                color="bg-orange-50 text-orange-600"
                delay={0.5}
                onClick={() => navigate('/study')}
              />
              <FeatureCard 
                icon={<MessageSquare size={24} />} 
                title="Professional Chat" 
                desc="Simulate Slack, email, and meeting discussions with AI colleagues."
                color="bg-blue-50 text-blue-600"
                delay={0.6}
              />
              <FeatureCard 
                icon={<Mic size={24} />} 
                title="Voice Practice" 
                desc="Speak naturally in Japanese and get instant pronunciation feedback."
                color="bg-purple-50 text-purple-600"
                delay={0.7}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function FeatureCard({ icon, title, desc, color, delay, onClick }: { icon: React.ReactNode, title: string, desc: string, color: string, delay: number, onClick?: () => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay }}
      whileHover={{ x: 10 }}
      onClick={onClick}
      className={`p-8 bg-white rounded-[2rem] border border-gray-100 shadow-sm flex gap-6 items-start ${onClick ? 'cursor-pointer hover:border-black' : ''}`}
    >
      <div className={`p-4 rounded-2xl ${color}`}>
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-500 leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}
