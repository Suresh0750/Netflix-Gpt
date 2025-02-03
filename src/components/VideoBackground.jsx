

import React from 'react'
import {useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailler'

const VideoBackground = ({movieId}) => {

  useMovieTrailer(movieId)
  const trailer = useSelector((store)=>store?.movies?.trailerVideo)
  return (
    <div className='w-screen overflow-hidden'>
      <iframe
       className='w-screen aspect-video overflow-hidden'
       src={`https://www.youtube.com/embed/${trailer?.key}?si=sgS7uJP_Jp1fHSx4&autoplay=1&mute=1`}
       title="YouTube video player"  
       autoPlay="1"
       allow='autoplay; encrypted-media'
       referrerPolicy="strict-origin-when-cross-origin" 
       >
       </iframe>
    </div>
  )
}

export default VideoBackground;