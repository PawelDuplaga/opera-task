import useSlides from '@/utils/hooks/useSlides';
import styles from './styles.module.scss';
import { FaPlay, FaPause}  from 'react-icons/fa'

const ButtonPlay = () => {

  const { setIsPlaying, isAudioPlaying } = useSlides();

  return (
		<button className={styles.buttonplayContainer} onClick={() => setIsPlaying(!isAudioPlaying)}>
      { !isAudioPlaying ? 
        <FaPlay className={styles.playIcon}/>
          :
        <FaPause className={styles.pauseIcon}/>
      }
		</button>
  );
};

export default ButtonPlay