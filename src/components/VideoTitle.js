import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[21%] px-12 absolute bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-50 leading-tight mb-4 ">
        {title}
      </h1>
      <p className="text-lg text-gray-50 leading-relaxed w-full sm:w-3/4 md:w-1/2 lg:w-1/3">
        {overview}
      </p>
      <div className="my-4 flex space-x-4">
        <button className="bg-red-700 hover:bg-red-800  font-bold py-2 px-4 rounded opacity-60">
          <span className="flex text-gray-50">
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6l-8-6Z"
                clipRule="evenodd"
              />
            </svg>
            Play
          </span>
        </button>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded opacity-60">
          <span className="flex text-gray-50">
            <svg
              class="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke-width="2"
                d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            MoreInfo
          </span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
