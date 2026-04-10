import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Globe, LogIn, User as UserIcon, LayoutDashboard, LogOut } from 'lucide-react';
import { auth } from '../firebase';

export default function Header() {
  const navigate = useNavigate();
  const { user, profile, isGuest } = useAuth();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <header className="w-full bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => navigate('/')}
        >
          <div className="p-2 bg-black text-white rounded-xl">
            <Globe size={24} />
          </div>
          <span className="text-xl font-black tracking-tighter">JP IT Practice</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => navigate('/')} className="text-sm font-bold text-gray-500 hover:text-black transition-colors">Home</button>
          <button onClick={() => navigate('/study')} className="text-sm font-bold text-gray-500 hover:text-black transition-colors">Study</button>
          <button onClick={() => navigate('/topics')} className="text-sm font-bold text-gray-500 hover:text-black transition-colors">Topics</button>
          <button onClick={() => navigate('/upgrade')} className="text-sm font-bold text-gray-500 hover:text-black transition-colors">Pricing</button>
        </nav>

        <div className="flex items-center gap-4">
          {isGuest ? (
            <>
              <button 
                onClick={() => navigate('/login')}
                className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-bold text-gray-500 hover:text-black transition-all"
              >
                <LogIn size={18} />
                Log In
              </button>
              <button 
                onClick={() => navigate('/topics')}
                className="px-6 py-2.5 bg-black text-white rounded-xl text-sm font-bold hover:bg-gray-800 transition-all shadow-lg shadow-black/5"
              >
                Start Free
              </button>
            </>
          ) : (
            <div className="flex items-center gap-3">
              <button 
                onClick={() => navigate('/topics')}
                className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-bold text-gray-500 hover:text-black transition-all"
              >
                <LayoutDashboard size={18} />
                Dashboard
              </button>
              <div className="flex items-center gap-3 pl-4 border-l border-gray-100">
                <div className="text-right hidden sm:block">
                  <p className="text-xs font-bold text-gray-900">{profile?.name || 'User'}</p>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest font-black">{profile?.role || 'Member'}</p>
                </div>
                <button 
                  onClick={handleLogout}
                  className="p-2 bg-gray-50 text-gray-400 hover:text-red-500 rounded-xl transition-all"
                  title="Log Out"
                >
                  <LogOut size={18} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
