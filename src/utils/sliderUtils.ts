import { SlideState } from "@/lib/types/SlidesState"

export const getSlideClass = (frontSlideIndex: number, currentSlideIndex: number) : SlideState => {
    if (currentSlideIndex < frontSlideIndex) return "left"
    if (currentSlideIndex > frontSlideIndex) return "right"
    return "front"
}

