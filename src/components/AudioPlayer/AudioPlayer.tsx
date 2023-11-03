'use client'

import { AudioHTMLAttributes, useRef, useState } from 'react';
import styles from './styles.module.scss';

const AudioPlayer = () => {

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  

  return (
		<div className={styles.audioplayerContainer}>
      <audio ref={audioRef} controls>
        <source src='http://localhost:8080/audio/Yeat_Poppin.mp3' type="audio/mp3"/>
      </audio>
		</div>
  );
};

export default AudioPlayer