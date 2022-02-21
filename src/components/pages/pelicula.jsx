/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable no-undef */

import '@fortawesome/fontawesome-free/css/all.min.css'
import { useEffect, useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import { Link, useParams } from 'react-router-dom'
import {
  API_KEY, URL_BASE, URL_IMG
} from '@/diccionario/url.jsx'
import logo from '@/images/1.jpg'
import '@/styles/carrusel.css'
import '@/styles/footer.css'
import '@/styles/login.css'
import '@/styles/main.css'
import '@/styles/mediaquerys.css'
import '@/styles/navs.css'
import '@/styles/pelicula.css'
import imageNoLoad from '@/images/ImageNoLoad.jpg'
import Footer from '@/components/fragments/footer'
// import Navs from '@/components/fragments/navs/navs'
import addMovieLike from '@/components/functions/marcadores/addMovieLike'
import ItemTrailer from '@/components/fragments/itemTrailer'
import getMoviesLike from '../functions/marcadores/getMoviesLike'
import swal from 'sweetalert'
import translate from '../functions/translate'

const pelicula = ({ setIsAuth, isAuth }) => {
  // LLAMADA A LA PELICULA
  const [mostPopularMovieList, setMostPopularMovieList] = useState([])
  const [isLoading, setIsloading] = useState(true)

  // LLAMADA AL TRAILER
  const [trailerMovieList, settrailerMovieList] = useState([])
  const [isLoading2, setIsloading2] = useState(true)

  // LAMADA ACTORES DE LAS PELICULAS
  const [actorMovieList, setActorMovieList] = useState([])
  const [isLoading3, setIsloading3] = useState(true)

  const [movies, setMovies] = useState([])
  const [isLoading4, setIsloading4] = useState(true)

  const [textTranslate, setTextTranslate] = useState([])
  const [isLoading5, setIsloading5] = useState(true)

  const { title, id } = useParams()

  // Al estar vacio el array la función del useEffect es solo de montado, es decir, solo se
  // ejecuta la primera vez
  if (isAuth === false) {
    // return <Redirect to='/' />
    useEffect(() => {
      getMostPopularMovieList()
      getTrailerMovieList()
      getActorMovieList()
    }, [title, id])
  } else {
    useEffect(() => {
      getMostPopularMovieList()
      getTrailerMovieList()
      getActorMovieList()
      getMoviesLike(setMovies, setIsloading4)
      findMovieID()
    }, [title, id])
  }
  // const URL_BUSQUEDA = SEARCH_URL_MOVIE + title + '&' + API_KEY
  const URL_TRAILER =
    URL_BASE +
    'movie/' +
    id +
    '?' +
    API_KEY +
    '&append_to_response=videos'
  const URL_ACTORS =
    URL_BASE + 'movie/' + id + '?' + API_KEY + '&append_to_response=credits'

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 5 }
  }

  const getMoviesFromAPIBy = (toFetch) =>
    fetch(toFetch)
      .then((response) => response.json())
      .then((responseConverted) => responseConverted)

  function getMostPopularMovieList () {
    const xs = []

    setIsloading(true)
    getMoviesFromAPIBy(URL_ACTORS).then((result) => {
      xs.push(result)
      console.log(URL_ACTORS)

      setMostPopularMovieList(xs)
      const primeraSolicitud = result.overview.substring(0, 500)
      const segundaSolicitud = primeraSolicitud.substring(0, primeraSolicitud.lastIndexOf('.'))
      translate(segundaSolicitud, setTextTranslate, setIsloading5, 'en', 'es')
      setIsloading(false)
    })
  }

  const getTrailersFromAPIBy = (toFetch) =>
    fetch(toFetch)
      .then((response) => response.json())
      .then((responseConverted) => responseConverted.videos.results)

  function findMovieID () {
  // if movies.movie_id === id
    for (let i = 0; i < movies.length; i++) {
      if (movies[i].movie_id === id) {
        setIsloading4(false)
      } else {
        setIsloading4(true)
      }
      if (isLoading4) {
        console.log('No se encontró la película')
      }
    }
  }

  function getTrailerMovieList () {
    setIsloading2(true)
    getTrailersFromAPIBy(URL_TRAILER).then((result) => {
      settrailerMovieList(result)
      setIsloading2(false)
    })
  }

  const getActorsFromAPIBy = (toFetch) =>
    fetch(toFetch)
      .then((response) => response.json())
      .then((responseConverted) => responseConverted.credits.cast)

  function getActorMovieList () {
    setIsloading3(true)
    getActorsFromAPIBy(URL_ACTORS).then((result) => {
      setActorMovieList(result)

      setIsloading3(false)
    })
  }

  function addProfile (mostPopularMovieList) {
    // const image = URL_IMG + mostPopularMovieList.poster_path
    const title = mostPopularMovieList.title
    const overview = mostPopularMovieList.overview
    const date = mostPopularMovieList.release_date
    const vote = mostPopularMovieList.vote_average
    const UrlImage = mostPopularMovieList.poster_path
    const id = mostPopularMovieList.id

    const movielike = { title, overview, date, vote, UrlImage, id }
    try {
      addMovieLike(movielike)
      console.log('Se agrego a favoritos')
      swal('Se agrego a favoritos', '', 'success')
    } catch (error) {
      console.log(error.message)
    }
  }

  const filterVideo = trailerMovieList.find(trailer => trailer.name.includes('Tráiler') || trailer.name.includes('Official Trailer') || trailer.name.includes('TRAILER'))
  return (
    <>

      {isLoading
        ? (
          <div key={1} className='container' id='listas_pelis'>
            <div className='contenedor-pelicula'>
              <img id='foto' src={logo} style={{ width: '35%' }} />
              <div className='content_film' id={1}>
                <div className='text_Film'>
                  <h3 className='titulo'>Venom</h3>
                  <p className='descripcion'>un hombre mutante</p>
                </div>

                <div className='youtube-wrapper' />
              </div>
            </div>
            <div className='trailer'>
              <strong id='mytrailer' />
            </div>
          </div>
          )
        : (
            mostPopularMovieList.map((movie) => (
              <div key={movie.id} className='container' id='listas_pelis'>
                <div className='contenedor-pelicula'>
                  {movie.poster_path != null
                    ? <img
                        id='foto'
                        src={URL_IMG + movie.poster_path}
                        style={{ width: '35%' }}
                      />
                    : <img
                        id='foto'
                        src={imageNoLoad}
                        style={{ width: '35%' }}
                      />}
                  {isAuth
                    ? <i className='far fa-heart' onClick={() => addProfile(mostPopularMovieList[0])} />
                    : null}

                  <div className='content_film' id={movie.id}>
                    <h3 className='titulo'>{movie.title}</h3>
                    {isLoading5
                      ? (
                        <p className='descripcion'>{movie.overview}</p>

                        )
                      : (
                        <p className='descripcion'>{textTranslate}</p>
                        )}
                    <p>Valoración de la comunidad: <strong>{movie.vote_average}</strong></p>
                    <div className='youtube-wrapper'>
                      <div className='trailer'>
                        <strong id='mytrailer' />
                        {isLoading2
                          ? (
                            <p>Cargando..</p>
                            )
                          : (
                              filterVideo
                                ? <div key={filterVideo.id}><ItemTrailer key={filterVideo.id} trailer={filterVideo} /></div>
                                : null

                            )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}

      {isLoading3
        ? <p>Cargando..</p>

        : <AliceCarousel
            autoPlay
            autoPlayInterval={1000}
            animationType='fadeout'
            disableButtonsControls
            infinite
            responsive={responsive}
            className='slider_content'
          >
          {
            actorMovieList.filter(actor => actor.profile_path).map(actor =>

              <Link key={actor.id} to={'/actor/' + actor.id}>
                <>
                  <div key={actor.id} className='contenedor-actor'>
                    <img
                      id='foto'
                      src={URL_IMG + actor.profile_path}
                      style={{ width: '50%' }}
                    />
                    <h3 className='nombre_actor'>{actor.name}</h3>
                    <p className='descripcion'>{actor.character}</p>

                  </div>
                </>
              </Link>

            )

          }
        </AliceCarousel>}

      <Footer />
    </>
  )
}

export default pelicula
