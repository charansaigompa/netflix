import { useDispatch, useSelector } from "react-redux";
import useSearchMovieTrailer from "../hooks/useSearchMovieTrailer";
import { clearSearchTrailer } from "../utils/searchSlice";
import ShimmerForVideo from "./ShimmerForVideo";
import { useState } from "react";


const SearchVideoBackground = () => {
  const dispatch = useDispatch();
  const { searchTrailerMovieId, searchTrailer } = useSelector(
    (store) => store.search
  );
   const [videoLoaded, setVideoLoaded] = useState(false);

  useSearchMovieTrailer(searchTrailerMovieId);

  if (!searchTrailer) return <ShimmerForVideo/>;

  return (
    <div className="relative w-screen aspect-video bg-black">
      <button
        onClick={() => dispatch(clearSearchTrailer())}
        className="absolute top-7 left-70 z-50  bg-red-700 text-white px-4 py-2 rounded"
      >
         Back
      </button>

      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${searchTrailer.key}?autoplay=1&controls=0`}
        allow="autoplay; encrypted-media"
      />
    </div>
  );
};

export default SearchVideoBackground;
