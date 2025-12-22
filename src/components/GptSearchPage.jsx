import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_URL } from '../utils/constants'
import lang from '../utils/languageConstants'


const GptSearchPage = () => {
  return (
    <div >

      
      <div className='fixed -z-10'>
        <img className='w-screen' src="https://i.vimeocdn.com/video/793529939-a4cbfc3f5767d848613512b0e29c3fda475343fff88130a6df49575d3849a720-d" alt="" />
      </div>
      <GptSearchBar/>
      <GptMovieSuggestions/>

    </div>
  )
}

export default GptSearchPage
