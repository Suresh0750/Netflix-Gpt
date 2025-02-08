import React from "react";
import Lang from '../utils/languageConstents'
import { useSelector } from "react-redux";
const GptSearchBar = () => {

  const selectLanguage = useSelector((store)=>store?.config?.lang)

  return (
    <div className="pt-[10%] flex justify-center">
      <form onSubmit={(e)=>e.preventDefault()}  className="p-4 grid w-1/2 grid-cols-12  bg-black text-white">
        <input
          type="text"
          className="m-4 p-4 rounded col-span-9 text-black"
          placeholder={Lang?.[selectLanguage].gptSearchPlaceHolder}
        />
        <button className="py-2 m-4 px-2 bg-red-700 col-span-3 rounded-lg  font-bold">
            {
              Lang?.[selectLanguage]?.search
            }
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
