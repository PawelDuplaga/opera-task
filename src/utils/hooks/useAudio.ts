import { useCallback, useEffect, useState } from 'react'
import useSlides from './useSlides';

const useAudioPlayer = () => {

    const {
        frontSlideIndex, 
        previousSlide, 
        nextSlide, 
        slides, 
        isNext, 
        isPrevious } = useSlides();
    const [audioArray, setAudioArray] = useState<HTMLAudioElement[] | undefined>();
    const [isAudioPlaying, setIsAudioPlaying] = useState(false);
    const [volume, setVolume] = useState(0.5);

    const setAudioIsPaused = () => {
        setIsAudioPlaying(false)
    }

    //mapping Audio elements to preload audio
    //adding event listener soo app knows if current audio stopped playing
    useEffect(() => {
        const audioElements = slides.map((slideData) => new Audio(slideData.audio_url));
        audioElements.forEach(audioElement => {
          audioElement.preload = 'auto';
          audioElement.addEventListener("ended", setAudioIsPaused);
        });
        setAudioArray(audioElements);
        
        return () => {
          audioElements.forEach((audio) => {
            audio.removeEventListener('ended', setAudioIsPaused);
            audio.pause();
            audio.remove();
          });
        }
    }, [slides]);

    //toggle stop / play
    useEffect(() => {
        if(audioArray){
            isAudioPlaying ? 
            audioArray[frontSlideIndex].play() : audioArray[frontSlideIndex].pause()
        }
    },[isAudioPlaying])

    //manage volume change
    useEffect(() => {
        if(audioArray){
            audioArray[frontSlideIndex].volume = volume;
        }
    }, [audioArray, volume, frontSlideIndex])

    //switch to next Audio
    const nextAudio = useCallback(() => {
        if (audioArray && isNext){
            nextSlide()
            setIsAudioPlaying(true)
            audioArray[frontSlideIndex].pause();
            audioArray[frontSlideIndex+1].currentTime = 0;
            audioArray[frontSlideIndex+1].play();
        }   
    },[audioArray, isNext, nextSlide, frontSlideIndex])

    //switch to previous Audio
    const previousAudio = useCallback(() => {
        if (audioArray && isPrevious){
            previousSlide()
            setIsAudioPlaying(true)
            audioArray[frontSlideIndex].pause();
            audioArray[frontSlideIndex-1].currentTime = 0;
            audioArray[frontSlideIndex-1].play();
        }   
    },[audioArray, isPrevious, previousSlide, frontSlideIndex])



    return {
        isAudioPlaying,
        setIsAudioPlaying,
        nextAudio,
        previousAudio,
        volume,
        setVolume
    }
}

export default useAudioPlayer;