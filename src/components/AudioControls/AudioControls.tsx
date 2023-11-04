import useAudioPlayer from '@/utils/hooks/useAudio';
import ButtonNext from '../ButtonNext';
import ButtonPlay from '../ButtonPlay';
import ButtonPrevious from '../ButtonPrevious';
import styles from './styles.module.scss';

const AudioControls = () => {

  const { 
    previousAudio, 
    nextAudio, 
    isAudioPlaying, 
    setIsAudioPlaying} = useAudioPlayer();

  return (
		<div className={styles.audiocontrolsContainer}>
      <ButtonPrevious callback={previousAudio}/>
      <ButtonPlay callback={setIsAudioPlaying} isAudioPlaying={isAudioPlaying}/>
      <ButtonNext callback={nextAudio}/>
		</div>
  );
};

export default AudioControls