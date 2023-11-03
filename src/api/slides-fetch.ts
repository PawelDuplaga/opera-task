import axiosClient from "@/utils/axiosClient";
import { Slide } from "@/lib/types/Slide";

export const slidesFetch = async () => {
    
    try {
        const response = await axiosClient.get('/slides');
        console.log(response.data);
        const slides: Slide[] = response.data
        return slides;
    } catch (error) {
        console.error(error);
    }
}
