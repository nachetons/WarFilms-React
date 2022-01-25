
import '@fortawesome/fontawesome-free/css/all.min.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { API_URL_CATEGORY, API_URL_POP, arrayMovies } from '@/diccionario/url.jsx'
import '@/styles/carrusel.css'
import '@/styles/categorias.css'
import '@/styles/footer.css'
import '@/styles/login.css'
import '@/styles/main.css'
import '@/styles/mediaquerys.css'
import '@/styles/navs.css'
import Footer from '@/components/fragments/footer'
import Navs from '@/components/fragments/navs/navs'
import ItemPelicula from './itemPeliculas'

const peliculas = ({ setIsAuth, isAuth }) => {
  const [movieList, setMovieList] = useState([])
  const [isLoading, setIsloading] = useState(false)

  const getMoviesFromAPIBy = (toFetch) =>
    // eslint-disable-next-line no-undef
    fetch(toFetch)
      .then(response => response.json())
      .then(responseConverted => responseConverted.results)

  function getMostPopularMovieList () {
    setIsloading(true)
    getMoviesFromAPIBy(API_URL_POP).then(result => {
      setMovieList(result)
      setIsloading(false)
    })
  }

  function filterMovieList (categoria, valoracionMin, valoracionMax) {
    setIsloading(true)
    getMoviesFromAPIBy(API_URL_CATEGORY + arrayMovies[categoria] + '&vote_average.gte=' + valoracionMin + '&vote_average.lte=' + valoracionMax + '&include_adult').then(result => {
      setMovieList(result)
      setIsloading(false)
    })
  }

  // https://api.themoviedb.org/3/discover/movie?api_key=[MY_KEY]&language=en-US&sort_by=release_date.desc&page=1&primary_release_date.gte=2002-01-01&primary_release_date.lte=2005-12-31&vote_average.gte=8&with_genres=35

  // Al estar vacio el array la función del useEffect es solo de montado, es decir, solo se
  // ejecuta la primera vez
  useEffect(getMostPopularMovieList, [])

  let categorys = 'action'
  function handleCategoryChange (category) {
    categorys = category
    console.log(categorys)
  }

  let votesMin = '4'
  function handleVoteMinChange (vote) {
    votesMin = vote
    console.log(votesMin)
  }

  let votesMax = '8'
  function handleVoteMaxChange (vote) {
    votesMax = vote
    console.log(votesMax)
  }

  return (
    <>

      <Navs setIsAuth={setIsAuth} isAuth={isAuth} />

      <div className='row' id='contenedor_main'>

        <h3 id='titulos' className='titulo'>Peliculas</h3>

        <div className='selects-filter'>
          <select onChange={(e) => handleCategoryChange(e.target.value)} defaultValue='action' id='select-form-category' className='select-forms'>
            <option lang='es' value='Action'>Accion</option>
            <option lang='de' value='Adventure'>Aventuras</option>
            <option lang='en' value='Animation'>Animacion</option>
            <option lang='fr' value='Comedy'>Comedia</option>
            <option lang='it' value='Crime'>Crimen</option>
          </select>

          <select onChange={(e) => handleVoteMinChange(e.target.value)} defaultValue='4' id='select-form-vote' className='select-forms'>
            <option lang='es' value='1'>1</option>
            <option lang='es' value='2'>2</option>
            <option lang='de' value='4'>4</option>
            <option lang='en' value='6'>6</option>
            <option lang='fr' value='8'>8</option>
            <option lang='fr' value='9'>9</option>

          </select>

          <select onChange={(e) => handleVoteMaxChange(e.target.value)} defaultValue='8' id='select-form-vote_max' className='select-forms'>
            <option lang='es' value='0'>0</option>
            <option lang='es' value='2'>2</option>
            <option lang='de' value='4'>4</option>
            <option lang='en' value='6'>6</option>
            <option lang='fr' value='8'>8</option>
            <option lang='fr' value='9'>9</option>

          </select>

          <button className='submit-filter' onClick={() => filterMovieList(categorys, votesMin, votesMax)}>Enviar</button>
        </div>
        <div className='peliculas' id='list_pelis'>

          {isLoading
            ? <p>Cargando...</p>
            : movieList.map(movie =>

              <Link key={movie.id} to={'/pelicula/' + movie.id}><div key={movie.id}><ItemPelicula key={movie.id} movieInfo={movie} /></div></Link>
            )}

        </div>
      </div>
      <Footer />
    </>

  )
}

export default peliculas
