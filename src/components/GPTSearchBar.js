import React from "react";
import lang from "../utils/languageConstant";
import { useSelector } from "react-redux";

const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);

  return (
    <div className="max-w-md mx-auto pt-[10%]">
      <form className="flex items-center  rounded-lg overflow-hidden shadow-md">
        <input
          type="text"
          className="px-4 py-2 flex-1 outline-none text-gray-700"
          placeholder={lang[langKey].gptSearchPlaceHolder}
        />
        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 transition duration-300 ease-in-out">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
