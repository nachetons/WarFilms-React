
import '@fortawesome/fontawesome-free/css/all.min.css'
import '@/styles/carrusel.css'
import '@/styles/footer.css'
import '@/styles/formulario.css'
import '@/styles/login.css'
import '@/styles/main.css'
import '@/styles/mediaquerys.css'
import '@/styles/navs.css'
import Footer from '@/components/fragments/footer'
import Navs from '@/components/fragments/navs/navs'
import { useRef } from 'react'
import { Redirect } from 'react-router-dom'
import { auth, loginEmailPassword } from '../../../config'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import updatePreferences from '../functions/preferences/updatePreferences'

import CountrySelect from '@/components/pages/selectCountry'
// import { auth, loginEmailPassword } from '../../../config'

const registro = ({ setIsAuth, isAuth }) => {
  if (isAuth !== false) {
    return <Redirect to='/' />
  }
  const form = useRef()

  function submitHandler (e) {
    e.preventDefault()
    const email = e.target.user_email.value
    const password = e.target.user_password.value
    const username = e.user_alias.value
    const name = e.user_name.value
    const lastname = e.user_lastname.value
    const telefono = e.telefono.value
    console.log(email, password)
    try {
      createUserWithEmailAndPassword(auth, email, password).then(result => {
        loginEmailPassword(email, password).then(result => {
          updatePreferences(username, name, lastname, telefono)
        })
        // eslint-disable-next-line no-undef
        localStorage.setItem('isAuth', true)
        setIsAuth(true)
      }

      )
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>

      <Navs setIsAuth={setIsAuth} isAuth={isAuth} />

      <div className='container' id='cajaPrincipal'>
        <div className='container-form'>
          <h2>Formulario de contacto</h2>
          <p>Por favor, complete sus datos antes de enviar la información.</p>

          <form action='#' ref={form} onSubmit={submitHandler}>
            <div className='row'>
              <div className='col-25'>
                <label htmlFor='alias'>Alias:</label>
              </div>
              <div className='col-75'>
                <input type='text' id='alias' name='user_alias' placeholder='Alias' />
              </div>
            </div>
            <div className='row'>
              <div className='col-25'>
                <label htmlFor='nombre'>Nombre:</label>
              </div>
              <div className='col-36'>
                <input type='text' id='nombre' name='user_name' placeholder='Nombre' />
              </div>
              <div className='col-36 right'>
                <input type='text' id='apellido' name='user_lastname' placeholder='Apellidos' />
              </div>
            </div>
            <div className='row'>
              <div className='col-25'>
                <label htmlFor='email'>Email:</label>
              </div>
              <div className='col-75'>
                <input type='text' id='email' name='user_email' placeholder='Email' />
              </div>
            </div>
            <div className='row'>
              <div className='col-25'>
                <label htmlFor='passsword'>Contraseña:</label>
              </div>
              <div className='col-75'>
                <input type='text' id='passsword' name='user_password' placeholder='password' />
              </div>
            </div>
            <div className='row'>
              <div className='col-25'>
                <label htmlFor='telefono'>Teléfono:</label>
              </div>
              <div className='col-75'>
                <input type='text' id='telefono' name='telefono' placeholder='Teléfono' />
              </div>
            </div>
            <div className='row'>
              <div className='col-25'>
                <label htmlFor='alias'>Pais:</label>
              </div>
              <div className='col-75'>
                <CountrySelect />
              </div>
            </div>
            <br />
            <div className='row bottom'>
              <input type='submit' value='Enviar' />
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>

  )
}

export default registro
