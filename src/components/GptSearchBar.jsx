import React from "react";
import Lang from '../utils/languageConstents'

const GptSearchBar = () => {
  return (
    <div className="pt-[10%] flex justify-center">
      <form onSubmit={(e)=>e.preventDefault()}  className="p-4 grid w-1/2 grid-cols-12  bg-black text-white">
        <input
          type="text"
          className="m-4 p-4 rounded col-span-9 text-black"
          placeholder={Lang?.hindi?.gptSearchPlaceHolder}
        />
        <button className="py-2 m-4 px-2 bg-red-700 col-span-3 rounded-lg  font-bold">
            {
              Lang?.hindi?.search
            }
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
