import '@fortawesome/fontawesome-free/css/all.min.css'
import { Redirect } from 'react-router-dom'
import '@/styles/footer.css'
import '@/styles/login.css'
import '@/styles/main.css'
import '@/styles/navs.css'
import '@/styles/opciones.css'
import '@/styles/marcadores.css'
import { auth } from '../../../config'
import Footer from '@/components/fragments/footer'
import Navs from '@/components/fragments/navs/navs.jsx'
import { useState, useEffect } from 'react'
import { getDatabase, ref, child, get } from 'firebase/database'
import deleteMovieLike from '../functions/marcadores/deleteMovieLike'
import swal from 'sweetalert'

const marcadores = ({ setIsAuth, isAuth }) => {
  const [isLoading, setIsloading] = useState(true)
  const [movies, setMovies] = useState([])
  const dataMovies = []

  if (isAuth === false) {
    return <Redirect to='/' />
  } else {
    useEffect(() => {
      if (isLoading) {
        fetchMovies()
      }
    }, [])
  }

  function fetchMovies () {
    const Uid = auth.currentUser.uid
    const dbRef = ref(getDatabase())
    get(child(dbRef, 'likes/' + Uid)).then((snapshot) => {
      if (snapshot.exists()) {
        snapshot.forEach((childSnapshot) => {
          dataMovies.push(childSnapshot.val())
        })
        setMovies(dataMovies)
        setIsloading(false)
      } else {
        console.log('No data available')
      }
    }).catch((error) => {
      console.error(error)
    })
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
        fetchMovies()
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

        {

        !isLoading
          ? movies && movies.map((movie, index) => {
              console.log(movie.title)

              return (

                <div key={index} className='peliculasMarcadores' id='list_pelis'>
                  <div className='card-body'>
                    <p className='card-title'>{movie.image}</p>
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
