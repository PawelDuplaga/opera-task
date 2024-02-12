'use client'

import styles from './styles.module.scss';
import { TSlide } from '@/lib/types/Slide';
import { AudioSnippetData } from '@/lib/const/audioSnippetData';
import SlideContextProvider from '@/context/slide-context';
import SongSnippetSlider from '@/components/SongSnippetSlider';
import { useEffect, useState } from 'react';
import ErrorPage from '@/components/ErrorPage';
import Spin from '@/components/Spin';
import axios from 'axios';

const Home = () => {

  const [slides, setSlides] = useState<TSlide[]>();
  const [error, setError] = useState(null);

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
  useEffect(() => {
    axios
      .get('/api/slides') // proxy in next.js.config
      .then(response => {
        setSlides(response.data);
      })
      .catch(error => {
        setError(error);
      });
  },[])


  return (
    <div className={styles.homeContainer}>
    {error ? (
      <ErrorPage />
    ) : slides ? (
      <SlideContextProvider slides={slides}>
          <SongSnippetSlider />
      </SlideContextProvider >
    ) : (
      <div className={styles.loading}>
        <Spin />
      </div>
    )}
  </div>
  );
};

export default Home