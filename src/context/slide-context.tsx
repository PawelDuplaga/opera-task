'use client'

import React, { useEffect, useState, createContext } from 'react'

type ThemeContextProviderProps = {
    children: React.ReactNode;
}

type SlideContextType = {
    currentSlide : number;
    previousSlide: () => void;
    nextSlide: () => void;
}


export const SlideContext = createContext<SlideContextType | null>(null)