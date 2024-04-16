import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  
  return (
    
    <div className="px-6 py-3 ">
      <h1 className="text-lg text-gray-50 md:text-2xl lg:text-2xl font-bold  mb-4">
        {title}
      </h1>
      <div className="flex overflow-x-scroll ">
        <div className="flex gap-2 ">
          {movies &&
            movies.map((movie, index) => (
              <MovieCard key={index + 1} posterPath={movie.poster_path} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
