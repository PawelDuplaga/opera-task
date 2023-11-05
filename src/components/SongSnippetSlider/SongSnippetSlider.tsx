import AudioInfo from '../AudioInfo';
import AudioPlayer from '../AudioPlayer';
import Slider from '../Slider';
import styles from './styles.module.scss';

const SongSnippetSlider = () => {
  return (
		<div className={styles.paddingContainer}>
      <div className={styles.songsnippetsliderContainer}>
          <Slider/>
          <AudioInfo />
          <AudioPlayer/>
      </div>
    </div>
  );
};

export default SongSnippetSlider