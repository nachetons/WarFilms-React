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
  const [order, setOrder] = useState('asc')

  if (isAuth === false) {
    return <Redirect to='/' />
  }
  useEffect(() => {
    if (isAuth === true) {
      getMoviesLike(setMovies, setIsloading)
      console.log('movies', movies)
    }
  }, [])

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

  const sorting = (col) => {
    if (order === 'asc') {
      setOrder('desc')
    } else {
      setOrder('asc')
    }
    setMovies(movies.sort((a, b) => {
      if (a[col] < b[col]) {
        return -1
      }
      if (a[col] > b[col]) {
        return 1
      }
      return 0
    }))
  }

  return (
    <>

      <h3 id='titulos' className='titulo'>Peliculas</h3>
      <Navs setIsAuth={setIsAuth} isAuth={isAuth} />

      <table>
        <tr className='trVacio'>
          <td className='tableHeader'>Foto</td>
          <td className='tableHeader' onClick={() => sorting('titleItem')}>Titulo</td>
          <td className='tableHeader' onClick={() => sorting('dateItem')}>Fecha agregado</td>
          <td className='tableHeader rating' onClick={() => sorting('voteItem')}>Valoracion</td>
        </tr>
        {

        !isLoading
          ? movies && movies.map((movie, index) => {
              return (

                <tr className='trContenido' key={index}>
                  <td><Link to={'/pelicula/' + movie.movieId}><img className='fileItem' src={URL_IMG + movie.UrlImage} style={{ width: '8rem' }} alt='Imagen portada' /></Link></td>
                  <td className='titleItem'>{movie.title}</td>
                  <td><p className='dateItem'>{movie.date}</p></td>
                  <td><p className='voteItem'>{movie.vote}</p></td>
                  <td><button className='btnEliminar btn-primary tableItem' onClick={() => removeLike(movie.movieId)}>Eliminar</button></td>
                </tr>

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
      </table>
      <Footer />
    </>

  )
}

export default marcadores
