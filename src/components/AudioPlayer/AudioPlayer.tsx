'use client'

import styles from './styles.module.scss';
import useAudioPlayer from '@/utils/hooks/useAudio';
import ButtonPrevious from '../ButtonPrevious';
import ButtonPlay from '../ButtonPlay';
import ButtonNext from '../ButtonNext';
import { LuVolume2 } from 'react-icons/lu'
import { Slider } from '@mantine/core';

const AudioPlayer = () => {
  
  const { 
    previousAudio, 
    nextAudio, 
    isAudioPlaying, 
    setIsAudioPlaying,
    volume,
    setVolume } = useAudioPlayer();

  return (
		<div className={styles.audioplayerContainer}>
      <div className={styles.buttonsContainer}>
        <ButtonPrevious callback={previousAudio}/>
        <ButtonPlay callback={setIsAudioPlaying} isAudioPlaying={isAudioPlaying}/>
        <ButtonNext callback={nextAudio}/>
      </div>
      <div className={styles.volumeSliderContainer}>
        <LuVolume2 className={styles.volumeIcon}/>
        <Slider 
          classNames={{
            root: styles.sliderRoot,
            track: styles.sliderTrack,
            bar: styles.sliderBar,
            thumb: styles.sliderThumb
          }}
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={setVolume}
        />
      </div>
		</div>
  );
};

export default AudioPlayer