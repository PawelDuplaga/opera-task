import styles from './styles.module.scss';
import { TSlide } from '@/lib/types/Slide';
import SlideContextProvider from '@/context/slide-context';
import SongSnippetSlider from '@/components/SongSnippetSlider';
import axiosClient from "@/utils/axiosClient";
import ErrorPage from '@/components/ErrorPage';

const getSlides = async () => {
  try {
    const backendResponse = await axiosClient.get('/slides');
    const slides: TSlide[] = backendResponse.data;
    return slides
  } catch (error) {
    console.error("Cant collect the data from the server");
  }
}

const Home = async () => {

  const slides = await getSlides();

  if (!slides) return <ErrorPage />

  return (
    <SlideContextProvider slides={slides}>
      <div className={styles.homeContainer}>
        <SongSnippetSlider />
      </div>
    </SlideContextProvider >
  );
};

export default Home