'use client'

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './styles.module.scss';
import Slide from '../Slide';

type slidesState = "left" | "front" | "right"

const variants = {
  left: { opacity: 0.2, scale: 0.8, zIndex: 2 },
  front : {opacity: 1, scale: 1, x: 0, zIndex: 3 },
  right : {opacity: 1, scale: 1, x: 400, zIndex: 4 }
}

const Slider = () => {

  const slides = [1,2,3,4,5,6,7,8,9,10];
  const [frontSlideIndex, setFrontSlideIndex] = useState(1);

  const mappedSlides = useMemo(() => {
    return slides.map((data, key) => {
      const state: slidesState = key < frontSlideIndex ? 
                                "left" : key === frontSlideIndex ? "front" : "right";
      return (
      <motion.div 
        key={key} 
        className={styles.slideMotion} 
        transition={{ type: "spring", typstiffness: "100", bounce: 0.1 }}
        onAnimationComplete={() => key === frontSlideIndex ? console.log("Play", key) : null}
        animate={state}
        variants={variants}
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