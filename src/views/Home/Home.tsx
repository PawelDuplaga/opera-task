'use client'

import styles from './styles.module.scss';
import { TSlide } from '@/lib/types/Slide';
import SlideContextProvider from '@/context/slide-context';
import SongSnippetSlider from '@/components/SongSnippetSlider';
import { useEffect, useState } from 'react';
import ErrorPage from '@/components/ErrorPage';
import Spin from '@/components/Spin';
import axios from 'axios';

const Home = () => {

  const [slides, setSlides] = useState<TSlide[]>();
  const [error, setError] = useState(null);

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