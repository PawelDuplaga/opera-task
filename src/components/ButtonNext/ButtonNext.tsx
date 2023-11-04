import useSlides from '@/utils/hooks/useSlides';
import styles from './styles.module.scss';
import { FaForward } from 'react-icons/fa';

type ButtonNextProps = {
  callback : any;
}


const ButtonNext = ({ callback } : ButtonNextProps) => {
  return (
		<button className={styles.buttonnextContainer} onClick={callback}>
      <FaForward className={styles.forwardIcon}/>
		</button>
  );
};

export default ButtonNext