import "../../styles/main.css";
import "../../styles/navs.css";

import "../../styles/footer.css";
import "../../styles/carrusel.css";
import "../../styles/login.css";

import useOutsideClick from "../../tools/useOutSideClick";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Login from "../fragments/login.jsx";
import Navs from "../fragments/navs/navs.jsx";
import Header from "../fragments/header.jsx";
import Carrusel from "../fragments/carruseles/carruseles.jsx";
import Footer from "../fragments/footer";
import Trailer from "../fragments/trailer";

import {
  API_KEY,
  URL_BASE,
  SEARCH_URL_MOVIE,
  URL_IMG,
  API_URL_ACTORS,
} from "../../diccionario/url";

import { useState, useRef, useEffect } from "react";

const IndexPage = ({ setIsAuth, isAuth }) => {
  const [show, setShow] = useState(false);
  const [mostPopularMovieList, setMostPopularMovieList] = useState([]);
  const [mostRatedMovieList, setMostRatedMovieList] = useState([]);
  const [mostNewMovieList, setMostNewMovieList] = useState([]);
  const [id_trailer, setId_trailer] = useState({})


  const URL_TRAILER =
    URL_BASE +
    "movie/" +
    id_trailer +
    "?" +
    API_KEY +
    "&append_to_response=videos&language=es-ES&us-US";

  //LLAMADA AL TRAILER
  const [trailerMovieList, settrailerMovieList] = useState([]);
  const [isLoading2, setIsloading2] = useState(true);

  const getTrailersFromAPIBy = (toFetch) =>
    fetch(toFetch)
      .then((response) => response.json())
      .then((responseConverted) => responseConverted.videos.results);

  function getTrailerMovieList() {
    setIsloading2(true);
    getTrailersFromAPIBy(URL_TRAILER).then((result) => {
      console.log(URL_TRAILER);
      settrailerMovieList(result);
      setIsloading2(false);
    });
  }
  //DISPLAY TRAILERS
  function displayTrailers(trailer) {
    
      trailer.map((trailer) => {
        setTimeout(() => {
        (trailer.type == "Trailer" && trailer.site == "YouTube") ||
        trailer.name.includes("Trailer") ||
        (trailer.name.includes("Tráiler") && trailer.site == "YouTube")
          ? (document.getElementById("mytrailer").innerHTML = `<iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube-nocookie.com/embed/${trailer.key}" 
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
            src="https://www.youtube-nocookie.com/embed/_s4qXyZOJSQ" 
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

  const ref = useRef();
  useOutsideClick(ref, () => {
    if (show) setShow(false);
  });

  useEffect(() => {
    getTrailerMovieList();
    console.log(id_trailer);
  }, [id_trailer]);
  return (
    <>
      <div className="all_carrusel" ref={ref} style={{ position: "relative" }}>
        {show ? (
          <>
            <div
              className="iframe_index"
              onClick={() => setShow(!show)}
              style={{ position: "absolute" }}
            >
              <div className="youtube-wrappers">
                <div className="trailers">
                  <strong id="mytrailer"></strong>
                  {isLoading2 ? (
                    <p>Cargando..</p>
                  ) : (
                    displayTrailers(trailerMovieList)
                  )}
                </div>
              </div>
            </div>
          </>
        ) : null}

        <Navs setIsAuth={setIsAuth} isAuth={isAuth} />

        <Header />

        <Carrusel
          setMostPopularMovieList={setMostPopularMovieList}
          mostPopularMovieList={mostPopularMovieList}
          setMostRatedMovieList={setMostRatedMovieList}
          mostRatedMovieList={mostRatedMovieList}
          setMostNewMovieList={setMostNewMovieList}
          mostNewMovieList={mostNewMovieList}
          handleClick={setShow}
          setId_trailer={setId_trailer}
        />

        <Footer />
      </div>
    </>
  );
};

export default IndexPage;
