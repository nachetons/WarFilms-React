import '@fortawesome/fontawesome-free/css/all.min.css'
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import translate from '../functions/translate'

import {
  API_KEY,
  URL_BASE, URL_IMG
} from '@/diccionario/url.jsx'

import logo from '@/images/1.jpg'
import '@/styles/carrusel.css'
import '@/styles/footer.css'
import '@/styles/login.css'
import '@/styles/main.css'
import '@/styles/mediaquerys.css'
import '@/styles/navs.css'
import '@/styles/pelicula.css'
import '@/styles/actor.css'
import Footer from '@/components/fragments/footer'
import Navs from '@/components/fragments/navs/navs'
import parseText from '../functions/parserText'

const actor = ({ setIsAuth, isAuth }) => {
  // LAMADA ACTORES DE LAS PELICULAS
  const [actorMovieList, setActorMovieList] = useState([])
  const [textTranslate, setTextTranslate] = useState([])

  const [isLoading, setIsloading] = useState(true)
  const [isLoading2, setIsloading2] = useState(true)

  const { id } = useParams()

  // Al estar vacio el array la función del useEffect es solo de montado, es decir, solo se
  // ejecuta la primera vez
  useEffect(() => {
    getActorMovieList()
  }, [id])

  const URL_ACTOR = URL_BASE + 'person/' + id + '?' + API_KEY + '&append_to_response=movie_credits'

  const getActorsFromAPIBy = (toFetch) =>
    // eslint-disable-next-line no-undef
    fetch(toFetch)
      .then((response) => response.json())
      .then((responseConverted) => responseConverted)

  function getActorMovieList () {
    setIsloading(true)
    getActorsFromAPIBy(URL_ACTOR).then((result) => {
      setActorMovieList(result)
      // console.log(result.biography.length)
      parseText(result.biography)
      const primeraSolicitud = result.biography.substring(0, 500)
      const segundaSolicitud = primeraSolicitud.substring(0, primeraSolicitud.lastIndexOf('.'))
      translate(segundaSolicitud, setTextTranslate, setIsloading2, 'en', 'es')

      setIsloading(false)
    })
  }

  return (
    <>
      <Navs setIsAuth={setIsAuth} isAuth={isAuth} />

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

          <div key={actorMovieList.id} className='container' id='listas_pelis'>
            <div className='contenedor-pelicula'>
              <img
                id='foto'
                src={URL_IMG + actorMovieList.profile_path}
                style={{ width: '35%', height: '70%' }}
              />
              <div className='content_film' id={actorMovieList.id}>
                <a className='titulo' href={'https://www.google.com/search?tbm=isch&q=' + actorMovieList.name} target='_blank' rel='noreferrer noopener'>{actorMovieList.name}</a>
                {isLoading2
                  ? (
                    <p className='descripcion'>{actorMovieList.biography}</p>
                    )
                  : (
                    <p className='descripcion'>{textTranslate}</p>
                    )}

                <div className='youtube-wrapper'>
                  <div className='trailer'>

                    {actorMovieList.movie_credits.cast.map((movie) => (

                      <Link key={movie.id} to={'/pelicula/' + movie.id} className='titulos_pelis'><div key={movie.id}>{movie.title}</div></Link>

                    ))}
                    <strong id='mytrailer' />
                  </div>
                </div>
              </div>
            </div>
          </div>

          )}

      <Footer />
    </>
  )
}

export default actor
