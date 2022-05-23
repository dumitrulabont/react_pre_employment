import React from 'react'

import {ISong} from '../types/ISong'
import {useNavigate} from "react-router-dom"

interface SongProps{
    song : ISong
    
}
export function Card({song} :SongProps ) {
  //navigate
  const navigate = useNavigate()


  function handleEdit(){
    navigate(`edit/${song.id}`)

  }
  const  deleteHandler = async () =>{

    navigate(`/delete/${song.id}/${song.name}`)

}
  return (
    <>
      
      
        <div>Title : {song.name} </div>
        <div>Album : {song.album}</div>
        <div>Artist : {song.artist}</div>
        <div>Genre : {song.genre}</div>
        
        <button className='btn btn-error' onClick={deleteHandler}>Delete</button>
        <button className='btn' onClick={handleEdit}>Edit</button>
        
    </>
  )
}
