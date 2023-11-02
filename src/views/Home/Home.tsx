import Slider from '@/components/Slider';
import styles from './styles.module.scss';

const Home = () => {
  return (
		<div className={styles.homeContainer}>
      <Slider />
		</div>
  );
};

export default Home