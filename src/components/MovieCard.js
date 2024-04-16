import React from "react";
import { IMAGE_CDN_URL } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-56">
      <img src={IMAGE_CDN_URL + posterPath} alt="Movie card" />
    </div>
  );
};

export default MovieCard;
