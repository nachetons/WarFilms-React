//Nuestra key
import {API_KEYS} from '../../config.js';


const API_KEY = API_KEYS;

//Dominio base
const URL_BASE = 'https://api.themoviedb.org/3/';

//Las mas populares
const API_URL_POP = URL_BASE + 'discover/movie?sort_by=popularity.desc&include_adult=false&include_video=false&page=1&' + API_KEY;

//Las mas votadas con mas de 300 votos
const API_URL_RATED = URL_BASE + 'discover/movie?sort_by=vote_average.desc&vote_count.gte=300&page=1&' + API_KEY;

//Metodo para obtener la fecha de 3 meses antes
let date = new Date();
let day = `0${date.getDate()}`.slice(-2);
let month = `0${date.getMonth() - 2}`.slice(-2);
let year = date.getFullYear();
const last3months = year + "-" + month + "-" + day;


//Lo mas nuevo en los ultimos 3 meses
const API_URL_NEW = URL_BASE + 'discover/movie?primary_release_date.gte=' + last3months + '&include_adult=false&include_video=false&page=1&' + API_KEY;





//Busqueda por palabra de pelicula
const SEARCH_URL_MOVIE = URL_BASE + 'search/movie?query=';

//Busqueda por palabra de serie
const SEARCH_URL_TV = URL_BASE + 'search/tv?query=';

//Para coger la foto
const URL_IMG = "https://image.tmdb.org/t/p/w500";

//Mostrar todos los videos de una serie por id
//URL_BASE + 'tv/' + busqueda + "?" + API_KEY + "&append_to_response=videos"


//Busqueda por categoria
const API_URL_CATEGORY = URL_BASE + 'discover/movie?sort_by=popularity.desc&vote_count.gte=2000&'+API_KEY+'&with_genres='

//Array con el id de todos los generos de las peliculas
const arrayMovies = {
    "Action":28,
    "Adventure":12,
    "Animation":16,
    "Comedy":35,
    "Crime":80,
    "Documentary":99,
    "Drama":18,
    "Family":10751,
    "Fantasy":14,
    "History":36,
    "Horror":27,
    "Music":10402,
    "Mystery":9,
    "Romance":10749,
    "Thriller":53,
    "War":10752,
    "Action & Adventure":10759,
    "Western":37,
    "Science Fiction": 878
  };

  export {API_KEY,URL_BASE,API_URL_POP,API_URL_RATED,API_URL_NEW,SEARCH_URL_MOVIE,SEARCH_URL_TV,URL_IMG,API_URL_CATEGORY,arrayMovies};