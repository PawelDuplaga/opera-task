import useSlides from '@/utils/hooks/useSlides';
import styles from './styles.module.scss';
import { FaPlay, FaPause}  from 'react-icons/fa'

type ButtonPlayProps = {
  callback: any;
  isAudioPlaying: boolean;
}


const ButtonPlay = ({ callback, isAudioPlaying } : ButtonPlayProps) => {
  return (
		<button 
      className={styles.buttonplayContainer} 
      onClick={() => callback(!isAudioPlaying)}
      test-id="play-stop-button"
      >
      { !isAudioPlaying ? 
        <FaPlay className={styles.playStopIcon}/>
          :
        <FaPause className={styles.playStopIcon}/>
      }
		</button>
  );
};

export default ButtonPlay