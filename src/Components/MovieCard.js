import React from 'react'
import {IMG_CDN_URL} from "../utils/Constants"
import VideoBackground from './VideoBackground';
import { useDispatch } from 'react-redux';
import { addMovieId } from '../utils/movieSlice';


const MovieCard = ({posterPath,movieId}) => {

    const dispatch=useDispatch();
  

  if(!posterPath) return null;

  const handleMovieClick=(movieId)=>{
    dispatch(addMovieId(movieId))
  }
  return (
    <div className='w-40 pr-6'>
      <img alt="Movie Card" src={IMG_CDN_URL+posterPath} className='cursor-pointer' onClick={()=>handleMovieClick(movieId)}  />
    </div>
  )
}

export default MovieCard
