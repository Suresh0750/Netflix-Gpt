

import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryContainer = () => {
  const movies = useSelector((store)=>store.movies)  

  return (
    <div className=' -mt-35 relative z-10'>
        <MovieList title={'Now Playing Movie'} movies={movies?.nowPlayingMovie} /> 
        <MovieList title={'Trending'} movies={movies?.nowPlayingMovie} /> 
        <MovieList title={'Popular'} movies={movies?.nowPlayingMovie} /> 
        <MovieList title={'Horenrs'} movies={movies?.nowPlayingMovie} /> 
    </div>
  )
}

export default SecondaryContainer;

