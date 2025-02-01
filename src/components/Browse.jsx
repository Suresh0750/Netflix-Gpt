import React, { useEffect } from 'react'
import Header from './Header'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import useNowPlayingMovies from '../hooks/useNowPlaying'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import VideoBackground from './VideoBackground'



const Browse = () => {

  const navigate = useNavigate()
  const userData = useSelector((state)=>state.user)
  const movies = useSelector((state)=>state.movies)

  useNowPlayingMovies();

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
    </div>
  )
}

export default Browse