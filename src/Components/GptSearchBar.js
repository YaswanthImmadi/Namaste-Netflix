import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openAi";
import { API_OPTIONS } from "../utils/Constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTmdb = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        { movie } +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    // console.log(searchText.current.value);
    // make an API call to OPENAI && get movie Results

    const gptQuery =
      "Act as a movie recommendation system and suggest some movies for the query" +
      searchText.current.value +
      ".only give me names of 5 movies,comma seperated like the example result given ahead.Example Result: Gadar,sholay,Don,Golmol,Koi milgaya";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    console.log(gptResults.choices);
    // Andaz Apna Apna, Hera Pehri, Chupke Chupke, Jane Bhi Dho yaaro, padosan
    if (!gptResults.choices) {
      // Some error Handling
    }
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
    // ["Andaz Apna Apna", "Hera Pehri", "Chupke Chupke", "Jane Bhi Dho yaaro", "padosan"]
    // For Each Movie call the TMDB Movie api and get the results
    const promiseArray = gptMovies.map((movie) => searchMovieTmdb(movie));
    // the data will not immediately have result inside it since it was an async function it takes time,but it will not wait and returns array of promises
    // [promise1,promise2,promise3,promise4,.... until the length of gptMovies]
    const tmdbResults = Promise.all(promiseArray);
    // the promise.all method suspends the code execution further until all promises are resolved
    dispatch(addGptMovieResult({movieNames:gptMovies,movieResults:tmdbResults}));
    // dispatched an action with movieName and MovieResults 
  };

  return (
    <div className="flex justify-center pt-[8%]">
      <form
        className="bg-black w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-3 m-4 col-span-9 rounded-md"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="py-1 px-2 ml-2 m-4 text-white bg-red-800 col-span-3 rounded-md"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
