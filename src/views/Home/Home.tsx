import Slider from '@/components/Slider';
import styles from './styles.module.scss';
import AudioPlayer from '@/components/AudioPlayer';
import { TSlide } from '@/lib/types/Slide';
import { slidesFetch } from '@/api/slides-fetch';
import SlideContextProvider from '@/context/slide-context';
import { redirect } from 'next/navigation'

type Props = {
  params: {},
  searchParams: { [key: string]: string | string[] | undefined },
}


const Home = async (props: Props) => {

  // const searchParams = props.searchParams;
  // if(!searchParams.index) redirect('?index=5')

  const slides: TSlide[] | null = await slidesFetch();
  if (slides === null) {
    throw new Error("An error occurred while processing your request. Please try again later.")
  }

  return (
		<div className={styles.homeContainer}>
      <SlideContextProvider 
        slides={slides}
        frontSlideIndexSSR={3}
      >
        <Slider/>
        <AudioPlayer slides={slides}/>
      </SlideContextProvider >
		</div>
  );
};

export default Home