export const LOGO="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-12-03/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
export const ProfileIMG="https://tse1.mm.bing.net/th/id/OIP.u3aU45q2Pcum--knQuaiSwHaHa?pid=Api&P=0&h=180"
export const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;
export const url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=${TMDB_API_KEY}&language=en-US&page=1';
export const API_Options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwODkyOGUzMmVlNzY2NGExZDJmZjMyNTI3OTc2YWVmNyIsIm5iZiI6MTc2NjA4MDU2Mi40OTcsInN1YiI6IjY5NDQ0MDMyM2RlODFkNjRiNmFjZTQzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h6yN2QgriaLbf3DQjS5tVvMUpwpmHSLazRqdoTyOPSI'
  }
};