import { useEffect, useState } from "react";
import { ISong } from "../types/ISong";
import { getSongs } from "../service/songService";

export const useGetSongs = (url: string) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [songs, setSongs] = useState<Array<ISong>>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    // console.log("Render main");
    
    (async () => {
      setIsLoaded(false);
      setError(false);
      try {
        const data = await getSongs(url);
        setSongs(data);
        // console.log("Songs data : =====>");
        // console.log(songs);
      } catch (err) {
        console.error(err);
        setError(true);
      }
      setIsLoaded(true);
    })();
  }, [url]);

  return {
    isLoaded,
    songs,
    error,
  };
};
