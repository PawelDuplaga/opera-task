import Slider from '@/components/Slider';
import styles from './styles.module.scss';
import AudioPlayer from '@/components/AudioPlayer';
import { TSlide } from '@/lib/types/Slide';
import { slidesFetch } from '@/api/slides-fetch';

const Home = async () => {

  const slides: TSlide[] | undefined = await slidesFetch();

  return (
		<div className={styles.homeContainer}>
      <Slider slides={slides}/>
      <AudioPlayer />
		</div>
  );
};

export default Home