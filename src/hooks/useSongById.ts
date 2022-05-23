import React, { useEffect, useState } from "react";
import { getSongById } from "../service/songService";
import { ISong } from "../types/ISong";

export function useSongById(id: string) {
  // console.log("id in useSongById "+id);
  
  //song, error, isLoaded
  const [song, setSong] = useState<ISong>({id : ""});
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    ;
    (async () => {
      setIsLoaded(false);
      setError(false);
      try {
        const data = await getSongById(id)
        setSong(data)

      } catch (err) {
        console.error(err)
        setError(true)
      }
      setIsLoaded(true)
    })();
  }, []);
  return {
    song,
    isLoaded,
    error,
    setSong
  }
}
