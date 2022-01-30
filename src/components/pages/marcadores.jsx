import '@fortawesome/fontawesome-free/css/all.min.css'
import { Redirect, Link } from 'react-router-dom'
import '@/styles/footer.css'
import '@/styles/login.css'
import '@/styles/main.css'
import '@/styles/navs.css'
import '@/styles/opciones.css'
import '@/styles/marcadores.css'
import Footer from '@/components/fragments/footer'
import Navs from '@/components/fragments/navs/navs.jsx'
import { URL_IMG } from '@/diccionario/url'
import getMoviesLike from '../functions/marcadores/getMoviesLike'
import { useState, useEffect } from 'react'
import deleteMovieLike from '../functions/marcadores/deleteMovieLike'

import swal from 'sweetalert'

const marcadores = ({ setIsAuth, isAuth }) => {
  const [isLoading, setIsloading] = useState(true)
  const [movies, setMovies] = useState([])

  if (isAuth === false) {
    return <Redirect to='/' />
  } else {
    useEffect(() => {
      getMoviesLike(setMovies, setIsloading)
      console.log('movies', movies)
    }, [])
  }

  function removeLike (id) {
    swal({
      title: '¿Estás seguro?',
      text: '¡No podrás revertir esto!',
      icon: 'warning',
      buttons: true,
      dangerMode: true
    }).then((willDelete) => {
      if (willDelete) {
        deleteMovieLike(id)
        getMoviesLike(setMovies, setIsloading)
        swal('¡Eliminado!', 'Tu película ha sido eliminada.', 'success', {
          timer: 1500,
          showCancelButton: false,
          showConfirmButton: false,
          buttons: false

        })
      } else {
        swal('¡Cancelado!', 'No se ha eliminado el like', 'error')
      }
    })
  }

  return (
    <>
      <div className='row' id='contenedor_main'>

        <h3 id='titulos' className='titulo'>Peliculas</h3>
        <Navs setIsAuth={setIsAuth} isAuth={isAuth} />

        <div className='peliculasMarcadores' id='list_pelis'>

          <div className='card-body1'>
            <p className='card-title1'>Foto</p>
            <p className='card-text1'>Titulo</p>
            <p className='card-text1'>Fecha agregado</p>
            <p className='card-text1'>Valoracion</p>
            <p className='card-text1' />

          </div>
        </div>

        {

        !isLoading
          ? movies && movies.map((movie, index) => {
              return (

                <div key={index} className='peliculasMarcadores' id='list_pelis'>
                  <div className='card-body'>
                    <Link to={'/pelicula/' + movie.movieId}><img className='card-image' src={URL_IMG + movie.UrlImage} style={{ width: '4rem' }} alt='Imagen portada' /></Link>
                    <h5 className='card-title'>{movie.title}</h5>
                    <p className='card-text'>{movie.date}</p>
                    <p className='card-text'>{movie.vote}</p>

                    <button className='btnEliminar btn-primary' onClick={() => removeLike(movie.movieId)}>Eliminar</button>
                  </div>

                </div>
              )
            })

          : (
            <div className='container'>
              <div className='card'>
                <div className='card-body'>
                  <br />
                  <br />
                  <h5 className='card-title'>No hay peliculas en tu lista</h5>
                  <p className='card-text'>Agrega peliculas a tu lista de favoritos</p>
                </div>
              </div>
            </div>
            )

     }
      </div>
      <Footer />
    </>

  )
}

export default marcadores
