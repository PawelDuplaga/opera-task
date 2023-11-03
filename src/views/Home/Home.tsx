import Slider from '@/components/Slider';
import styles from './styles.module.scss';
import AudioPlayer from '@/components/AudioPlayer';
import { TSlide } from '@/lib/types/Slide';
import { slidesFetch } from '@/api/slides-fetch';
import SlideContextProvider from '@/context/slide-context';
import { redirect } from 'next/navigation'


const Home = async () => {

  // const searchParams = props.searchParams;
  // if(!searchParams.index) redirect('?index=5')

  const slides: TSlide[] | null = await slidesFetch();
  if (slides === null) {
    throw new Error("An error occurred while processing your request. Please try again later.")
  }

  return (
    <SlideContextProvider slides={slides}>
      <div className={styles.homeContainer}>
        <Slider/>
        <AudioPlayer/>
      </div>
    </SlideContextProvider >
  );
};

export default Home