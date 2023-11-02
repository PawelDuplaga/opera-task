import { slideState } from "@/lib/types/slidesState"

export const getSlideClass = (frontSlideIndex: number, currentSlideIndex: number) : slideState => {
    if (currentSlideIndex < frontSlideIndex) return "left"
    if (currentSlideIndex > frontSlideIndex) return "right"
    return "front"
}

