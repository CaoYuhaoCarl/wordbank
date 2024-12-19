"use client";

import { useState, useCallback } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';

interface TTSOptions {
  rate?: number;
  pitch?: number;
  volume?: number;
  voice?: SpeechSynthesisVoice;
}

export function useTTS() {
  const { speak, speaking, supported, voices, cancel } = useSpeechSynthesis();
  const [currentVoice, setCurrentVoice] = useState<SpeechSynthesisVoice | null>(null);

  // 初始化时选择合适的英语声音
  useState(() => {
    const englishVoices = voices.filter(voice => voice.lang.includes('en-'));
    if (englishVoices.length > 0) {
      setCurrentVoice(englishVoices[0]);
    }
  }, [voices]);

  const speakText = useCallback((text: string, options: TTSOptions = {}) => {
    if (!supported) {
      console.warn('Speech synthesis is not supported in this browser');
      return;
    }

    const defaultOptions: TTSOptions = {
      rate: 0.9,      // 语速稍慢，适合学习
      pitch: 1,       // 标准音高
      volume: 1,      // 最大音量
      voice: currentVoice || undefined
    };

    speak({ 
      text, 
      ...defaultOptions,
      ...options
    });
  }, [speak, supported, currentVoice]);

  const stopSpeaking = useCallback(() => {
    cancel();
  }, [cancel]);

  return {
    speakText,
    stopSpeaking,
    speaking,
    supported,
    voices,
    currentVoice,
    setCurrentVoice
  };
}