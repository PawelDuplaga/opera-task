'use client'

import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';
import { TSlide } from '@/lib/types/Slide';
import useUserInteraction from '@/utils/hooks/useUserInteraction';
import useSlides from '@/utils/hooks/useSlides';
import { preload } from 'react-dom';
import ButtonPlay from '../ButtonPlay';
import AudioControls from '../AudioControls';


const AudioPlayer = () => {
  
  // const userInteracted = useUserInteraction();
  const {frontSlideIndex, slides, isAudioPlaying, setIsPlaying} = useSlides();
  const [audioArray, setAudioArray] = useState<HTMLAudioElement[] | undefined>();
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

  useEffect(() => {
    if(currentAudioRef.current !== null) {
      if(isAudioPlaying === false && !currentAudioRef.current.paused) {
        currentAudioRef.current.pause()
      }
      else currentAudioRef.current.play()
    }
  },[isAudioPlaying])


  return (
		<div className={styles.audioplayerContainer}>
      <AudioControls />
		</div>
  );
};

export default AudioPlayer