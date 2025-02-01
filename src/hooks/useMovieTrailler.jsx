
import { useDispatch } from "react-redux"
import { addMovieTrailer } from "../utils/moviesSlice"
import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constants"





const useMovieTrailer = (movieId)=>{

    console.log('call custome hook')
    const dispatch = useDispatch()

    const getMovieVideos = async ()=>{
        console.log('call inside the custoem hook')
      const data = await  fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS)
      const json = await data.json()
      const filterVideo = json?.results?.filter((data)=>data?.type=='Trailer')
      const mainVideo = filterVideo?.length ? filterVideo[0] : json?.results[0]
      console.log(mainVideo)
     dispatch(addMovieTrailer(mainVideo))
    }

    useEffect(()=>{
        getMovieVideos()
    },[])
    
}
    
export default useMovieTrailer;