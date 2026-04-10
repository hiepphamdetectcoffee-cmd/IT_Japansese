import { useState } from 'react';
import { motion } from 'motion/react';
import { TOPICS, CATEGORIES } from '../constants';
import { Topic, Category } from '../types';
import { ChevronRight, ArrowLeft, Lock, Star, Zap, Shield, Code, Bug, MessageSquare, Sparkles, Terminal } from 'lucide-react';
import { useAuth, GUEST_LIMITS } from '../hooks/useAuth';
import { PremiumModal, LimitModal } from './Modal';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

interface TopicSelectorProps {
  onSelect: (topic: Topic) => void;
}

const ICON_MAP: Record<string, any> = {
  Sparkles,
  Bridge: Zap,
  Bug,
  Code,
  Terminal
};

export default function TopicSelector({ onSelect }: TopicSelectorProps) {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [showPremiumModal, setShowPremiumModal] = useState(false);
  const [showLimitModal, setShowLimitModal] = useState(false);
  const { role, isGuest, guestUsage, addGuestTopic } = useAuth();

  const filteredTopics = selectedCategory 
    ? TOPICS.filter(t => t.categoryId === selectedCategory.id)
    : [];

  const handleTopicClick = (topic: Topic) => {
    // 1. Check guest limits for free topics
    if (!topic.isPremium && isGuest) {
      const isAlreadyUsed = guestUsage.topicIds.includes(topic.id);
      if (!isAlreadyUsed && guestUsage.topicIds.length >= GUEST_LIMITS.TOPICS) {
        setShowLimitModal(true);
        return;
      }
      addGuestTopic(topic.id);
    }

    onSelect(topic);
    navigate(`/chat/${topic.id}`);
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex flex-col">
      <Header />
      
      <main className="flex-1 p-6">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {selectedCategory && (
                <button 
                  onClick={() => setSelectedCategory(null)}
                  className="p-2 hover:bg-white rounded-xl text-gray-500 hover:text-black transition-all shadow-sm"
                >
                  <ArrowLeft size={20} />
                </button>
              )}
              <h2 className="text-2xl font-bold text-gray-900">
                {selectedCategory ? selectedCategory.title : 'Learning Paths'}
              </h2>
            </div>
          </div>

          {!selectedCategory ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {CATEGORIES.map((cat) => {
                const Icon = ICON_MAP[cat.icon] || MessageSquare;
                return (
                  <motion.div
                    key={cat.id}
                    whileHover={{ y: -4 }}
                    onClick={() => setSelectedCategory(cat)}
                    className="group p-8 bg-white rounded-[2.5rem] border border-gray-200 shadow-sm cursor-pointer hover:border-black transition-all"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-4 bg-gray-50 rounded-2xl group-hover:bg-black group-hover:text-white transition-colors">
                        <Icon size={32} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{cat.title}</h3>
                        <p className="text-sm text-gray-500">{cat.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center text-sm font-bold text-gray-400 group-hover:text-black transition-colors">
                      View Scenarios <ChevronRight size={16} className="ml-1" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredTopics.map((topic, index) => {
                const isLocked = topic.isPremium && role !== 'premium' && role !== 'admin';
                
                return (
                  <motion.div
                    key={topic.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ y: -4 }}
                    onClick={() => handleTopicClick(topic)}
                    className="group p-6 bg-white rounded-3xl border border-gray-200 shadow-sm cursor-pointer hover:border-black transition-all relative overflow-hidden"
                  >
                    {topic.isPremium && (
                      <div className="absolute top-0 right-0 bg-yellow-400 text-[10px] font-black px-3 py-1 rounded-bl-xl uppercase tracking-tighter flex items-center gap-1">
                        <Star size={10} fill="currentColor" /> Premium
                      </div>
                    )}
                    
                    <div className="flex justify-between items-start mb-4">
                      <div className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        topic.difficulty === 'Beginner' ? 'bg-green-50 text-green-600' :
                        topic.difficulty === 'Intermediate' ? 'bg-blue-50 text-blue-600' :
                        'bg-purple-50 text-purple-600'
                      }`}>
                        {topic.difficulty}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                      {topic.title}
                      {isLocked && <Lock size={14} className="text-gray-300" />}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4">
                      {topic.description}
                    </p>

                    <div className="space-y-2 pt-4 border-t border-gray-50">
                      <div className="flex items-center gap-2 text-[10px] text-gray-400 font-bold uppercase">
                        <Shield size={12} /> Scenario Background
                      </div>
                      <p className="text-xs text-gray-600 italic">
                        {topic.scenarioBackground}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </main>

      <PremiumModal 
        isOpen={showPremiumModal} 
        onClose={() => setShowPremiumModal(false)} 
        role={role}
        onLogin={() => {
          setShowPremiumModal(false);
          navigate('/login');
        }}
        onUpgrade={() => {
          setShowPremiumModal(false);
          if (isGuest) {
            navigate('/login?redirect=/upgrade');
          } else {
            navigate('/upgrade');
          }
        }}
      />

      <LimitModal 
        isOpen={showLimitModal} 
        onClose={() => setShowLimitModal(false)} 
        onLogin={() => {
          setShowLimitModal(false);
          navigate('/login');
        }}
        type="topic"
      />
    </div>
  );
}
