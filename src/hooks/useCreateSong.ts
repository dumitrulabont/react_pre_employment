import { useState } from "react";
import { ISongReq } from "../types/ISongReq";
import { postSong } from "../service/songService";

export const useCreateSong = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(false);

    const createSong = async (songReq: ISongReq) => {
        try {
            // setError(false);
            // setIsLoaded(false);
            await postSong(songReq)
            setIsLoaded(true)

        } catch (err) {
            console.log(err);
            setError(true);
            setIsLoaded(true);
        }
    };
    return {
        isLoaded,
        error,
        createSong,
    };
};
