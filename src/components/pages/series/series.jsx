
import '@fortawesome/fontawesome-free/css/all.min.css'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { API_URL_TV_POP } from '@/diccionario/url.jsx'
import '@/styles/carrusel.css'
import '@/styles/categorias.css'
import '@/styles/footer.css'
import '@/styles/login.css'
import '@/styles/main.css'
import '@/styles/mediaquerys.css'
import '@/styles/navs.css'
import Footer from '@/components/fragments/footer'
import Navs from '@/components/fragments/navs/navs'
import ItemSerie from './itemSeries'








const series = ({ setIsAuth, isAuth }) => {
  const { categoria } = useParams();
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsloading] = useState(true);



  const getMoviesFromAPIBy = (toFetch) =>
    fetch(toFetch)
      .then(response => response.json())
      .then(responseConverted => responseConverted.results);

  function getMostPopularMovieList() {
    const xs = [];

    setIsloading(true);
    getMoviesFromAPIBy(API_URL_TV_POP).then(result => {
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

        <h3 id="titulos" className="titulo">Series</h3>

        <div className="peliculas" id="list_pelis">

          {isLoading ?
            <p>Cargando...</p>
            :

            movieList.map(serie =>

              <Link key={serie.id} to={'/serie/' + serie.name + '/' + serie.id}><div key={serie.id}><ItemSerie key={serie.id} movieInfo={serie} /></div></Link>
            )

          }

        </div>
      </div>
      <Footer />
    </>





  )



}


export default series;