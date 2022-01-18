import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { API_KEY, SEARCH_URL_MOVIE } from '../../../diccionario/url.jsx';
import '../../../styles/busquedas.css';
import Footer from '../../fragments/footer';
import Navs from '../../fragments/navs/navs';
import ItemBusqueda from './itemBusqueda';





const busquedas = ({ setIsAuth, isAuth }) => {
  const { title } = useParams();
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const URL_SEARCH = SEARCH_URL_MOVIE + title + "&" + API_KEY


  useEffect(getMostPopularMovieList, []);


  const getMoviesFromAPIBy = (toFetch) =>
    fetch(toFetch)
      .then(response => response.json())
      .then(responseConverted => responseConverted.results);

  function getMostPopularMovieList() {
    const xs = [];

    setIsloading(true);
    getMoviesFromAPIBy(URL_SEARCH).then(result => {
      if (result.length < 6) {
        result.map(item => {
          xs.push(item);
        });
      } else {
        for (let i = 0; i <= 6; i++) {

          xs.push(result[i]);
        }
      }

      setMovieList(xs);
      setIsloading(false);
    })
  }


  return (
    <>

      <Navs setIsAuth={setIsAuth} isAuth={isAuth} />

      <div className="container2">
        <div className="row" id="listas_pelis">

          {isLoading ?
            <p>Cargando...</p>
            :

            movieList.map(movie =>

              <Link style={{ textDecoration: 'none' }} key={movie.id} to={'/pelicula/' + movie.original_title + '/' + movie.id}><div key={movie.id}><ItemBusqueda key={movie.id} movieInfo={movie} /></div></Link>
            )

          }

          <button className="btn_mas">Mostrar mas</button>
        </div>
      </div>


      <Footer />

    </>
  )


}

export default busquedas;