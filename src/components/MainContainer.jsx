

import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'
const MainContainer = () => {

    const movies = useSelector((state)=>state?.movies?.nowPlayingMovie)
    if(!movies) return

    const mainMovie = movies?.[0]
    const {original_title,overview,id} = mainMovie

    return (
        <div className='relative w-[100%] z-20 h-screen overflow-hidden'>
            <VideoTitle title={original_title} overview={overview}/>
            <VideoBackground movieId={id} />        
        </div>
    )
}

export default MainContainer;