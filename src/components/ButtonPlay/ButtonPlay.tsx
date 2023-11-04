import useSlides from '@/utils/hooks/useSlides';
import styles from './styles.module.scss';
import { FaPlay, FaPause}  from 'react-icons/fa'

type ButtonPlayProps = {
  callback: any;
  isAudioPlaying: boolean;
}


const ButtonPlay = ({ callback, isAudioPlaying } : ButtonPlayProps) => {
  return (
		<button className={styles.buttonplayContainer} onClick={() => callback(!isAudioPlaying)}>
      { !isAudioPlaying ? 
        <FaPlay className={styles.playIcon}/>
          :
        <FaPause className={styles.pauseIcon}/>
      }
		</button>
  );
};

export default ButtonPlay