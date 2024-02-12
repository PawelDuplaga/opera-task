'use client'

import { TSlide } from '@/lib/types/Slide';
import React, { useState, createContext } from 'react'

type SlideContextProviderProps = {
    frontSlideIndexQueryParams?: number,
    slides: TSlide[]
    children: React.ReactNode;
}

type SlideContextType = {
    frontSlideIndex : number;
    slides: TSlide[]
    isNext : boolean;
    isPrevious: boolean;
    previousSlide: () => void;
    nextSlide: () => void;
}


export const SlideContext = createContext<SlideContextType | null>(null)

const SlideContextProvider = ({ frontSlideIndexQueryParams = 0, slides, children } : SlideContextProviderProps) => {
    
    const [frontSlideIndex, setFrontSlideIndex] = useState(frontSlideIndexQueryParams);

    const isPrevious = frontSlideIndex > 0
    const isNext = frontSlideIndex < slides.length - 1

    const previousSlide = () => {
        setFrontSlideIndex((current) => isPrevious ? current -1 : 0)
    }

    const nextSlide = () => {
        setFrontSlideIndex((current) => isNext ? current + 1 : current)
    }

    return (
        <SlideContext.Provider value={{
            frontSlideIndex,
            slides,
            previousSlide,
            nextSlide,
            isNext,
            isPrevious
        }}>
            {children}
        </SlideContext.Provider>
    )
}

export default SlideContextProvider