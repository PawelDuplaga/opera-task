'use client'

import { TSlide } from '@/lib/types/Slide';
import React, { useState, createContext } from 'react'

type ThemeContextProviderProps = {
    frontSlideIndexQueryParams?: number,
    slides: TSlide[]
    children: React.ReactNode;
}

type SlideContextType = {
    frontSlideIndex : number;
    slides: TSlide[]
    previousSlide: () => void;
    nextSlide: () => void;
}


export const SlideContext = createContext<SlideContextType | null>(null)

const SlideContextProvider = ({ frontSlideIndexQueryParams = 0, slides, children } : ThemeContextProviderProps) => {
    const [frontSlideIndex, setFrontSlideIndex] = useState(frontSlideIndexQueryParams);

    const previousSlide = () => {
        setFrontSlideIndex((current) => current < slides.length - 1 ? current + 1 : current)
    }

    const nextSlide = () => {
        setFrontSlideIndex((current) => current > 0 ?  current - 1 : 0)
    }

    return (
        <SlideContext.Provider value={{
            frontSlideIndex,
            slides,
            previousSlide,
            nextSlide
        }}>
            {children}
        </SlideContext.Provider>
    )
}

export default SlideContextProvider