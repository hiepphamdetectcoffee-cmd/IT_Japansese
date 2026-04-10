import React from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { X, Lock, AlertCircle, Sparkles, LogIn } from 'lucide-react';
import { UserRole } from '../types';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
  icon?: React.ReactNode;
  primaryAction?: {
    label: string;
    onClick: () => void;
    icon?: React.ReactNode;
  };
  secondaryAction?: {
    label: string;
    onClick: () => void;
  };
}

export default function Modal({
  isOpen,
  onClose,
  title,
  message,
  icon,
  primaryAction,
  secondaryAction,
}: ModalProps) {
  // Use portal to ensure modal is on top of everything
  // Defensive check for document and document.body
  if (typeof document === 'undefined' || !document.body) {
    if (isOpen) console.warn('Modal: document.body not available while modal is open');
    return null;
  }

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 pointer-events-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative z-10 w-full max-w-md bg-white rounded-[2.5rem] shadow-2xl overflow-hidden pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8 text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gray-50 rounded-2xl text-black">
                  {icon || <AlertCircle size={32} />}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
              <p className="text-gray-500 leading-relaxed mb-8">{message}</p>
              
              <div className="space-y-3">
                {secondaryAction && (
                  <button
                    onClick={() => {
                      console.log('Modal Secondary Action Clicked:', secondaryAction.label);
                      secondaryAction.onClick();
                    }}
                    className="w-full py-4 bg-white text-gray-900 border-2 border-gray-100 rounded-2xl font-bold hover:border-black active:scale-[0.98] transition-all cursor-pointer"
                  >
                    {secondaryAction.label}
                  </button>
                )}
                {primaryAction && (
                  <button
                    onClick={() => {
                      console.log('Modal Primary Action Clicked:', primaryAction.label);
                      primaryAction.onClick();
                    }}
                    className="w-full py-4 bg-black text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-gray-800 active:scale-[0.98] transition-all cursor-pointer shadow-lg shadow-black/10"
                  >
                    {primaryAction.icon}
                    {primaryAction.label}
                  </button>
                )}
                <button
                  onClick={onClose}
                  className="w-full py-4 text-gray-400 font-bold hover:text-gray-600 transition-all cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </div>
            
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 text-gray-400 hover:text-black transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}

export function PremiumModal({ isOpen, onClose, onLogin, onUpgrade, role }: { isOpen: boolean; onClose: () => void; onLogin: () => void; onUpgrade: () => void; role: UserRole }) {
  const isGuest = role === 'guest';
  
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Premium Topic"
      message={isGuest 
        ? "This topic is available for Premium users. Log in if you already have a Premium account, or upgrade now to unlock full access." 
        : "This topic is available for Premium users. Upgrade to unlock full access."}
      icon={<Lock size={32} className="text-yellow-500" />}
      primaryAction={{
        label: "Upgrade to Premium",
        onClick: onUpgrade,
        icon: <Sparkles size={20} />
      }}
      secondaryAction={isGuest ? {
        label: "Log In",
        onClick: onLogin,
      } : undefined}
    />
  );
}

export function PreviewExpiredModal({ isOpen, onClose, onLogin, onUpgrade, role }: { isOpen: boolean; onClose: () => void; onLogin: () => void; onUpgrade: () => void; role: UserRole }) {
  const isGuest = role === 'guest';

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Continue Learning"
      message={isGuest 
        ? "Your free premium preview has ended. Log in if you already have a Premium account, or upgrade now to unlock full access." 
        : "Your premium preview has ended. Upgrade to unlock full access to this topic and all premium communication packs."}
      icon={<Sparkles size={32} className="text-purple-500" />}
      primaryAction={{
        label: "Upgrade to Premium",
        onClick: onUpgrade,
        icon: <Sparkles size={20} />
      }}
      secondaryAction={isGuest ? {
        label: "Log In",
        onClick: onLogin,
      } : undefined}
    />
  );
}

export function LimitModal({ isOpen, onClose, onLogin, type }: { isOpen: boolean; onClose: () => void; onLogin: () => void; type: 'chat' | 'voice' | 'topic' }) {
  const messages = {
    chat: "You've reached your free chat limit for this topic. Log in to continue practicing.",
    voice: "You've used your free voice practice limit. Log in or upgrade to continue.",
    topic: "You've reached the limit of free topics you can try as a guest. Log in to unlock more."
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Limit Reached"
      message={messages[type]}
      icon={<Sparkles size={32} className="text-purple-500" />}
      primaryAction={{
        label: "Log In to Unlock",
        onClick: onLogin,
        icon: <LogIn size={20} />
      }}
    />
  );
}

export function SaveProgressModal({ isOpen, onClose, onLogin }: { isOpen: boolean; onClose: () => void; onLogin: () => void }) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Save Your Progress"
      message="Log in to save your learning history, feedback, and continue your practice sessions later."
      icon={<Sparkles size={32} className="text-blue-500" />}
      primaryAction={{
        label: "Log In Now",
        onClick: onLogin,
        icon: <LogIn size={20} />
      }}
    />
  );
}
