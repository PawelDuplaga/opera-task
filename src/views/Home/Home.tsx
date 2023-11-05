import styles from './styles.module.scss';
import { TSlide } from '@/lib/types/Slide';
import SlideContextProvider from '@/context/slide-context';
import SongSnippetSlider from '@/components/SongSnippetSlider';
import axiosClient from "@/utils/axiosClient";

const Home = async () => {

  let slides : TSlide [];
  try {
    const backendResponse = await axiosClient.get('/slides');
    slides = backendResponse.data;
  } catch (error) {
    throw new Error("Something went wrong!")
  }

  return (
    <SlideContextProvider slides={slides}>
      <div className={styles.homeContainer}>
        <SongSnippetSlider />
      </div>
    </SlideContextProvider >
  );
};

export default Home