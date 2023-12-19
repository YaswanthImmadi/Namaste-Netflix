import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BODY_LOGO } from "../utils/Constants";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img src={BODY_LOGO} className="h-screen w-screen object-cover" alt="logo" />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearch;
