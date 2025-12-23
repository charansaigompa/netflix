import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSearchTrailer } from "../utils/searchSlice";
import { API_Options } from "../utils/constants";

const useSearchMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!movieId) return;

    const getTrailer = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_Options
      );
      const json = await data.json();

      const trailer =
        json.results?.find((v) => v.type === "Trailer") || json.results[0];

      dispatch(setSearchTrailer(trailer));
    };

    getTrailer();
  }, [movieId]);
};

export default useSearchMovieTrailer;
