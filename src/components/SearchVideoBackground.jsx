import { useDispatch, useSelector } from "react-redux";
import useSearchMovieTrailer from "../hooks/useSearchMovieTrailer";
import { clearSearchTrailer } from "../utils/searchSlice";

const SearchVideoBackground = () => {
  const dispatch = useDispatch();
  const { searchTrailerMovieId, searchTrailer } = useSelector(
    (store) => store.search
  );

  useSearchMovieTrailer(searchTrailerMovieId);

  if (!searchTrailer) return null;

  return (
    <div className="relative w-screen">
      <button
        onClick={() => dispatch(clearSearchTrailer())}
        className="absolute top-5 left-70 z-50 bg-black text-white px-4 py-2 rounded"
      >
        ⬅ Back
      </button>

      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${searchTrailer.key}?autoplay=1&mute=1&controls=0`}
        allow="autoplay; encrypted-media"
      />
    </div>
  );
};

export default SearchVideoBackground;
