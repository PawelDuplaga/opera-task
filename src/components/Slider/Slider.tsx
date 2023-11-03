'use client'

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { slidesVariants } from '@/lib/const/sliderConst';
import { getSlideClass } from '@/utils/sliderUtils';
import styles from './styles.module.scss';
import Slide from '../Slide';


const Slider = () => {

  const slides = [1,2,3,4,5,6,7,8,9,10];
  const [frontSlideIndex, setFrontSlideIndex] = useState(3);

  const mappedSlides = useMemo(() => {
    return slides.map((data, slideIndex) => {

      return (
        <motion.div 
          key={slideIndex} 
          className={styles.slideMotion} 
          transition={{ type: "spring", typstiffness: "100", bounce: 0.1 }}
          onAnimationComplete={() => slideIndex === frontSlideIndex ? console.log("Play", slideIndex) : null}
          animate={getSlideClass(frontSlideIndex, slideIndex)}
          initial={getSlideClass(frontSlideIndex, slideIndex)}
          variants={slidesVariants}
          >
          <Slide />
        </motion.div>
      )})},[slides, frontSlideIndex])

  const toggleRight = () => {
    setFrontSlideIndex((current) => current < slides.length - 1 ? current + 1 : current)
  }

  const toggleLeft = () => {
    setFrontSlideIndex((current) => current > 0 ?  current - 1 : 0)
  }

  return (
		<div className={styles.bigContainer}>
      <div className={styles.sliderContainer}>
        {mappedSlides}
      </div>
      <div className={styles.buttonContainer}>
        <button onClick={toggleRight}>right</button>
        <button onClick={toggleLeft}>left</button>
      </div>
    </div>
  );
};

export default Slider