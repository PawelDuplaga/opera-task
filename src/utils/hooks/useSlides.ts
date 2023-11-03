import { SlideContext } from "@/context/slide-context";
import { useContext } from "react";

const useSlides = () => {
    const context = useContext(SlideContext);
    if (context === null){
        throw new Error(
            "useTheme must be used within a SlideContextProvider"
        );
    }

    return context;
}

export default useSlides