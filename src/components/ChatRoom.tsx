import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Message, Topic, Feedback } from '../types';
import { getChatResponse } from '../services/gemini';
import { useSpeech } from '../hooks/useSpeech';
import { useAuth, GUEST_LIMITS, NORMAL_LIMITS } from '../hooks/useAuth';
import { LimitModal, SaveProgressModal, PreviewExpiredModal } from './Modal';
import FeedbackCard from './FeedbackCard';
import { useNavigate } from 'react-router-dom';
import { 
  Send, 
  Mic, 
  MicOff, 
  ArrowLeft, 
  Volume2, 
  VolumeX, 
  RotateCcw, 
  Sparkles,
  Info,
  History,
  Timer,
  Lock
} from 'lucide-react';

interface ChatRoomProps {
  topic: Topic;
  onBack: () => void;
}

export default function ChatRoom({ topic, onBack }: ChatRoomProps) {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'initial',
      role: 'ai',
      content: topic.initialMessage,
      timestamp: Date.now(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [autoSpeak, setAutoSpeak] = useState(true);
  const [showLimitModal, setShowLimitModal] = useState<false | 'chat' | 'voice'>(false);
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [previewSeconds, setPreviewSeconds] = useState(60);
  const [previewExpired, setPreviewExpired] = useState(false);
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  
  const { 
    role, 
    isGuest, 
    guestUsage, 
    incrementGuestChat, 
    incrementGuestVoice 
  } = useAuth();

  const isPremiumTopic = topic.isPremium;
  const isRestricted = isPremiumTopic && role !== 'premium' && role !== 'admin';

  useEffect(() => {
    if (!isRestricted) {
      setPreviewExpired(false);
      setShowPreviewModal(false);
      setPreviewSeconds(60);
    }
  }, [isRestricted]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRestricted && previewSeconds > 0 && !previewExpired) {
      timer = setInterval(() => {
        setPreviewSeconds(prev => {
          if (prev <= 1) {
            console.log('ChatRoom: Preview timeout reached!');
            setPreviewExpired(true);
            setShowPreviewModal(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRestricted, previewSeconds, previewExpired]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const onSpeechResult = (text: string) => {
    if (previewExpired) return;

    // Check voice limits
    if (isGuest && guestUsage.voiceCount >= GUEST_LIMITS.VOICE_ATTEMPTS) {
      setShowLimitModal('voice');
      return;
    }
    if (role === 'normal' && guestUsage.voiceCount >= NORMAL_LIMITS.VOICE_ATTEMPTS) {
      setShowLimitModal('voice');
      return;
    }
    
    if (isGuest || role === 'normal') {
      incrementGuestVoice();
    }
    handleSend(text);
  };

  const { 
    isListening, 
    startListening, 
    stopListening, 
    speak, 
    recordingTime, 
    interimTranscript,
    stopSpeaking
  } = useSpeech(onSpeechResult);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, interimTranscript]);

  const handleSend = async (text: string) => {
    if (!text.trim() || isLoading || previewExpired) return;

    // Check chat limits
    if (isGuest && guestUsage.chatCount >= GUEST_LIMITS.CHATS_PER_TOPIC) {
      setShowLimitModal('chat');
      return;
    }
    if (role === 'normal' && guestUsage.chatCount >= NORMAL_LIMITS.CHATS_PER_TOPIC) {
      setShowLimitModal('chat');
      return;
    }

    if (isGuest || role === 'normal') {
      incrementGuestChat();
    }

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: text,
      timestamp: Date.now(),
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await getChatResponse(topic, messages, text);
      
      const fullReply = response.feedback.nextQuestion 
        ? `${response.reply}\n\n${response.feedback.nextQuestion}`
        : response.reply;

      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'ai',
        content: fullReply,
        timestamp: Date.now(),
        feedback: response.feedback,
      };

      setMessages(prev => [...prev, aiMsg]);
      setIsLoading(false);

      if (autoSpeak) {
        speak(fullReply);
      }
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  const resetConversation = () => {
    setMessages([{
      id: 'initial',
      role: 'ai',
      content: topic.initialMessage,
      timestamp: Date.now(),
    }]);
    stopSpeaking();
    setInput('');
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex flex-col h-screen bg-[#f5f5f5]">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <button 
            onClick={onBack}
            className="p-2 hover:bg-gray-100 rounded-xl transition-colors text-gray-500"
          >
            <ArrowLeft size={20} />
          </button>
          <div>
            <h1 className="font-bold text-gray-900">{topic.title}</h1>
            <div className="flex items-center gap-2">
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">{topic.role}</p>
              <span className="text-[10px] text-gray-300">•</span>
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">{topic.difficulty}</p>
              {isRestricted && (
                <>
                  <span className="text-[10px] text-gray-300">•</span>
                  <div className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-tighter ${
                    previewSeconds <= 10 ? 'bg-red-50 text-red-600 animate-pulse' : 'bg-yellow-50 text-yellow-600'
                  }`}>
                    <Timer size={10} />
                    Preview: {previewSeconds}s
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {isGuest && (
            <>
              <button 
                onClick={() => navigate(`/login?redirect=/chat/${topic.id}`)}
                className="px-4 py-2 bg-white text-black border border-gray-200 rounded-xl text-xs font-bold hover:border-black transition-all shadow-sm"
              >
                Log In
              </button>
              <button 
                onClick={() => setShowSaveModal(true)}
                className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-xl text-xs font-bold hover:bg-blue-100 transition-all"
              >
                <History size={14} />
                Save Progress
              </button>
            </>
          )}
          <button 
            onClick={() => setAutoSpeak(!autoSpeak)}
            className={`p-2 rounded-xl transition-all ${autoSpeak ? 'bg-black text-white' : 'bg-gray-100 text-gray-400'}`}
            title={autoSpeak ? "Auto-speak ON" : "Auto-speak OFF"}
          >
            {autoSpeak ? <Volume2 size={20} /> : <VolumeX size={20} />}
          </button>
          <button 
            onClick={resetConversation}
            className="p-2 hover:bg-gray-100 rounded-xl text-gray-500 transition-colors"
            title="Reset conversation"
          >
            <RotateCcw size={20} />
          </button>
        </div>
      </header>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
              <div className={`max-w-[85%] p-5 rounded-[2rem] text-sm leading-relaxed shadow-sm ${
                msg.role === 'user' 
                  ? 'bg-black text-white rounded-tr-none' 
                  : 'bg-white text-gray-900 rounded-tl-none border border-gray-100'
              }`}>
                <div className="whitespace-pre-wrap">{msg.content}</div>
                {msg.role === 'ai' && msg.id !== 'initial' && (
                  <button 
                    onClick={() => speak(msg.content)}
                    className="mt-2 text-gray-400 hover:text-black transition-colors"
                  >
                    <Volume2 size={16} />
                  </button>
                )}
              </div>
              
              {msg.feedback && (
                <div className="mt-4 w-full">
                  <FeedbackCard feedback={msg.feedback} />
                </div>
              )}
            </div>
          ))}
          
          {interimTranscript && (
            <div className="flex flex-col items-end">
              <div className="max-w-[85%] p-5 rounded-[2rem] rounded-tr-none bg-gray-100 text-gray-400 text-sm italic animate-pulse">
                {interimTranscript}
              </div>
            </div>
          )}

          {isLoading && (
            <div className="flex items-center gap-2 text-gray-400 text-xs font-medium animate-pulse">
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" />
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]" />
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]" />
              AI is thinking...
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <footer className="p-6 bg-white border-t border-gray-100 shadow-[0_-4px_20px_rgba(0,0,0,0.03)]">
        <div className="max-w-4xl mx-auto">
          <AnimatePresence>
            {isListening && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="mb-6 overflow-hidden"
              >
                <div className="p-6 bg-black text-white rounded-[2.5rem] flex flex-col items-center gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-ping" />
                    <span className="text-xs font-bold uppercase tracking-[0.2em]">Recording</span>
                    <span className="text-xl font-mono font-bold">{formatTime(recordingTime)}</span>
                  </div>
                  
                  <div className="flex items-center gap-1 h-12">
                    {[...Array(12)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{ height: [10, Math.random() * 40 + 10, 10] }}
                        transition={{ repeat: Infinity, duration: 0.5, delay: i * 0.05 }}
                        className="w-1 bg-white/30 rounded-full"
                      />
                    ))}
                  </div>

                  <button 
                    onClick={stopListening}
                    className="px-8 py-3 bg-white text-black rounded-2xl font-bold text-sm hover:bg-gray-100 transition-all flex items-center gap-2"
                  >
                    <MicOff size={16} />
                    Stop Recording
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex items-center gap-3">
            <button 
              onClick={isListening ? stopListening : startListening}
              disabled={isLoading || previewExpired}
              className={`p-5 rounded-2xl transition-all shadow-lg ${
                isListening 
                  ? 'bg-red-500 text-white animate-pulse' 
                  : 'bg-gray-100 text-gray-500 hover:bg-black hover:text-white'
              } disabled:opacity-50`}
            >
              {isListening ? <MicOff size={24} /> : <Mic size={24} />}
            </button>
            
            <div className="flex-1 relative">
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend(input)}
                placeholder={previewExpired ? "Preview ended" : isListening ? "Listening..." : "Type your message in Japanese..."}
                disabled={isLoading || isListening || previewExpired}
                className="w-full p-5 bg-gray-50 border-none rounded-2xl text-sm focus:ring-2 focus:ring-black transition-all outline-none disabled:opacity-50"
              />
              <button 
                onClick={() => handleSend(input)}
                disabled={!input.trim() || isLoading || isListening || previewExpired}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-all disabled:opacity-20"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
          
          <div className="mt-4 flex items-center justify-center gap-4">
            {previewExpired ? (
              <p className="text-[10px] text-red-500 font-bold flex items-center gap-1 uppercase tracking-wider">
                <Lock size={12} />
                Preview Ended. {isGuest ? 'Log in' : 'Upgrade'} to continue.
              </p>
            ) : (
              <p className="text-[10px] text-gray-400 font-medium flex items-center gap-1">
                <Info size={12} />
                {isGuest ? `Guest: ${GUEST_LIMITS.CHATS_PER_TOPIC - guestUsage.chatCount} chats left` : `Member: ${role}`}
              </p>
            )}
          </div>
        </div>
      </footer>

      <LimitModal 
        isOpen={!!showLimitModal} 
        onClose={() => setShowLimitModal(false)} 
        onLogin={() => {
          setShowLimitModal(false);
          navigate(`/login?redirect=/chat/${topic.id}`);
        }}
        type={showLimitModal || 'chat'}
      />

      <SaveProgressModal 
        isOpen={showSaveModal} 
        onClose={() => setShowSaveModal(false)} 
        onLogin={() => {
          setShowSaveModal(false);
          navigate(`/login?redirect=/chat/${topic.id}`);
        }}
      />

      <PreviewExpiredModal
        isOpen={showPreviewModal}
        onClose={() => setShowPreviewModal(false)}
        onLogin={() => navigate(`/login?redirect=/chat/${topic.id}`)}
        onUpgrade={() => {
          if (isGuest) {
            navigate(`/login?redirect=/upgrade`);
          } else {
            navigate('/upgrade');
          }
        }}
        role={role}
      />
    </div>
  );
}
