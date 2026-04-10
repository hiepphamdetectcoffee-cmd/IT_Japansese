import { Feedback } from '../types';
import { CheckCircle2, Lightbulb, Info, Sparkles } from 'lucide-react';

interface FeedbackCardProps {
  feedback: Feedback;
}

export default function FeedbackCard({ feedback }: FeedbackCardProps) {
  return (
    <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm">
      <div className="bg-gray-50 px-4 py-2 border-b border-gray-200 flex items-center gap-2">
        <CheckCircle2 size={14} className="text-green-600" />
        <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Correction Feedback</span>
      </div>
      <div className="p-4 space-y-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-gray-400">
            <Info size={14} />
            <span className="text-[10px] font-bold uppercase tracking-tight">Corrected</span>
          </div>
          <p className="text-sm font-medium text-gray-900">{feedback.corrected}</p>
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-2 text-gray-400">
            <Lightbulb size={14} />
            <span className="text-[10px] font-bold uppercase tracking-tight">More Natural</span>
          </div>
          <p className="text-sm font-medium text-gray-900 italic">"{feedback.natural}"</p>
        </div>

        <div className="pt-2 border-t border-gray-100">
          <p className="text-xs text-gray-500 leading-relaxed">
            {feedback.explanation}
          </p>
        </div>

        {feedback.nextQuestion && (
          <div className="pt-4 mt-4 border-t-2 border-dashed border-gray-100">
            <div className="flex items-center gap-2 text-black mb-2">
              <Sparkles size={16} className="text-yellow-500" />
              <span className="text-xs font-bold uppercase tracking-wider">Next Question</span>
            </div>
            <p className="text-sm font-bold text-gray-900 bg-gray-50 p-3 rounded-xl border border-gray-100">
              {feedback.nextQuestion}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
