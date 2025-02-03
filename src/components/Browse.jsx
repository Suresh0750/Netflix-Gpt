import React, { useEffect } from 'react'
import Header from './Header'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import useNowPlayingMovies from '../hooks/useNowPlaying'
import usePopularMovies from '../hooks/usePopularMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'



const Browse = () => {

  const navigate = useNavigate()
  const userData = useSelector((state)=>state.user)


  useNowPlayingMovies();
  usePopularMovies();

  // * handle login user
  useEffect(()=>{
    if(!userData){
      navigate('/')
    }
  },[])

  /*
  Maincontainer 
      - video
      - Title
  
  Secondary container
      - Movies List
      - Cards list
  */

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse