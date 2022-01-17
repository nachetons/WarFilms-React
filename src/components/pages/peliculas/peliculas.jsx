
import logo from '../../../images/1.jpg'
import { API_URL_CATEGORY, arrayMovies, API_URL_POP, URL_BASE, API_KEY } from '../../../diccionario/url.jsx'
import '../../../styles/main.css'
import '../../../styles/navs.css'
import '../../../styles/footer.css'
import '../../../styles/carrusel.css'
import '../../../styles/login.css'
import '../../../styles/categorias.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../../../styles/mediaquerys.css'


import Login from '../../fragments/login'
import Navs from '../../fragments/navs/navs'
import Footer from '../../fragments/footer';
import ItemPelicula from './itemPeliculas';



import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'


const peliculas = ({ setIsAuth, isAuth }) => {
  const { categoria } = useParams();
  
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [categorias, setCategoria] = useState([categoria]);



  const getMoviesFromAPIBy = (toFetch) =>
    fetch(toFetch)
      .then(response => response.json())
      .then(responseConverted => responseConverted.results);

  function getMostPopularMovieList() {
    const xs = [];

    setIsloading(true);
    getMoviesFromAPIBy(API_URL_POP).then(result => {
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



  function filterMovieList(categoria, valoracionMin, valoracionMax) {
    const xs = [];

    setIsloading(true);
    getMoviesFromAPIBy(API_URL_CATEGORY + arrayMovies[categoria] + "&vote_average.gte=" + valoracionMin + "&vote_average.lte=" + valoracionMax + "&include_adult").then(result => {
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




  //https://api.themoviedb.org/3/discover/movie?api_key=[MY_KEY]&language=en-US&sort_by=release_date.desc&page=1&primary_release_date.gte=2002-01-01&primary_release_date.lte=2005-12-31&vote_average.gte=8&with_genres=35


  //Al estar vacio el array la función del useEffect es solo de montado, es decir, solo se 
  //ejecuta la primera vez
  useEffect(getMostPopularMovieList, []);



  let categorys = "action";
  function handleCategoryChange(category) {
    categorys = category;
    console.log(categorys);
  }

  let votes_min = "4";
  function handleVoteMinChange(vote) {
    votes_min = vote;
    console.log(votes_min);
  }

  let votes_max = "8";
  function handleVoteMaxChange(vote) {
    votes_max = vote;
    console.log(votes_max);
  }



  return (
    <>


      <Navs setIsAuth={setIsAuth} isAuth={isAuth} />


      <div className="row" id="contenedor_main">

        <h3 id="titulos" className="titulo">Peliculas</h3>

        <div className="selects-filter">
          <select onChange={(e) => handleCategoryChange(e.target.value)} defaultValue={'action'} id="select-form-category" className="select-forms">
            <option lang="es" value="Action">Accion</option>
            <option lang="de" value="Adventure">Aventuras</option>
            <option lang="en" value="Animation">Animacion</option>
            <option lang="fr" value="Comedy">Comedia</option>
            <option lang="it" value="Crime">Crimen</option>
          </select>

          <select onChange={(e) => handleVoteMinChange(e.target.value)} defaultValue={'4'} id="select-form-vote" className="select-forms">
            <option lang="es" value="1">1</option>
            <option lang="es" value="2">2</option>
            <option lang="de" value="4">4</option>
            <option lang="en" value="6">6</option>
            <option lang="fr" value="8">8</option>
            <option lang="fr" value="9">9</option>

          </select>


          <select onChange={(e) => handleVoteMaxChange(e.target.value)} defaultValue={'8'} id="select-form-vote_max" className="select-forms">
            <option lang="es" value="0">0</option>
            <option lang="es" value="2">2</option>
            <option lang="de" value="4">4</option>
            <option lang="en" value="6">6</option>
            <option lang="fr" value="8">8</option>
            <option lang="fr" value="9">9</option>

          </select>

          <button className="submit-filter" onClick={() => filterMovieList(categorys, votes_min, votes_max)}>Enviar</button>
        </div>
        <div className="peliculas" id="list_pelis">

          {isLoading ?
            <p>Cargando...</p>
            :

            movieList.map(movie =>

              <Link key={movie.id} to={'/pelicula/' + movie.original_title + '/' + movie.id}><div key={movie.id}><ItemPelicula key={movie.id} movieInfo={movie} /></div></Link>
            )

          }

        </div>
      </div>
      <Footer />
    </>





  )



}


export default peliculas;

