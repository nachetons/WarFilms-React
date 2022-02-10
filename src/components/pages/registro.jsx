
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
import emailjs from '@emailjs/browser'
import { Redirect } from 'react-router-dom'

const registro = ({ setIsAuth, isAuth }) => {
  if (isAuth !== false) {
    return <Redirect to='/' />
  }
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_2e60jbg', 'template_am2hmts', e.target, 'user_jQclRrG51EvbYhDQ0iRW6')
      .then((result) => {
        console.log(result.text)
      }, (error) => {
        console.log(error.text)
      })
  }
  return (
    <>

      <Navs setIsAuth={setIsAuth} isAuth={isAuth} />

      <div className='container' id='cajaPrincipal'>
        <div className='container-form'>
          <h2>Formulario de contacto</h2>
          <p>Por favor, complete sus datos antes de enviar la información.</p>

          <form action='#' ref={form} onSubmit={sendEmail}>
            <div className='row'>
              <div className='col-25'>
                <label htmlFor='nombre'>Nombre</label>
              </div>
              <div className='col-36'>
                <input type='text' id='nombre' name='user_name' placeholder='Nombre' />
              </div>
              <div className='col-36 right'>
                <input type='text' id='apellido' name='apellido' placeholder='Apellidos' />
              </div>
            </div>
            <div className='row'>
              <div className='col-25'>
                <label htmlFor='email'>Email</label>
              </div>
              <div className='col-75'>
                <input type='text' id='email' name='user_email' placeholder='Email' />
              </div>
            </div>
            <div className='row'>
              <div className='col-25'>
                <label htmlFor='telefono'>Teléfono</label>
              </div>
              <div className='col-75'>
                <input type='text' id='telefono' name='telefono' placeholder='Teléfono' />
              </div>
            </div>
            <div className='row'>
              <div className='col-25'>
                <label htmlFor='asunto'>Asunto del mensaje</label>
              </div>
              <div className='col-75'>
                <select id='asunto'>Asunto del mensaje
                  <option>Quejas y reclamaciones</option>
                  <option>Sugerencia</option>
                  <option>Otro</option>
                </select>
              </div>
            </div>
            <div className='row'>
              <div className='col-25'>
                <label htmlFor='mensaje'>Mensaje</label>
              </div>
              <div className='col-75'>
                <textarea
                  id='mensaje' name='message' placeholder='Escriba su mensaje...'
                  style={{ height: '200px' }}
                />
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
