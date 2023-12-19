import  { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useDispatch,useSelector } from "react-redux";

// fetching the trailer video and updating the store
const useMovieTrailer = (movieId) => {
  console.log(movieId)
  const dispatch = useDispatch();
  const trailerVideo=useSelector(store=>store.movies.addTrailerVideo)

  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const Trailer = filterData.length ? filterData[0] : json.results[0];
    // console.log(Trailer);
    dispatch(addTrailerVideo(Trailer));
  };

   useEffect(() => {
  !trailerVideo &&   getMovieVideos();  
   });
};
export default useMovieTrailer;
