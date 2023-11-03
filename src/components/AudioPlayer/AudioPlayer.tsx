'use client'

import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';
import { TSlide } from '@/lib/types/Slide';
import useUserInteraction from '@/utils/hooks/useUserInteraction';
import useSlides from '@/utils/hooks/useSlides';
import { preload } from 'react-dom';


const AudioPlayer = () => {
  
  // const userInteracted = useUserInteraction();
  const {frontSlideIndex, slides} = useSlides();
  const [audioArray, setAudioArray] = useState<HTMLAudioElement[] | undefined>();
  const [isPlaying, setIsPlaying] = useState(false);
  const currentAudioRef = useRef<HTMLAudioElement | null>(null);

  //mapping urls to Audio() object to preload begging of the audio for smooth transitions
  useEffect(() => {
    const audioElements = slides.map((slideData) => new Audio(slideData.audio_url));
    audioElements.forEach(audioElement => {
      audioElement.preload = 'auto';
    });
    setAudioArray(audioElements);
    
    return () => {
      audioElements.forEach((audio) => {
        audio.pause();
        audio.remove();
      });
    }
  }, [slides]);

  //this useEffect manages autoplay on slide change
  useEffect(() => {
    if (audioArray) {
      audioArray?.forEach(audioElement => audioElement.pause());
      currentAudioRef.current = audioArray[frontSlideIndex];
      currentAudioRef.current.currentTime = 0;
      currentAudioRef.current.play();
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