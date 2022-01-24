import '@fortawesome/fontawesome-free/css/all.min.css'
import { useHistory } from 'react-router-dom'
import '@/styles/footer.css'
import '@/styles/login.css'
import '@/styles/main.css'
import '@/styles/navs.css'
import '@/styles/opciones.css'
import Footer from '@/components/fragments/footer'
import Navs from '@/components/fragments/navs/navs.jsx'

const opciones = ({ setIsAuth, isAuth }) => {
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
            <label htmlFor='uname'><b>Cambiar nombre de usuario:</b></label>
            <input
              className='input-form-preferences'
              type='text'
              placeholder='Enter Username'
              name='uname'
            />
            <br />
            <label>
              <b>Idioma de preferencia: </b>
            </label>
            <select name='language-picker-select' defaultValue='spanish' id='language-picker-select' className='select-form-preferences'>
              <option lang='es' value='spanish'>Spanish</option>
              <option lang='de' value='deutsch'>Deutsch</option>
              <option lang='en' value='english'>English</option>
              <option lang='fr' value='francais'>Français</option>
              <option lang='it' value='italiano'>Italiano</option>
            </select>
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

export default opciones
