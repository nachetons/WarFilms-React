
import '@fortawesome/fontawesome-free/css/all.min.css'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { API_URL_CATEGORY, arrayMovies } from '../../../diccionario/url.jsx'
import '../../../styles/carrusel.css'
import '../../../styles/categorias.css'
import '../../../styles/footer.css'
import '../../../styles/login.css'
import '../../../styles/main.css'
import '../../../styles/mediaquerys.css'
import '../../../styles/navs.css'
import Footer from '../../fragments/footer'
import Navs from '../../fragments/navs/navs'
import ItemCategoria from './itemCategoria'



const categorias = ({ setIsAuth, isAuth }) => {
  const { categoria } = useParams();
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsloading] = useState(true);



  const URL_CATEGORY = API_URL_CATEGORY + arrayMovies[categoria];

  const getMoviesFromAPIBy = (toFetch) =>
    fetch(toFetch)
      .then(response => response.json())
      .then(responseConverted => responseConverted.results);

  function getMostPopularMovieList() {
    const xs = [];

    setIsloading(true);
    getMoviesFromAPIBy(URL_CATEGORY).then(result => {
      if (result.length < 19) {
        result.map(item => {
          xs.push(item);
        });
      } else {
        for (let i = 0; i <= 19; i++) {

          xs.push(result[i]);

        }
      }

      setMovieList(xs);
      setIsloading(false);
    })
  }



  //Al estar vacio el array la función del useEffect es solo de montado, es decir, solo se 
  //ejecuta la primera vez
  useEffect(getMostPopularMovieList, [categoria]);

  return (
    <>


      <Navs setIsAuth={setIsAuth} isAuth={isAuth} />


      <div className="row" id="contenedor_main">

        <h3 id="titulos" className="titulo">{categoria}</h3>

        <div className="peliculas" id="list_pelis">

          {isLoading ?
            <p>Cargando...</p>
            :

            movieList.map(movie =>

              <Link key={movie.id} to={'/pelicula/' + movie.original_title + '/' + movie.id}><div key={movie.id}><ItemCategoria key={movie.id} movieInfo={movie} /></div></Link>
            )

          }

        </div>
      </div>
      <Footer />
    </>





  )



}


export default categorias;

