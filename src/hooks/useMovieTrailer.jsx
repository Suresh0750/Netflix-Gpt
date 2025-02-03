
import { useDispatch } from "react-redux"
import { addMovieTrailer } from "../utils/moviesSlice"
import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constants"





const useMovieTrailer = (movieId)=>{

    const dispatch = useDispatch()

    const getMovieVideos = async ()=>{
      const data = await  fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS)
      const json = await data.json()
      const filterVideo = json?.results?.filter((data)=>data?.type=='Trailer')
      const mainVideo = filterVideo?.length ? filterVideo[0] : json?.results[0]
     dispatch(addMovieTrailer(mainVideo))
    }

    useEffect(()=>{
        getMovieVideos()
    },[])
    
}
    
export default useMovieTrailer;