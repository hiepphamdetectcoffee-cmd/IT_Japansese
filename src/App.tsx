/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Topic } from './types';
import Landing from './components/Landing';
import TopicSelector from './components/TopicSelector';
import ChatRoom from './components/ChatRoom';
import Login from './components/Login';
import Admin from './components/Admin';
import Upgrade from './components/Upgrade';
import StudyLibrary from './components/StudyLibrary';
import StudyDetail from './components/StudyDetail';
import { useAuth } from './hooks/useAuth';
import { TOPICS } from './constants';
import { useState } from 'react';

export default function App() {
  const { role, loading, isGuest } = useAuth();
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f5f5f5]">
        <div className="w-12 h-12 border-4 border-black/10 border-t-black rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <BrowserRouter>
      <div className="min-h-screen font-sans selection:bg-black selection:text-white">
        <Routes>
          <Route path="/" element={<Landing isLoggedIn={!isGuest} />} />
          <Route path="/topics" element={<TopicSelector onSelect={(t) => setSelectedTopic(t)} />} />
          <Route 
            path="/chat/:topicId" 
            element={
              <ChatRoomWrapper 
                selectedTopic={selectedTopic} 
                setSelectedTopic={setSelectedTopic} 
              />
            } 
          />
          <Route path="/login" element={<Login />} />
          <Route path="/upgrade" element={<Upgrade />} />
          <Route path="/study" element={<StudyLibrary />} />
          <Route path="/study/:studyId" element={<StudyDetail />} />
          <Route 
            path="/admin" 
            element={
              role === 'admin' ? <Admin /> : <Navigate to="/" replace />
            } 
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        {/* Admin shortcut for testing */}
        {role === 'admin' && (
          <AdminShortcut />
        )}
      </div>
    </BrowserRouter>
  );
}

import { useNavigate, useParams } from 'react-router-dom';

function ChatRoomWrapper({ 
  selectedTopic, 
  setSelectedTopic 
}: { 
  selectedTopic: Topic | null;
  setSelectedTopic: (t: Topic | null) => void;
}) {
  const { topicId } = useParams();
  const navigate = useNavigate();

  // If we have a topicId but no selectedTopic (e.g. direct link or refresh)
  // try to find it in constants
  const topic = selectedTopic || TOPICS.find(t => t.id === topicId);

  if (!topic) {
    return <Navigate to="/topics" replace />;
  }

  return (
    <ChatRoom 
      topic={topic} 
      onBack={() => {
        setSelectedTopic(null);
        navigate('/topics');
      }} 
    />
  );
}

function AdminShortcut() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate('/admin')}
      className="fixed bottom-6 right-6 bg-red-600 text-white p-4 rounded-full shadow-lg hover:bg-red-700 transition-all z-50 font-bold"
      title="Admin Panel"
    >
      Admin
    </button>
  );
}

