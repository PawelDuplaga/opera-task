import Slider from '@/components/Slider';
import styles from './styles.module.scss';
import AudioPlayer from '@/components/AudioPlayer';
import { Slide } from '@/lib/types/Slide';
import { slidesFetch } from '@/api/slides-fetch';

const Home = async () => {

  const slides: Slide[] | undefined = await slidesFetch();

  return (
		<div className={styles.homeContainer}>
      <Slider />
      <AudioPlayer />
		</div>
  );
};

export default Home