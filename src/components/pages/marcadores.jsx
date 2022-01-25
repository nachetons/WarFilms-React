import '@fortawesome/fontawesome-free/css/all.min.css'
import { useHistory } from 'react-router-dom'
import '@/styles/footer.css'
import '@/styles/login.css'
import '@/styles/main.css'
import '@/styles/navs.css'
import '@/styles/opciones.css'
import { auth } from '../../../config'
import Footer from '@/components/fragments/footer'
import Navs from '@/components/fragments/navs/navs.jsx'
import { useState, useEffect } from 'react'
import { getDatabase, ref, child, get } from 'firebase/database'

const marcadores = ({ setIsAuth, isAuth }) => {
  const redirectPage = useHistory()
  const [isLoading, setIsloading] = useState(true)
  const [movies, setMovies] = useState([])
  const dataMovies = []

  if (isAuth === false) {
    redirectPage.push('/')
  } else {
    const Uid = auth.currentUser.uid
    const dbRef = ref(getDatabase())

    function fetchMovies () {
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

    useEffect(() => {
      fetchMovies()
    }, [])
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

                <div key={index} className='peliculas' id='list_pelis'>
                  <div className='container'>
                    <div className='card'>
                      <div className='card-body'>
                        <h5 className='card-title'>{movie.title}</h5>
                        <p className='card-text'>{movie.dataDate}</p>
                      </div>
                    </div>
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
