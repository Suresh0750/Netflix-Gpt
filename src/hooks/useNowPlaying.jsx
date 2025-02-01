import { useEffect } from "react";
import { useDispatch } from "react-redux"; 
import { API_OPTIONS } from '../utils/constants'
import { addNowPlayingMovie } from '../utils/moviesSlice'



const useNowPlayingMovies = ()=>{

    const dispatch = useDispatch()


    const getNowPlayMovies = async ()=>{
        fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
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


export default useNowPlayingMovies;
