import ButtonNext from '../ButtonNext';
import ButtonPlay from '../ButtonPlay';
import ButtonPrevious from '../ButtonPrevious';
import styles from './styles.module.scss';

const AudioControls = () => {
  return (
		<div className={styles.audiocontrolsContainer}>
      <ButtonPrevious />
      <ButtonPlay />
      <ButtonNext />
		</div>
  );
};

export default AudioControls