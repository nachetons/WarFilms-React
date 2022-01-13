import logo from "../../images/1.jpg";
import {
  API_KEY,
  URL_BASE,
  SEARCH_URL_MOVIE,
  URL_IMG,
  API_URL_ACTORS,
} from "../../diccionario/url.jsx";

import "../../styles/main.css";
import "../../styles/navs.css";
import "../../styles/footer.css";
import "../../styles/carrusel.css";
import "../../styles/login.css";
import "../../styles/pelicula.css";
import "../../styles/mediaquerys.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../styles/mediaquerys.css";
import 'react-alice-carousel/lib/alice-carousel.css';


import AliceCarousel from 'react-alice-carousel';
import Login from "../fragments/login";
import Navs from "../fragments/navs/navs";
import Footer from "../fragments/footer";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const pelicula = ({ setIsAuth, isAuth }) => {
  const { title, id } = useParams();

  const URL_BUSQUEDA = SEARCH_URL_MOVIE + title + "&" + API_KEY;
  const URL_TRAILER =
    URL_BASE +
    "movie/" +
    id +
    "?" +
    API_KEY +
    "&append_to_response=videos&language=es-ES&us-US";
  const trailers = document.getElementById("mytrailer");
  const URL_ACTORS =
    URL_BASE + "movie/" + id + "?" + API_KEY + "&append_to_response=credits";

  //LLAMADA A LA PELICULA
  const [mostPopularMovieList, setMostPopularMovieList] = useState([]);
  const [isLoading, setIsloading] = useState(false);


  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 4 },
};



  const getMoviesFromAPIBy = (toFetch) =>
    fetch(toFetch)
      .then((response) => response.json())
      .then((responseConverted) => responseConverted.results);

  function getMostPopularMovieList() {
    const xs = [];

    setIsloading(true);
    getMoviesFromAPIBy(URL_BUSQUEDA).then((result) => {
      xs.push(result[0]);

      setMostPopularMovieList(xs);
      setIsloading(false);
    });
  }

  //LLAMADA AL TRAILER
  const [trailerMovieList, settrailerMovieList] = useState([]);
  const [isLoading2, setIsloading2] = useState(false);

  const getTrailersFromAPIBy = (toFetch) =>
    fetch(toFetch)
      .then((response) => response.json())
      .then((responseConverted) => responseConverted.videos.results);

  function getTrailerMovieList() {
    setIsloading2(true);
    getTrailersFromAPIBy(URL_TRAILER).then((result) => {
      settrailerMovieList(result);
      setIsloading2(false);
    });
  }

  //LAMADA ACTORES DE LAS PELICULAS
  const [actorMovieList, setActorMovieList] = useState([]);
  const [isLoading3, setIsloading3] = useState(false);

  const getActorsFromAPIBy = (toFetch) =>
    fetch(toFetch)
      .then((response) => response.json())
      .then((responseConverted) => responseConverted.credits.cast);

  function getActorMovieList() {
    setIsloading3(true);
    getActorsFromAPIBy(URL_ACTORS).then((result) => {
      console.log(URL_ACTORS);

      setActorMovieList(result);
      setIsloading3(false);
    });
  }

  //DISPLAY TRAILERS
  function displayTrailers(trailer) {
    setTimeout(() => {
      trailerMovieList.map((trailer) => {
        (trailer.type == "Trailer" && trailer.site == "YouTube") ||
        (trailer.name.includes("Trailer") && trailer.site == "YouTube")
          ? (document.getElementById("mytrailer").innerHTML = `<iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/${trailer.key}" 
            title="YouTube video player" 
            frameborder="0" 
            allow=
            "accelerometer;
            autoplay; 
            clipboard-write; 
            encrypted-media; 
            gyroscope; 
            picture-in-picture" 
            allowfullscreen>
            </iframe>`)
          : (document.getElementById("mytrailer").innerHTML = `<iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/_s4qXyZOJSQ" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer;
            autoplay; 
            clipboard-write; 
            encrypted-media; 
            gyroscope; 
            picture-in-picture" 
            allowfullscreen>
            </iframe>`);
      });
    }, 10);
  }

  

  //Al estar vacio el array la función del useEffect es solo de montado, es decir, solo se
  //ejecuta la primera vez
  useEffect(() => {
    getMostPopularMovieList();
    getTrailerMovieList();
    getActorMovieList();
  }, [title, id]);

  return (
    <>
      <Navs setIsAuth={setIsAuth} isAuth={isAuth} />

      {isLoading ? (
        <div key={1} className="container" id="listas_pelis">
          <div className="contenedor-pelicula">
            <img id="foto" src={logo} style={{ width: "35%" }} />
            <div className="content_film" id={1}>
              <div className="text_Film">
                <h3 className="titulo">Venom</h3>
                <p className="descripcion">un hombre mutante</p>
              </div>

              <div className="youtube-wrapper"></div>
            </div>
          </div>
          <div className="trailer">
            <strong id="mytrailer"></strong>
          </div>
        </div>
      ) : (
        mostPopularMovieList.map((movie) => (
          <div key={movie.id} className="container" id="listas_pelis">
            <div className="contenedor-pelicula">
              <img
                id="foto"
                src={URL_IMG + movie.poster_path}
                style={{ width: "35%" }}
              />
              <div className="content_film" id={movie.id}>
                <h3 className="titulo">{movie.original_title}</h3>
                <p className="descripcion">{movie.overview}</p>
                <div className="youtube-wrapper">
                  <div className="trailer">
                    <strong id="mytrailer"></strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      )}

      {isLoading2 ? <p>Cargando..</p> : displayTrailers(trailerMovieList)}

      {isLoading3 ? <p>Cargando..</p> 
      
      : 
      <AliceCarousel 
      autoPlay 
      autoPlayInterval={1000} 
      animationType="fadeout"
      disableDotsControls
      disableButtonsControls
      infinite
      responsive={responsive}
      className="slider_content">
          {
actorMovieList.filter(actor=>actor.profile_path).map(actor => 
 
    

  <>
    <div key={actor.id} className="contenedor-actor">
    <img
        id="foto"
        src={URL_IMG + actor.profile_path}
        style={{ width: "30%" }}
      />
        <h3 className="nombre_actor">{actor.name}</h3>
      <p className="descripcion">{actor.character}</p>              

    </div>
    </>



)






          }
      </AliceCarousel>
        }
     

      <Footer />
    </>
  );
};

export default pelicula;
