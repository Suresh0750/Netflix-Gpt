import React, { useRef, useState } from "react";
import Lang from '../utils/languageConstents'
import { useSelector,useDispatch } from "react-redux";
import openai from "../utils/openai";
import toast, { Toaster } from 'react-hot-toast'
import { API_OPTIONS } from "../utils/constants";
import {addGptMovies} from '../utils/gptSlice'



const GptSearchBar = () => {

  const dispatch = useDispatch()
  const selectLanguage = useSelector((store)=>store?.config?.lang)
  const searchText = useRef(null)
  const [loading ,setLoading] = useState(false)


  const searchMovieTMDB = async (movie) => {
    try {
      const data = await  fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`, API_OPTIONS)
      const json = await data.json()
      return json
    } catch (error) {
      console.log(error?.message)
      toast.error(error?.message)
    }
  }

  // * 
  const handleSearchClick = async (e)=>{
    e.preventDefault()
    if(loading) return
    setLoading(true)

    const gptQuery =
    'Act as a movie recommendation system and suggest some movies for the query :' +
    searchText.current.value +
    'Give 5 movie names, comma seperated like the example result: Nanban, Vadachennai, Meiyazhagan, Petta, Billa'
    
    try {
      let gptResults = {
        choices : [{
          message :{
            content : `Nanban, Paruthiveeran, Naruto,LEO, Master`
          }
        }]
      }
      async function  main() {
         gptResults = await openai.chat.completions.create({
          messages: [{ role: 'user', content: gptQuery }],
          model: 'gpt-3.5-turbo',
        });
        console.log(gptResults,"gptResults")
      }

      if(!gptResults?.choices) {
          return toast(`Can't ! find the movie so search another movie`, {
            icon: '⚠️',
            style: {
              borderRadius: '10px',
              background: '#333',
              color: '#fff',
            },
          });
        }
        // * use row data beacuse open ai api reach limit
        let movie = ["Nanban","Paruthiveeran","Naruto","LEO","Master"]
        const data = movie.map((movie)=>searchMovieTMDB(movie))
        let tmtbResults =await Promise.all(data)
        console.log(tmtbResults,"tmtbResults");
       
        if(tmtbResults?.length){
          dispatch(addGptMovies({ movieNames:movie,movieResults: tmtbResults}))
        }
          
    } catch (error) {
      toast.error(error?.message)
    }finally{
      setLoading(false)
    }
    
  }
  return (
    <div className="pt-[10%] flex justify-center">
      <form onSubmit={(e)=>e.preventDefault()}  className="p-0 md:p-4 w-[90%] grid md:w-1/2 grid-cols-12  bg-black text-white">
        <input
          type="text"
          className="m-3 p-1 md:m-4 md:p-4 rounded col-span-9 text-black"
          placeholder={Lang?.[selectLanguage].gptSearchPlaceHolder}
          ref = {searchText}
        />
        <button className="rounded m-2 py-2 md:m-4 px-2 bg-red-700 col-span-3 md:rounded-lg  font-bold" onClick={handleSearchClick}>
            {
              Lang?.[selectLanguage]?.search
            }
         </button>
      </form>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default GptSearchBar;
