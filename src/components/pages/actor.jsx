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


import Login from "../fragments/login";
import Navs from "../fragments/navs/navs";
import Footer from "../fragments/footer";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const actor = ({ setIsAuth, isAuth }) => {
  const { id } = useParams();

  const URL_ACTOR = URL_BASE+"person/"+id+"?"+ API_KEY +"&append_to_response=movie_credits";

  //LAMADA ACTORES DE LAS PELICULAS
  const [actorMovieList, setActorMovieList] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  const getActorsFromAPIBy = (toFetch) =>
    fetch(toFetch)
      .then((response) => response.json())
      .then((responseConverted) => responseConverted);

  function getActorMovieList() {
    setIsloading(true);
    getActorsFromAPIBy(URL_ACTOR).then((result) => {

      setActorMovieList(result);
      setIsloading(false);
    });
  }

  

  //Al estar vacio el array la función del useEffect es solo de montado, es decir, solo se
  //ejecuta la primera vez
  useEffect(() => {
    
    getActorMovieList();
  }, [id]);

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
        
          <div key={actorMovieList.id} className="container" id="listas_pelis">
            <div className="contenedor-pelicula">
              <img
                id="foto"
                src={URL_IMG + actorMovieList.profile_path}
                style={{ width: "35%", height: "70%" }}
              />
              <div className="content_film" id={actorMovieList.id}>
                <h3 className="titulo">{actorMovieList.name}</h3>
                <p className="descripcion">{actorMovieList.biography}</p>
                <div className="youtube-wrapper">
                  <div className="trailer">

                  {actorMovieList.movie_credits.cast.map((movie) => (
                    
                   <div key={movie.id}className="name">{movie.title}</div>
                 

                  ))}
                    <strong id="mytrailer"></strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
       
      )}

      <Footer />
    </>
  );
};

export default actor;
