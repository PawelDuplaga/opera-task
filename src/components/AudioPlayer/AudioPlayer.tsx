'use client'

import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';
import useSlides from '@/utils/hooks/useSlides';
import AudioControls from '../AudioControls';


const AudioPlayer = () => {
  
  const {frontSlideIndex, slides, isAudioPlaying, setIsPlaying} = useSlides();
  const [audioArray, setAudioArray] = useState<HTMLAudioElement[] | undefined>();
  const currentAudioRef = useRef<HTMLAudioElement | null>(null);

  const setAudioIsPaused = () => {
    setIsPlaying(false)
  }

  //mapping urls to Audio() object to preload begging of the audio for smooth transitions
  //adding listener to change play/stop icon when music stops
  useEffect(() => {
    const audioElements = slides.map((slideData) => new Audio(slideData.audio_url));
    audioElements.forEach(audioElement => {
      audioElement.preload = 'auto';
      audioElement.addEventListener("ended", setAudioIsPaused);
    });
    setAudioArray(audioElements);
    
    return () => {
      audioElements.forEach((audio) => {
        audio.removeEventListener('ended', setAudioIsPaused);
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


  //toggle Audio pause based on isAudioPlaying
  useEffect(() => {
    if(currentAudioRef.current !== null) {
      if(!isAudioPlaying && !currentAudioRef.current.paused) {
        currentAudioRef.current.pause()
      }
      if(isAudioPlaying && currentAudioRef.current.paused) {
        currentAudioRef.current.play()
      }
    }
  },[isAudioPlaying])


  return (
		<div className={styles.audioplayerContainer}>
      <AudioControls />
		</div>
  );
};

export default AudioPlayer