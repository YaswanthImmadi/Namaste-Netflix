import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movieId = useSelector((store) => store?.movies.movieId);
  console.log(movieId)
  if (movieId === null) return; // early return if the length of movies is null then dont execute/render further
  // const mainMovie = movies[0];
  // console.log(mainMovie);
  const title='Surgical Strike'
  const {  overview ,id} = movieId;
  return (
    <div>
      <VideoTitle title={title} overview={overview} />
      <VideoBackground movieId={movieId} />
    </div>
  );
};

export default MainContainer;
