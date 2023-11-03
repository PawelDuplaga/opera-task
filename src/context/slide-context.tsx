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
    isAudioPlaying : boolean;
    isNext : boolean;
    isPrevious: boolean;
    slides: TSlide[]
    previousSlide: () => void;
    nextSlide: () => void;
    setIsPlaying: (isPlaying: boolean) => void;
}


export const SlideContext = createContext<SlideContextType | null>(null)

const SlideContextProvider = ({ frontSlideIndexQueryParams = 3, slides, children } : ThemeContextProviderProps) => {
    const [frontSlideIndex, setFrontSlideIndex] = useState(frontSlideIndexQueryParams);
    const [isAudioPlaying, setIsAudioPlaying] = useState(false);

    const isPrevious = frontSlideIndex < slides.length - 1
    const isNext = frontSlideIndex > 0

    const previousSlide = () => {
        setFrontSlideIndex((current) => isPrevious ? current + 1 : current);
        setIsPlaying(true);
    }

    const nextSlide = () => {
        setFrontSlideIndex((current) => isNext ? current - 1 : 0);
        setIsPlaying(true);
    }

    const setIsPlaying = (isPlaying : boolean) => {
        setIsAudioPlaying(() => isPlaying)
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