import Slider from '@/components/Slider';
import styles from './styles.module.scss';
import AudioPlayer from '@/components/AudioPlayer';
import { TSlide } from '@/lib/types/Slide';
import { slidesFetch } from '@/api/slides-fetch';

const Home = async () => {

  const slides: TSlide[] | null = await slidesFetch();
  if (slides === null) {
    throw new Error("An error occurred while processing your request. Please try again later.")
  }

  return (
		<div className={styles.homeContainer}>
      <Slider slides={slides}/>
      <AudioPlayer slides={slides}/>
		</div>
  );
};

export default Home