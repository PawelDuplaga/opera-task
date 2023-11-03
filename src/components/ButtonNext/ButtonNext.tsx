import useSlides from '@/utils/hooks/useSlides';
import styles from './styles.module.scss';
import { FaForward } from 'react-icons/fa';

const ButtonNext = () => {
  const { nextSlide, isNext } = useSlides();
  return (
		<button className={styles.buttonnextContainer} onClick={nextSlide}>
      <FaForward className={styles.forwardIcon}/>
		</button>
  );
};

export default ButtonNext