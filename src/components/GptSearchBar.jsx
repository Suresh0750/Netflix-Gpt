import React, { useRef, useState } from "react";
import Lang from '../utils/languageConstents'
import { useSelector } from "react-redux";
import openai from "../utils/openai";
const GptSearchBar = () => {

  const selectLanguage = useSelector((store)=>store?.config?.lang)
  const searchText = useRef(null)
  const [loading ,setLoading] = useState(false)

  // * 
  const handleSearchClick = (e)=>{
    e.preventDefault()
    if(loading) return
    setLoading(true)

    const gptQuery =
    'Act as a movie recommendation system and suggest some movies for the query :' +
    searchText.current.value +
    'Give 5 movie names, comma seperated like the example result: Nanban, Vadachennai, Meiyazhagan, Petta, Billa'

    try {
      async function main() {
        const chatCompletion = await openai.chat.completions.create({
          messages: [{ role: 'user', content: gptQuery }],
          model: 'gpt-3.5-turbo',
        });
        console.log(chatCompletion)
      }
      
      main();
    } catch (error) {
      console.log(error?.message)
    }finally{
      setLoading(false)
    }
    
  }
  return (
    <div className="pt-[10%] flex justify-center">
      <form onSubmit={(e)=>e.preventDefault()}  className="p-4 grid w-1/2 grid-cols-12  bg-black text-white">
        <input
          type="text"
          className="m-4 p-4 rounded col-span-9 text-black"
          placeholder={Lang?.[selectLanguage].gptSearchPlaceHolder}
          ref = {searchText}
        />
        <button className="py-2 m-4 px-2 bg-red-700 col-span-3 rounded-lg  font-bold" onClick={handleSearchClick}>
            {
              Lang?.[selectLanguage]?.search
            }
         </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
