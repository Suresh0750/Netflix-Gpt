import React, { useEffect } from 'react'
import Header from './Header'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import useNowPlayingMovies from '../hooks/useNowPlaying'
import usePopularMovies from '../hooks/usePopularMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import GptSearch from './GptSearch'



const Browse = () => {

  const navigate = useNavigate()
  const userData = useSelector((state)=>state.user)
  const showGptSearch = useSelector((store)=>store.gpt.showGptSearch)


  useNowPlayingMovies();
  usePopularMovies();

  // * handle login user
  useEffect(()=>{
    if(!userData){
      navigate('/')
    }
  },[])


  return (
    <div>
      <Header />
      {
        showGptSearch ? (
          <GptSearch />
        ) : (
          <>
          <MainContainer />
          <SecondaryContainer />
          </>
        )
      }
      
    </div>
  )
}

export default Browse