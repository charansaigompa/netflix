export const LOGO="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-12-03/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
export const ProfileIMG="https://tse1.mm.bing.net/th/id/OIP.u3aU45q2Pcum--knQuaiSwHaHa?pid=Api&P=0&h=180"
export const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;
export const Authorization_Key=import.meta.env.VITE_Authorization_Key;
export const BG_URL="https://assets.nflxext.com/ffe/siteui/vlv3/29b665f6-0a62-4745-b9c2-f617fb7eadc6/web/IN-en-20251208-TRIFECTA-perspective_c78aea89-8f13-4e2c-ba7a-f9b40f53bf8c_small.jpg"
export const url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=${TMDB_API_KEY}&language=en-US&page=1';
export const API_Options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: "Bearer "+Authorization_Key
  }
};

export const IMG_CDN="https://image.tmdb.org/t/p/w500/";
export const urlPopu="https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1"
export const urlTopRated="https://api.themoviedb.org/3/movie/top_rated?api_key=${TMDB_API_KEY}&language=en-US&page=1"
export const urlUpcoming="https://api.themoviedb.org/3/movie/upcoming?api_key=${TMDB_API_KEY}&language=en-US&page=1"
export const urlTrending="https://api.themoviedb.org/3/trending/movie/day?api_key=${TMDB_API_KEY}&language=en-US"

export const SUPPORTED_LANGUAGES=[
  {identifier:"en",name:"English"},
  {identifier:"hindi",name:"Hindi"},
  {identifier:"telugu",name:"Telugu"},
]
