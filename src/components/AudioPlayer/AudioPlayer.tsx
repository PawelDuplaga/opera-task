'use client'

import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';
import { TSlide } from '@/lib/types/Slide';
import useUserInteraction from '@/utils/hooks/useUserInteraction';

type AudioPlayerProps = {
  slides: TSlide[]
  
}

const AudioPlayer = ({ slides } : AudioPlayerProps) => {

  const [isPlaying, setIsPlaying] = useState(false);
  const currentAudioRef = useRef<HTMLAudioElement | null>(null);
  const [audioArray, setAudioArray] = useState<HTMLAudioElement[] | undefined>();
  const userInteracted = useUserInteraction();
  const currePlayingIndex = 1;

  useEffect(() => {
    const audioElements = slides.map((slideData) => new Audio(slideData.audio_url));
    setAudioArray(audioElements);
    
    return () => {
      audioElements.forEach((audio) => {
        audio.pause();
        audio.remove();
      });
    }
  }, [slides]);

  useEffect(() => {
    if (audioArray !== undefined && userInteracted) {
      audioArray[currePlayingIndex].play();
    }
  },[audioArray,currePlayingIndex,userInteracted])

  


  return (
		<div className={styles.audioplayerContainer}>
      <audio ref={currentAudioRef} controls preload='auto'>
        <source src="http://localhost:8080/audio/Yeat_Poppin.mp3" type="audio/mp3"/>
      </audio>
		</div>
  );
};

export default AudioPlayer