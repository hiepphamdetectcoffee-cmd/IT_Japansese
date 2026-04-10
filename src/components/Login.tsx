import React, { useState } from 'react';
import { auth, db } from '../firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { motion } from 'motion/react';
import { LogIn, ArrowLeft, ShieldCheck, Sparkles, Globe } from 'lucide-react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = async () => {
    setLoading(true);
    setError(null);
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      
      const redirectTo = searchParams.get('redirect') || '/topics';
      navigate(redirectTo);
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Failed to log in. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white rounded-[3rem] shadow-xl overflow-hidden p-10"
      >
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-gray-400 hover:text-black mb-10 transition-colors"
        >
          <ArrowLeft size={20} />
          Back
        </button>

        <div className="text-center mb-10">
          <div className="inline-flex p-4 bg-gray-50 rounded-3xl text-black mb-6">
            <Globe size={40} />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-3">Welcome Back</h1>
          <p className="text-gray-500">Log in to save your progress and unlock premium IT communication scenarios.</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-2xl text-sm font-medium flex items-center gap-2">
            <ShieldCheck size={16} />
            {error}
          </div>
        )}

        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          className="w-full py-4 bg-black text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-gray-800 transition-all disabled:opacity-50"
        >
          {loading ? (
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <Globe size={20} />
          )}
          Continue with Google
        </button>

        <div className="mt-10 pt-10 border-t border-gray-50 text-center">
          <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
            <Sparkles size={16} className="text-yellow-500" />
            Join 10,000+ IT professionals worldwide
          </div>
        </div>
      </motion.div>
    </div>
  );
}
