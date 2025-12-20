import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_URL } from '../utils/constants'
import lang from '../utils/languageConstants'


const GptSearchPage = () => {
  return (
    <div>

      <h1>GPT Search Page</h1>
      <div className='absolute -z-10'>
        <img src={BG_URL} alt="" />
      </div>
      <GptSearchBar/>
      <GptMovieSuggestions/>

    </div>
  )
}

export default GptSearchPage
