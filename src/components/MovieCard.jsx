import React from 'react'
import {IMG_CDN_URL} from '../utils/constants'

const MovieCard = ({id,poster_path,original_title}) => {
  
  return (
    <div  className='w-25 h-24 pr-2'>
      <img src={IMG_CDN_URL+poster_path} alt={original_title} />
    </div>
  )
}

export default MovieCard
