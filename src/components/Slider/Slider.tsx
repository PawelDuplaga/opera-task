'use client'

import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { slidesVariants } from '@/lib/const/sliderConst';
import { getSlideClass } from '@/utils/sliderUtils';
import styles from './styles.module.scss';
import Slide from '../SlideImage';
import useSlides from '@/utils/hooks/useSlides';

const Slider = () => {
  const {frontSlideIndex, slides} = useSlides();
  const mappedSlides = useMemo(() => {
    return slides?.map((slideData, slideIndex) => (
        <motion.div 
          key={slideIndex} 
          className={styles.slideMotion} 
          transition={{ type: "spring", typstiffness: "100", bounce: 0.1 }}
          animate={getSlideClass(frontSlideIndex, slideIndex)}
          initial={getSlideClass(frontSlideIndex, slideIndex)}
          variants={slidesVariants}
          >
          <Slide imageUrl={slideData.image_url} album={slideData.album}/>
        </motion.div>
      ))},[slides, frontSlideIndex])

  return (
		<div className={styles.bigContainer}>
      <div className={styles.sliderContainer}>
        {mappedSlides}
      </div>
    </div>
  );
};

export default Slider