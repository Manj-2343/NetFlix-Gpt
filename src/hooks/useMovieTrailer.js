import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constant";
import { addTrailerVideo } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

const useMovieTrailer = async (movieId) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
 
  useEffect(() => {
    if (movieId) {
      // Check if movieId is truthy
      setLoading(true);
      const getMovieVideos = async () => {
        try {
          const data = await fetch(
            `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
            API_OPTIONS
          );
          const json = await data.json();
          const filteredData = json.results?.filter(
            (video) => video.type === "Trailer"
          );
          const trailer =
            filteredData && filteredData.length
              ? filteredData[0]
              : json.results[0];
          dispatch(addTrailerVideo(trailer));
        } catch (error) {
          console.error("Error fetching movie videos:", error);
        }
      };

      getMovieVideos();
    }
  }, [dispatch, movieId]);
};

export default useMovieTrailer;
