import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, BookOpen, MessageSquare, Sparkles, ChevronRight, PlayCircle, GraduationCap, CheckCircle2 } from 'lucide-react';
import { ALL_LESSONS } from '../data/lessons';
import Header from './Header';

export default function StudyDetail() {
  const { studyId } = useParams();
  const navigate = useNavigate();
  const lesson = ALL_LESSONS.find(l => l.id === studyId);

  if (!lesson) {
    return (
      <div className="min-h-screen bg-[#f5f5f5] flex flex-col items-center justify-center p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Lesson not found</h2>
        <button onClick={() => navigate('/study')} className="px-6 py-2 bg-black text-white rounded-xl font-bold">
          Back to Library
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex flex-col">
      <Header />
      
      <main className="flex-1 p-6">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header Section */}
          <div className="space-y-6">
            <button 
              onClick={() => navigate('/study')}
              className="flex items-center gap-2 text-gray-500 hover:text-black transition-colors font-bold text-sm"
            >
              <ArrowLeft size={18} />
              Back to Library
            </button>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-widest rounded-full">
                  {lesson.category}
                </span>
                <span className={`px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-full ${
                  lesson.difficulty === 'Beginner' ? 'bg-green-50 text-green-600' :
                  lesson.difficulty === 'Intermediate' ? 'bg-blue-50 text-blue-600' :
                  'bg-purple-50 text-purple-600'
                }`}>
                  {lesson.difficulty}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter leading-tight">
                {lesson.title}
              </h1>
              <p className="text-xl text-gray-500 leading-relaxed max-w-2xl">
                {lesson.description}
              </p>
            </div>

            <div className="p-6 bg-blue-50 rounded-3xl border border-blue-100 flex items-start gap-4">
              <div className="p-2 bg-white rounded-xl text-blue-600 shadow-sm">
                <GraduationCap size={20} />
              </div>
              <div>
                <p className="text-xs font-black text-blue-400 uppercase tracking-widest mb-1">Learning Objective</p>
                <p className="text-blue-900 font-bold">{lesson.learningObjective}</p>
              </div>
            </div>
          </div>

          {/* Vocabulary Section */}
          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white text-gray-900 rounded-xl shadow-sm border border-gray-100">
                  <BookOpen size={20} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Vocabulary</h2>
              </div>
              <span className="text-sm font-bold text-gray-400">{lesson.vocabulary.length} Items</span>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {lesson.vocabulary.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm flex flex-col md:flex-row md:items-center gap-6 group hover:border-blue-200 transition-all"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-2xl font-black text-gray-900">{item.kanji}</span>
                      <span className="text-sm font-bold text-gray-400">[{item.reading}]</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-medium text-gray-400 italic">{item.romaji}</span>
                      <span className="text-blue-600 font-bold">• {item.meaning}</span>
                    </div>
                  </div>
                  <div className="flex-[2] bg-gray-50 p-4 rounded-2xl border border-transparent group-hover:border-blue-50 transition-all">
                    <p className="text-sm text-gray-600 italic leading-relaxed">
                      <span className="font-bold text-gray-400 mr-2">Ex:</span>
                      {item.example}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Dialogue Section */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white text-gray-900 rounded-xl shadow-sm border border-gray-100">
                <MessageSquare size={20} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Sample Dialogues</h2>
            </div>

            <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden">
              <div className="p-8 space-y-10">
                {lesson.dialogue.map((line, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    className="flex gap-6"
                  >
                    <div className="w-24 flex-shrink-0">
                      <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 block mb-1">
                        {line.speaker}
                      </span>
                      <div className={`h-1 w-8 rounded-full ${idx % 2 === 0 ? 'bg-blue-400' : 'bg-purple-400'}`} />
                    </div>
                    <div className="flex-1 space-y-2">
                      <p className="text-lg font-bold text-gray-900 leading-relaxed">
                        {line.japanese}
                      </p>
                      <p className="text-sm text-gray-500">
                        {line.meaning}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="bg-gray-900 p-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex items-center gap-6 text-white">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-yellow-400">
                    <Sparkles size={32} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Ready to practice?</h4>
                    <p className="text-gray-400 text-sm max-w-xs">Jump into a realistic AI roleplay based on this scenario and get instant feedback.</p>
                  </div>
                </div>
                <button 
                  onClick={() => navigate(`/chat/${lesson.aiPracticeTopicKey}`)}
                  className="w-full md:w-auto px-10 py-5 bg-white text-black rounded-2xl font-black hover:bg-gray-100 transition-all shadow-xl flex items-center justify-center gap-3 active:scale-[0.98]"
                >
                  Practice with AI
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </section>

          {/* Bottom Navigation */}
          <div className="flex items-center justify-center py-12">
            <button 
              onClick={() => navigate('/study')}
              className="flex items-center gap-2 text-gray-400 hover:text-black transition-colors font-bold"
            >
              <ArrowLeft size={18} />
              Back to Library
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
