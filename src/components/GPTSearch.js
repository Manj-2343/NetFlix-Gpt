import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestion from "./GPTMovieSuggestion";
import { BACKGROUND_IMAGE } from "../utils/constant";

const GPTSearch = () => {
  return (
    <div className=" h-screen">
      <div className="absolute -z-10">
        <img
          src={BACKGROUND_IMAGE}
          alt="netflix image"
          className="h-screen w-screen opacity-80"
        />
      </div>
      <GPTSearchBar />
      <GPTMovieSuggestion />
    </div>
  );
};

export default GPTSearch;
