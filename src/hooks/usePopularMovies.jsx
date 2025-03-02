
import {API_OPTIONS, POPULAR_MOVIES} from '../utils/constants'
import {useDispatch, useSelector} from 'react-redux'
import {addPopularMovies} from '../utils/moviesSlice'
import { useEffect } from 'react'


const usePopularMovies = ()=>{
    const dispatch = useDispatch()
    const popularMovies = useSelector((store)=>store.movies.popularMovies)


    const getPopularMovies = async ()=>{
        try {
            const popularMovies = await fetch(POPULAR_MOVIES,API_OPTIONS)
            const json =await popularMovies.json()
            dispatch(addPopularMovies(json?.results))

        } catch (error) {
            console.log(error?.message)
        }
    }
    useEffect(()=>{
        !popularMovies&&getPopularMovies()  
    },[])
}


export default usePopularMovies;