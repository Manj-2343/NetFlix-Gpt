import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpComingMovie from "../hooks/useUpComingMovie";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";
const Browse = () => {
  const showGPTSearchView = useSelector((store) => store.gpt.showGptSearch);
  // fetch data from TMDB api and update teh store
  useNowPlayingMovies();
  usePopularMovies();
  useUpComingMovie();
  useTopRatedMovies();
  return (
    <div>
      <Header />
      {showGPTSearchView ? ( 
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
