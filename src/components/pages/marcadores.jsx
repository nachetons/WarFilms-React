import '@fortawesome/fontawesome-free/css/all.min.css'
import { useHistory } from 'react-router-dom'
import '@/styles/footer.css'
import '@/styles/login.css'
import '@/styles/main.css'
import '@/styles/navs.css'
import '@/styles/opciones.css'
import Footer from '@/components/fragments/footer'
import Navs from '@/components/fragments/navs/navs.jsx'

const marcadores = ({ setIsAuth, isAuth }) => {
  const redirectPage = useHistory()
  if (isAuth === false) {
    redirectPage.push('/')
  }

  return (
    <>

      <Navs setIsAuth={setIsAuth} isAuth={isAuth} />

      <div className='container'>

        <form className='modal-content' id='form_content' action='#'>
          <div className='imgcontainer'>
            <i className='fas fa-user fa-2x foto' title='Portafolio' />
            <br />
          </div>

          <div className='container'>
            <label htmlFor='uname'><b>Peliculas favoritas: </b></label>
            <ul>
              <li>Pelicula1</li>
              <li>Pelicula2</li>
              <li>Pelicula3</li>
              <li>Pelicula4</li>
              <li>Pelicula5</li>
            </ul>
            <br />

            <button className='boton-form' type='submit'>
              Guardar cambios
            </button>
            <input type='checkbox' /> Remember me
          </div>

          <div className='container' />
        </form>

      </div>

      <Footer />
    </>

  )
}

export default marcadores
