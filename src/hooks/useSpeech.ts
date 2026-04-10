import { useState, useCallback, useRef, useEffect } from 'react';

export function useSpeech(onResult?: (text: string) => void) {
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [interimTranscript, setInterimTranscript] = useState('');
  const recognitionRef = useRef<any>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const silenceTimerRef = useRef<NodeJS.Timeout | null>(null);
  const finalTranscriptRef = useRef('');

  const MAX_DURATION = 120; // 120 seconds
  const SILENCE_TIMEOUT = 8000; // 8 seconds of silence

  const isManuallyStoppedRef = useRef(false);
  const onResultCallbackRef = useRef<(text: string) => void>(onResult || (() => {}));

  useEffect(() => {
    if (onResult) {
      onResultCallbackRef.current = onResult;
    }
  }, [onResult]);

  const stopListening = useCallback(() => {
    isManuallyStoppedRef.current = true;
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    if (silenceTimerRef.current) {
      clearTimeout(silenceTimerRef.current);
      silenceTimerRef.current = null;
    }
    setIsListening(false);
  }, []);

  const startListening = useCallback((onResultOverride?: (text: string) => void) => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      alert('Speech recognition is not supported in this browser.');
      return;
    }

    if (onResultOverride) {
      onResultCallbackRef.current = onResultOverride;
    }
    isManuallyStoppedRef.current = false;
    finalTranscriptRef.current = '';
    setInterimTranscript('');
    setRecordingTime(0);

    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    
    const initRecognition = () => {
      const recognition = new SpeechRecognition();
      recognition.lang = 'ja-JP';
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.maxAlternatives = 1;

      recognition.onstart = () => {
        setIsListening(true);
        if (!timerRef.current) {
          timerRef.current = setInterval(() => {
            setRecordingTime(prev => {
              if (prev >= MAX_DURATION) {
                stopListening();
                return prev;
              }
              return prev + 1;
            });
          }, 1000);
        }
      };

      recognition.onend = () => {
        // If it wasn't manually stopped and we haven't hit the limit, restart it
        // This bypasses the browser's internal "short timeout" behavior
        if (!isManuallyStoppedRef.current && recordingTime < MAX_DURATION) {
          console.log('Restarting recognition to maintain continuous mode...');
          try {
            recognition.start();
          } catch (e) {
            console.error('Failed to restart recognition', e);
            setIsListening(false);
          }
        } else {
          setIsListening(false);
          if (timerRef.current) clearInterval(timerRef.current);
          if (silenceTimerRef.current) clearTimeout(silenceTimerRef.current);
          
          const finalResult = finalTranscriptRef.current.trim();
          if (finalResult && isManuallyStoppedRef.current) {
            onResultCallbackRef.current(finalResult);
          }
        }
      };

      recognition.onerror = (event: any) => {
        console.error('Speech recognition error', event.error);
        if (event.error === 'no-speech') {
          // Ignore no-speech errors and let the silence timer handle it
          return;
        }
        stopListening();
      };

      recognition.onresult = (event: any) => {
        let interim = '';
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            finalTranscriptRef.current += event.results[i][0].transcript + ' ';
          } else {
            interim += event.results[i][0].transcript;
          }
        }
        setInterimTranscript(interim);

        // Reset silence timer on any result
        if (silenceTimerRef.current) clearTimeout(silenceTimerRef.current);
        silenceTimerRef.current = setTimeout(() => {
          console.log('Silence timeout reached');
          stopListening();
        }, SILENCE_TIMEOUT);
      };

      return recognition;
    };

    recognitionRef.current = initRecognition();
    recognitionRef.current.start();
  }, [stopListening]);

  const speak = useCallback((text: string) => {
    if (!('speechSynthesis' in window)) {
      console.error('Text-to-speech is not supported in this browser.');
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ja-JP';
    
    const voices = window.speechSynthesis.getVoices();
    let jaVoice = voices.find(v => v.lang === 'ja-JP' || v.lang === 'ja_JP');
    if (!jaVoice) {
      jaVoice = voices.find(v => v.lang.startsWith('ja'));
    }
    
    if (jaVoice) {
      utterance.voice = jaVoice;
    }

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  }, []);

  const stopSpeaking = useCallback(() => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (silenceTimerRef.current) clearTimeout(silenceTimerRef.current);
    };
  }, []);

  return {
    isListening,
    isSpeaking,
    recordingTime,
    interimTranscript,
    startListening,
    stopListening,
    speak,
    stopSpeaking
  };
}
