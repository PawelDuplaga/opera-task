'use client'

import useSlides from '@/utils/hooks/useSlides';
import styles from './styles.module.scss';
import { motion } from 'framer-motion';
import { useMemo } from 'react';
import { getSlideClass } from '@/utils/sliderUtils';
import { artistVariants, titleVariants, albumVariants } from '@/lib/const/audioInfoConst';

const AudioInfo = () => {
  const { frontSlideIndex, slides } = useSlides();

  const mappedInfo = useMemo(() => {
    return slides?.map((slideData, slideIndex) => (
      <div key={slideIndex} className={styles.infoContainer}>
        <motion.p
          className={styles.artistMotion}
          transition={{ type: "spring", typstiffness: "100", bounce: 0.1, delay: 0 }}
          animate={getSlideClass(frontSlideIndex, slideIndex)}
          initial={getSlideClass(frontSlideIndex, slideIndex)}
          variants={artistVariants}
        >
          {slideData.artist}
        </motion.p>
        <motion.h2
          className={styles.titleMotion}
          transition={{ type: "spring", typstiffness: "100", bounce: 0.1, delay: 0.03 }}
          animate={getSlideClass(frontSlideIndex, slideIndex)}
          initial={getSlideClass(frontSlideIndex, slideIndex)}
          variants={titleVariants}
        >
          {slideData.title}
        </motion.h2>
        <motion.p
          className={styles.albumMotion}
          transition={{ type: "spring", typstiffness: "100", bounce: 0.1, delay: 0.06 }}
          animate={getSlideClass(frontSlideIndex, slideIndex)}
          initial={getSlideClass(frontSlideIndex, slideIndex)}
          variants={albumVariants}
        >
          <span style={{opacity:0.5}}>from </span><span>{slideData.album}</span>
        </motion.p>
      </div>
    ))
  }, [slides, frontSlideIndex])

  return (
		<div className={styles.audioinfoContainer}>
      {mappedInfo}
		</div>
  );
};

export default AudioInfo