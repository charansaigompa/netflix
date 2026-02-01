import React from 'react'
import GeneralSearchBar from './GeneralSearchBar'
import GeneralMovieSuggestions from './GeneralMovieSuggestions'
import { BG_URL } from '../utils/constants'
import lang from '../utils/languageConstants'
import { useSelector } from "react-redux";
import SearchVideoBackground from "./SearchVideoBackground";


const GeneralSearchPage = () => {
  const movieId = useSelector(
    (store) => store.search.searchTrailerMovieId
  );

  return (
    <>
    
       <div className="fixed inset-0 -z-10">
      <img
        className="h-full w-full object-cover"
        src="https://preview.redd.it/does-anyone-know-how-to-create-the-netflix-colored-lines-v0-zp69f0bdm13e1.jpeg?width=640&crop=smart&auto=webp&s=e8a501ff6eca78eaaa609f4b1c49eb0f232869fc"
        alt="background"
      />
    </div>
      {movieId ? (
        <SearchVideoBackground />
      ) : (
        <>
          <GeneralSearchBar />
          <GeneralMovieSuggestions />
        </>
      )}
      
    </>
  );
};

export default GeneralSearchPage;
