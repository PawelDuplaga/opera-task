'use client'

import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';
import { TSlide } from '@/lib/types/Slide';
import useUserInteraction from '@/utils/hooks/useUserInteraction';
import useSlides from '@/utils/hooks/useSlides';


const AudioPlayer = () => {
  
  // const userInteracted = useUserInteraction();
  const {frontSlideIndex, slides, nextSlide, previousSlide} = useSlides();
  const [audioArray, setAudioArray] = useState<HTMLAudioElement[] | undefined>();
  const [isPlaying, setIsPlaying] = useState(false);
  const currentAudioRef = useRef<HTMLAudioElement | null>(null);

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
    if (audioArray) {
      audioArray?.forEach(audioElement => audioElement.pause());
      audioArray[frontSlideIndex].currentTime = 0;
      audioArray[frontSlideIndex].play();
    }
  }, [frontSlideIndex, audioArray]);

  


  return (
		<div className={styles.audioplayerContainer}>
      <audio ref={currentAudioRef} controls preload='auto'>
        <source src="http://localhost:8080/audio/Yeat_Poppin.mp3" type="audio/mp3"/>
      </audio>
		</div>
  );
};

export default AudioPlayer