
import { useDispatch, useSelector } from "react-redux"
import { addMovieTrailer } from "../utils/moviesSlice"
import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constants"





const useMovieTrailer = (movieId)=>{

    const trailerVideo = useSelector((store)=>store.movies.trailerVideo)

    const dispatch = useDispatch()

    const getMovieVideos = async ()=>{
      const data = await  fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS)
      const json = await data.json()
      const filterVideo = json?.results?.filter((data)=>data?.type=='Trailer')
      const mainVideo = filterVideo?.length ? filterVideo[0] : json?.results[0]
     dispatch(addMovieTrailer(mainVideo))
    }

    useEffect(()=>{
       !trailerVideo&&getMovieVideos()
    },[])
    
}
    
export default useMovieTrailer;