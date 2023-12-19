import React, { useState, useRef } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // console.log(movies);
  // const sliderRef = useRef(null);
  // const [scrollX, setScrollX] = useState(0);

  // const handleScroll = (scrollOffset) => {
  //   const newX = scrollX + scrollOffset;
  //   sliderRef.current.scrollLeft = newX;
  //   setScrollX(newX);
  // };
  return (
    <div className="px-6">
      <h1 className="text-3xl py-4 text-white ">{title}</h1>
      <div className="flex overflow-x-auto">
        <div className="flex">
          
          { movies &&  movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} movieId={movie.id}  />
          ))}
          {/* <div
            ref={sliderRef}
            className="flex space-x-4 transition-transform duration-300"
          >
            {movies.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))}
          </div>
          <button
            onClick={() => handleScroll(-200)} // Adjust the scroll offset as needed
            className="absolute font-bold text-lg top-0 bottom-0 left-0 z-10 bg-gray-800 text-white px-4 py-2"
          >
            &lt;
          </button>
          <button
            onClick={() => handleScroll(200)} // Adjust the scroll offset as needed
            className="absolute font-bold text-lg top-0 bottom-0 right-0 z-10 bg-gray-800 text-white px-4 py-2"
          >
            &gt;
          </button> */}
        </div>
      </div>
    </div>
    // </div>
  );
};

export default MovieList;
