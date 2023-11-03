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
    isAudioPlaying : boolean;
    slides: TSlide[]
    isNext : boolean;
    isPrevious: boolean;
    previousSlide: () => void;
    nextSlide: () => void;
    setIsPlaying: (isPlaying: boolean) => void;
}


export const SlideContext = createContext<SlideContextType | null>(null)

const SlideContextProvider = ({ frontSlideIndexQueryParams = 3, slides, children } : SlideContextProviderProps) => {
    const [frontSlideIndex, setFrontSlideIndex] = useState(frontSlideIndexQueryParams);
    const [isAudioPlaying, setIsAudioPlaying] = useState(false);

    const isPrevious = frontSlideIndex > 0
    const isNext = frontSlideIndex < slides.length - 1

    const previousSlide = () => {
        setFrontSlideIndex((current) => isPrevious ? current -1 : 0)
        setIsPlaying(true)
    }

    const nextSlide = () => {
        setFrontSlideIndex((current) => isNext ? current + 1 : current)
        setIsPlaying(true)
    }

    const setIsPlaying = (isPlaying : boolean) => {
        setIsAudioPlaying((current) => isPlaying)
    }

    return (
        <SlideContext.Provider value={{
            frontSlideIndex,
            slides,
            previousSlide,
            nextSlide,
            setIsPlaying,
            isNext,
            isPrevious,
            isAudioPlaying
        }}>
            {children}
        </SlideContext.Provider>
    )
}

export default SlideContextProvider