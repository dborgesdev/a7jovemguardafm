import { useEffect, useRef, useState } from 'react';
import { radio } from '../config/radio';
export type AudioState = 'idle' | 'loading' | 'playing' | 'paused' | 'error';
export function useRadio() {
  const audio = useRef<HTMLAudioElement>(null);
  const [state, setState] = useState<AudioState>('idle');
  const [volume, setVolume] = useState(70);
  useEffect(() => { if (audio.current) audio.current.volume = 0.7; }, []);
  const start = () => {
    const element = audio.current;
    if (!element || !element.paused) return;
    if (element.error) element.load();
    setState('loading');
    void element.play().catch((error: unknown) => {
      if (error instanceof DOMException && error.name === 'AbortError') return;
      setState('error');
    });
  };
  const toggle = () => {
    const element = audio.current;
    if (!element) return;
    if (!element.paused) element.pause();
    else start();
  };
  const changeVolume = (value: number) => {
    if (audio.current) audio.current.volume = value / 100;
    setVolume(value);
  };
  const audioElement = <audio ref={audio} src={radio.stream} preload="none"
    onLoadStart={() => { if (audio.current && !audio.current.paused) setState('loading'); }}
    onPlaying={() => setState('playing')} onWaiting={() => setState('loading')}
    onPause={() => setState('paused')} onEnded={() => setState('paused')}
    onError={() => setState('error')}
    onVolumeChange={() => { if (audio.current) setVolume(Math.round(audio.current.volume * 100)); }}
    />;
  return { audio, audioElement, state, volume, start, toggle, changeVolume };
}


