
import {API_OPTIONS, POPULAR_MOVIES} from '../utils/constants'
import {useDispatch} from 'react-redux'
import {addPopularMovies} from '../utils/moviesSlice'
import { useEffect } from 'react'


const usePopularMovies = ()=>{
    const dispatch = useDispatch()
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
        getPopularMovies()  
    },[])
}


export default usePopularMovies;