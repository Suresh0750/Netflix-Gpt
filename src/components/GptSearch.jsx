

import React from 'react'
import GptMovieSuggestions from './GptMovieSuggestions';
import GptSearchBar from './GptSearchBar';
import { BG_URL } from '../utils/constants';

const GptSearch = () => {
  return (
    <>
      <div>
        <div className='fixed -z-10 w-full'>
          <img
            src={BG_URL}
            alt="bg_img"
            className='h-screen object-cover w-full' 
                />
        </div>
        <div className='pt-[20%] md:pt-0'>
          <GptSearchBar />
          <GptMovieSuggestions />
        </div>
      </div>
    </>
  )
}

export default GptSearch; 