import styles from './styles.module.scss';
import { TSlide } from '@/lib/types/Slide';
import { AudioSnippetData } from '@/lib/const/audioSnippetData';
import SlideContextProvider from '@/context/slide-context';
import SongSnippetSlider from '@/components/SongSnippetSlider';
import axiosClient from "@/utils/axiosClient";

const getSlides = async () => {
  
  try {
    const backendResponse = await axiosClient.get('/slides');
    const slides: TSlide[] = backendResponse.data;
    return slides
  } catch (error) {
    throw new Error("Something went wrong!")
  }
}

const getSlidesLocal = (): TSlide[] => {
  return AudioSnippetData.map((elem, index): TSlide => ({
    id: elem.id, // Replace with the actual type of elem.id
    artist: elem.artist, // Replace with the actual property name in elem
    title: elem.title, // Replace with the actual property name in elem
    album: elem.album, // Replace with the actual property name in elem
    image_url: `/images/${elem.imageName}`, // Replace with the actual property name in elem
    audio_url: `/audio/${elem.audioName}`, // Replace with the actual property name in elem
  }));
};

const Home = async () => {

  // const slides = await getSlides();
  const slides = getSlidesLocal();

  return (
    <SlideContextProvider slides={slides}>
      <div className={styles.homeContainer}>
        <SongSnippetSlider />
      </div>
    </SlideContextProvider >
  );
};

export default Home