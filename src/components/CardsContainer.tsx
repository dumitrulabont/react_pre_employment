import React from 'react'
import { Card } from './Card'
import {ISong} from '../types/ISong'

interface SongsDataProps {
    isLoaded: Boolean,
    songs: ISong[],
    error: boolean,
}
export function CardsContainer({ isLoaded, songs, error } :SongsDataProps) {

    // console.log("CardsContainer : isLoaded = " + isLoaded);
    if (!isLoaded) {
        return (
            <div>
                <h3>Is Loading ... </h3>
            </div>
        )
    }
    if(error){
        return (
            <div> There is an error : {error} </div>
        )
    }
    return (
        <div className='mt-8 grid grid-cols-3 gap-x-40 gap-y-4'>
            {songs.map((song : ISong) => {
                return <div className='border-2 border-solid rounded-lg ' key={song.id}><Card song={song}/></div>
            })}
        </div>
    )



}
