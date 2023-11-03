'use client'

import React, { useEffect, useState, createContext } from 'react'

type ThemeContextProviderProps = {
    currentSlideSSR: number,
    
    children: React.ReactNode;
}

type SlideContextType = {
    currentSlide : number;
    previousSlide: () => void;
    nextSlide: () => void;
}


export const SlideContext = createContext<SlideContextType | null>(null)

const SlideContextProvider = ({ currentSlideSSR, children } : ThemeContextProviderProps) => {
    const [currentSlide, setCurrentSlide] = useState(currentSlideSSR);

    const previousSlide = () => 


}