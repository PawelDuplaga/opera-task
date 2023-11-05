'use client'

import styles from './styles.module.scss';
import useAudioPlayer from '@/utils/hooks/useAudio';
import ButtonPrevious from '../ButtonPrevious';
import ButtonPlay from '../ButtonPlay';
import ButtonNext from '../ButtonNext';


const AudioPlayer = () => {
  
  const { 
    previousAudio, 
    nextAudio, 
    isAudioPlaying, 
    setIsAudioPlaying} = useAudioPlayer();

  return (
		<div className={styles.audioplayerContainer}>
      <div className={styles.buttonsContainer}>
        <ButtonPrevious callback={previousAudio}/>
        <ButtonPlay callback={setIsAudioPlaying} isAudioPlaying={isAudioPlaying}/>
        <ButtonNext callback={nextAudio}/>
      </div>
		</div>
  );
};

export default AudioPlayer