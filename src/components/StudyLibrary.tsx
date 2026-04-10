import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, ChevronRight, GraduationCap, Search, Filter, X, LayoutGrid, List } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ALL_LESSONS, CATEGORIES } from '../data/lessons';
import Header from './Header';
import { Difficulty } from '../types';

const ITEMS_PER_PAGE = 12;

export default function StudyLibrary() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | 'All'>('All');
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const filteredLessons = useMemo(() => {
    return ALL_LESSONS.filter(lesson => {
      const matchesSearch = lesson.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          lesson.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || lesson.category === selectedCategory;
      const matchesDifficulty = selectedDifficulty === 'All' || lesson.difficulty === selectedDifficulty;
      return matchesSearch && matchesCategory && matchesDifficulty;
    });
  }, [searchQuery, selectedCategory, selectedDifficulty]);

  const visibleLessons = filteredLessons.slice(0, visibleCount);
  const hasMore = visibleCount < filteredLessons.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + ITEMS_PER_PAGE);
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex flex-col">
      <Header />
      
      <main className="flex-1 p-6">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Hero Section */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-blue-600 font-bold text-sm uppercase tracking-widest">
              <GraduationCap size={18} />
              Learning Library
            </div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-2">
                <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
                  Free IT Japanese <br />
                  <span className="text-gray-400">Knowledge Base.</span>
                </h1>
                <p className="text-gray-500 max-w-2xl">
                  Explore over 100 free lessons covering every aspect of the IT workplace. Master vocabulary, study dialogues, and practice with AI.
                </p>
              </div>
              <div className="flex items-center gap-2 bg-white p-1 rounded-2xl border border-gray-200 shadow-sm">
                <div className="px-4 py-2 bg-blue-50 text-blue-600 rounded-xl text-sm font-bold">
                  {filteredLessons.length} Lessons Found
                </div>
              </div>
            </div>
          </div>

          {/* Filters & Search */}
          <div className="sticky top-24 z-40 bg-[#f5f5f5]/80 backdrop-blur-md py-4 space-y-4">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search Bar */}
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search lessons, keywords, or topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all shadow-sm"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black"
                  >
                    <X size={18} />
                  </button>
                )}
              </div>

              {/* Difficulty Filter */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 no-scrollbar">
                {(['All', 'Beginner', 'Intermediate', 'Advanced'] as const).map((diff) => (
                  <button
                    key={diff}
                    onClick={() => setSelectedDifficulty(diff)}
                    className={`px-6 py-4 rounded-2xl text-sm font-bold whitespace-nowrap transition-all border ${
                      selectedDifficulty === diff 
                        ? 'bg-black text-white border-black shadow-lg shadow-black/10' 
                        : 'bg-white text-gray-500 border-gray-200 hover:border-gray-400'
                    }`}
                  >
                    {diff}
                  </button>
                ))}
              </div>
            </div>

            {/* Category Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setVisibleCount(ITEMS_PER_PAGE);
                  }}
                  className={`px-5 py-2.5 rounded-xl text-sm font-bold whitespace-nowrap transition-all ${
                    selectedCategory === cat 
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-200' 
                      : 'bg-white text-gray-500 border border-gray-200 hover:border-gray-400'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Lessons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {visibleLessons.map((lesson, index) => (
                <motion.div
                  key={lesson.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  whileHover={{ y: -4 }}
                  onClick={() => navigate(`/study/${lesson.id}`)}
                  className="group p-6 bg-white rounded-[2rem] border border-gray-200 shadow-sm cursor-pointer hover:border-black transition-all flex flex-col"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl ${
                      lesson.difficulty === 'Beginner' ? 'bg-green-50 text-green-600' :
                      lesson.difficulty === 'Intermediate' ? 'bg-blue-50 text-blue-600' :
                      'bg-purple-50 text-purple-600'
                    }`}>
                      <BookOpen size={24} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 bg-gray-50 px-3 py-1 rounded-full">
                      {lesson.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {lesson.title}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-2 mb-6 flex-1">
                    {lesson.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${
                        lesson.difficulty === 'Beginner' ? 'bg-green-500' :
                        lesson.difficulty === 'Intermediate' ? 'bg-blue-500' :
                        'bg-purple-500'
                      }`} />
                      <span className="text-xs font-bold text-gray-500">{lesson.difficulty}</span>
                    </div>
                    <div className="flex items-center text-sm font-bold text-gray-400 group-hover:text-black transition-colors">
                      Learn <ChevronRight size={16} className="ml-1" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Empty State */}
          {filteredLessons.length === 0 && (
            <div className="py-20 text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-400">
                <Search size={40} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No lessons found</h3>
              <p className="text-gray-500">Try adjusting your search or filters to find what you're looking for.</p>
              <button 
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                  setSelectedDifficulty('All');
                }}
                className="mt-6 text-blue-600 font-bold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}

          {/* Load More */}
          {hasMore && (
            <div className="flex justify-center pt-8 pb-20">
              <button
                onClick={handleLoadMore}
                className="px-12 py-4 bg-white border-2 border-gray-200 text-gray-900 rounded-2xl font-bold hover:border-black hover:bg-gray-50 transition-all shadow-sm active:scale-[0.98]"
              >
                Load More Lessons
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
