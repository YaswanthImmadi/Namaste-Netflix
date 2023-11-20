import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BODY_LOGO } from '../utils/Constants'

const GptSearch = () => {
  return (
    <div>
         <div className="fixed -z-10">
        <img
          src={BODY_LOGO}
          alt="logo"
        />
      </div>
        <GptSearchBar/>
        <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch
