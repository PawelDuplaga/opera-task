import useSlides from '@/utils/hooks/useSlides';
import styles from './styles.module.scss';
import { FaBackward }  from 'react-icons/fa'

type ButtonPreviousProps = {
  callback : any;
}

const ButtonPrevious = ({ callback } : ButtonPreviousProps) => {
  return (
		<button className={styles.buttonpreviousContainer} onClick={callback}>
      <FaBackward className={styles.previousIcon}/>
		</button>
  );
};

export default ButtonPrevious