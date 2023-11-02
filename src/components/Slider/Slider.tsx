'use client'

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './styles.module.scss';
import Slide from '../Slide';

type slideState = {
  state : "left" | "front" | "right";
}

const variants = {
  left: { opacity: 0.2, scale: 0.8, zIndex: 0 },
  front : {opacity: 1, scale: 1, x: 0, zIndex: 1 },
  right : {opacity: 1, scale: 1, x: 400, zIndex: 2 }
}

const Slider = () => {

  const slides = [1,2,3,4,5,6,7,8,9,10];
  const [frontSlideIndex, setFrontSlideIndex] = useState(1);

  const mappedSlides = useMemo(() => {
    return slides.map((data, key) => (
      <motion.div 
        key={key} 
        className={styles.slideMotion} 
        transition={{ type: "spring", stiffness: "50" }}
        variants={variants}
        >
        <Slide />
      </motion.div>
    ))
  },[slides])



  return (
		<div className={styles.sliderContainer}>
      {mappedSlides}
      <button>next</button>
      <button>previous</button>
		</div>
  );
};

export default Slider