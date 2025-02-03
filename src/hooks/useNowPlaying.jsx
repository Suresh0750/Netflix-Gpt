import { useEffect } from "react";
import { useDispatch } from "react-redux"; 
import { API_OPTIONS, NOW_PLAYING_MOVIES } from '../utils/constants'
import { addNowPlayingMovie } from '../utils/moviesSlice'



const useNowPlayingMovies = ()=>{

    const dispatch = useDispatch()


    const getNowPlayMovies = async ()=>{
        fetch(NOW_PLAYING_MOVIES, API_OPTIONS)
      .then(res => res.json())
      .then(res => {
        const {results} = res
        dispatch(addNowPlayingMovie(results))
      })
      .catch(err => console.error(err));
      }

      useEffect(()=>{
        getNowPlayMovies()  
      },[])
    
}

//  https://api.themoviedb.org/3/person/popular
export default useNowPlayingMovies;
