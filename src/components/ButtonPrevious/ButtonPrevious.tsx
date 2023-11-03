import useSlides from '@/utils/hooks/useSlides';
import styles from './styles.module.scss';
import { FaBackward }  from 'react-icons/fa'

const ButtonPrevious = () => {
  const {previousSlide, isPrevious} = useSlides();
  return (
		<button className={styles.buttonpreviousContainer} onClick={previousSlide}>
      <FaBackward className={styles.previousIcon}/>
		</button>
  );
};

export default ButtonPrevious