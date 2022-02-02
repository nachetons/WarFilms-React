/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable no-undef */
import { useEffect, useState } from 'react'
import 'react-alice-carousel/lib/alice-carousel.css'
import { API_URL_UPCOMING } from '@/diccionario/url'
import { Link } from 'react-router-dom'
const URL_IMG = 'https://image.tmdb.org/t/p/w500/'

export default function Header () {
  const [headerMovies, setHeaderMovies] = useState([])
  const [isLoading, setIsloading] = useState(true)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setIsloading(true)
    fetch(API_URL_UPCOMING)
      .then(response => response.json())
      .then(responseConverted => responseConverted.results)
      .then(movieResults => {
        setHeaderMovies(movieResults)
        setIsloading(false)
      })
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setMovies(index)
    }, 5000)
    return () => clearInterval(interval)
  }, [index])

  function setMovies (movieIndex) {
    if (movieIndex > 1) {
      // toSubstract = -7
      // Esto lo pongo a -7 ya que va a llegar al if en la 6ºIteracion y
      // abajo le sumo 1 para que siga iterando en el array
    }
    if (movieIndex === headerMovies.length - 1) {
      setIndex(0)
    }
    // Utilizo la variable toSubstract para que el set del estado se ejecute en
    // el mismo orden, ya que si se condiciona o no se reenderiza un componente
    // en el mismo orden va a dar error sí o sí
    setIndex(lastIndex => lastIndex + 1)
  }

  return (
    <>

      <div className='container'>
        <div className='background' />
      </div>

      <div id='contenedor'>
        {isLoading
          ? <p>CARGANDO....</p>

          : <div className='slider_content'>
            <div id='pelis_header' key={headerMovies[index].id}>
              <div className='mySlides fade'>
                <Link to={'/pelicula/' + headerMovies[index].id}><img id='fotoHeader' src={URL_IMG + headerMovies[index].poster_path} /></Link>
                <img id='fotoHeaderBack' src={URL_IMG + headerMovies[index].backdrop_path} />
                <div className='text_title'>{headerMovies[index].title}</div>
                <div className='text'>{headerMovies[index].vote_average}</div>
              </div>
            </div>
          </div>}
      </div>

    </>
  )
}
