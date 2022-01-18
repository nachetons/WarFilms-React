//Nuestra key
import { API_KEYS } from "../../config.js";

const API_KEY = API_KEYS;

//Dominio base
const URL_BASE = "https://api.themoviedb.org/3/";

//Las mas populares
const API_URL_POP =
  URL_BASE +
  "discover/movie?sort_by=popularity.desc&include_adult=false&include_video=false&page=1&" +
  API_KEY;

//Las mas votadas con mas de 300 votos
const API_URL_RATED =
  URL_BASE +
  "discover/movie?sort_by=vote_average.desc&vote_count.gte=300&page=1&" +
  API_KEY;

//Series mas populares
const API_URL_TV_POP = URL_BASE + "tv/popular?" + API_KEY + "&page=1";

//Peliculas por venir
const API_URL_UPCOMING = URL_BASE + "movie/upcoming?" + API_KEY;
//api.themoviedb.org/3/movie/upcoming?api_key=<<api_key>>&language=en-US&page=1
//Metodo para obtener la fecha de 3 meses antes
https: var d = new Date();
d.setMonth(d.getMonth() - 3);
const oldTime = d.toISOString().slice(0, 10);

var n = new Date();
const newTime = n.toISOString().slice(0, 10);

//var dateChanged= lastmonths.replace("/", "-");

//Lo mas nuevo en los ultimos 3 meses
const API_URL_NEW =
  URL_BASE +
  "discover/movie?primary_release_date.gte=" +
  oldTime +
  "&primary_release_date.lte=" +
  newTime +
  "&include_video=false&page=1&" +
  API_KEY;

//Busqueda por palabra de pelicula
const SEARCH_URL_MOVIE = URL_BASE + "search/movie?query=";

//Busqueda por palabra de serie
const SEARCH_URL_TV = URL_BASE + "search/tv?query=";

//Para coger la foto
const URL_IMG = "https://image.tmdb.org/t/p/w500";

//Mostrar todos los videos de una serie por id
//URL_BASE + 'tv/' + busqueda + "?" + API_KEY + "&append_to_response=videos"

//Busqueda por categoria
const API_URL_CATEGORY =
  URL_BASE +
  "discover/movie?sort_by=popularity.desc&vote_count.gte=100&" +
  API_KEY +
  "&with_genres=";

const API_URL_ACTORS = URL_BASE + "movie/"; //550?api_key=###&append_to_response=credits

//Array con el id de todos los generos de las peliculas
const arrayMovies = {
  Action: 28,
  Adventure: 12,
  Animation: 16,
  Comedy: 35,
  Crime: 80,
  Documentary: 99,
  Drama: 18,
  Family: 10751,
  Fantasy: 14,
  History: 36,
  Horror: 27,
  Music: 10402,
  Mystery: 9,
  Romance: 10749,
  Thriller: 53,
  War: 10752,
  "Action & Adventure": 10759,
  Western: 37,
  "Science Fiction": 878,
};

//https://api.themoviedb.org/3/discover/movie?api_key=[MY_KEY]&language=en-US&sort_by=release_date.desc&page=1&primary_release_date.gte=2002-01-01&primary_release_date.lte=2005-12-31&vote_average.gte=8&with_genres=35

export {
  API_URL_UPCOMING,
  API_URL_ACTORS,
  API_KEY,
  URL_BASE,
  API_URL_POP,
  API_URL_TV_POP,
  API_URL_RATED,
  API_URL_NEW,
  SEARCH_URL_MOVIE,
  SEARCH_URL_TV,
  URL_IMG,
  API_URL_CATEGORY,
  arrayMovies,
};
