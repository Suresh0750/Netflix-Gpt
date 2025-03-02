

import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GptMovieSuggestions = () => {
  const {gptSearchNames,gptMovies} = useSelector(store=>store.gpt)

  console.log(gptSearchNames,gptMovies)
  if(!gptSearchNames) return null
  return (
    <div className='p-4 m-4 bg-black text-white gap-2 bg-opacity-70'>
      <div>
        {
          gptSearchNames?.map((movieName,ind)=>(
           <MovieList key={movieName} title={movieName} movies={gptMovies[ind]?.results}/>
          ))
        }
      </div>
    </div>
  )
}

export default GptMovieSuggestions