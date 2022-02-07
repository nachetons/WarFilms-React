
import '@fortawesome/fontawesome-free/css/all.min.css'
import { Link, useParams } from 'react-router-dom'
import { API_URL_CATEGORY, arrayMovies } from '@/diccionario/url.jsx'
import '@/styles/carrusel.css'
import '@/styles/categorias.css'
import '@/styles/footer.css'
import '@/styles/login.css'
import '@/styles/main.css'
import '@/styles/mediaquerys.css'
import '@/styles/navs.css'
import Footer from '@/components/fragments/footer'
import Navs from '@/components/fragments/navs/navs'
import ItemCategoria from './itemCategoria'
import fetchApi from '@/components/fragments/fetchApi'

const categorias = ({ setIsAuth, isAuth }) => {
  const { categoria } = useParams()

  const URL_CATEGORY = API_URL_CATEGORY + arrayMovies[categoria]

  const { status, data } = fetchApi(URL_CATEGORY, 20)

  return (
    <>

      <Navs setIsAuth={setIsAuth} isAuth={isAuth} />

      <div className='row' id='contenedor_main'>

        <h3 id='titulos' className='titulo'>{categoria}</h3>

        <div className='peliculas' id='list_pelis'>

          {!status
            ? <p>Cargando...</p>
            : data.map(movie =>

              <Link key={movie.id} to={'/pelicula/' + movie.id}><div key={movie.id}><ItemCategoria key={movie.id} movieInfo={movie} /></div></Link>
            )}

        </div>
      </div>
      <Footer />
    </>

  )
}

export default categorias
