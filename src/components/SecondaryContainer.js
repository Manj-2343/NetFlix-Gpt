import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <>
      {movies && (
        <div className="bg-black">
          <div className="-mt-42 relative pl-6 z-20">
            <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
            <MovieList title={"TopRated"} movies={movies.topRatedMovies} />
            <MovieList title={"Popular"} movies={movies.popularMovies} />
            <MovieList title={"UpComing"} movies={movies.upComingMovies} />
          </div>
        </div>
      )}
    </>
  );
};

export default SecondaryContainer;
