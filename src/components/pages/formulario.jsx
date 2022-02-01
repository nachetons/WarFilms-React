
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
import { useState } from 'react'
import sendEmail from '../functions/sendEmail'

const formulario = ({ setIsAuth, isAuth }) => {
  const [datos, setDatos] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    mensaje: ''
  })

  const handleInputChange = (event) => {
    // console.log(event.target.name)
    // console.log(event.target.value)
    setDatos({
      ...datos,
      [event.target.name]: event.target.value
    })
  }

  const enviarDatos = (event) => {
    event.preventDefault()

    // console.log('enviando datos...' + datos.nombre + ' ' + datos.apellido + ' ' + datos.email)
    const { nombre, apellido, email, telefono, mensaje } = datos
    sendEmail(nombre, apellido, email, telefono, mensaje)
  }
  return (
    <>

      <Navs setIsAuth={setIsAuth} isAuth={isAuth} />

      <div className='container' id='cajaPrincipal'>
        <div className='container-form'>
          <h2>Formulario de contacto</h2>
          <p>Por favor, complete sus datos antes de enviar la información.</p>

          <form action='#' onSubmit={enviarDatos}>
            <div className='row'>
              <div className='col-25'>
                <label htmlFor='nombre'>Nombre</label>
              </div>
              <div className='col-36'>
                <input type='text' onChange={handleInputChange} id='nombre' name='nombre' placeholder='Nombre' />
              </div>
              <div className='col-36 right'>
                <input type='text' onChange={handleInputChange} id='apellido' name='apellido' placeholder='Apellidos' />
              </div>
            </div>
            <div className='row'>
              <div className='col-25'>
                <label htmlFor='email'>Email</label>
              </div>
              <div className='col-75'>
                <input type='text' onChange={handleInputChange} id='email' name='email' placeholder='Email' />
              </div>
            </div>
            <div className='row'>
              <div className='col-25'>
                <label htmlFor='telefono'>Teléfono</label>
              </div>
              <div className='col-75'>
                <input type='text' onChange={handleInputChange} id='telefono' name='telefono' placeholder='Teléfono' />
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
                  id='mensaje' name='mensaje' onChange={handleInputChange} placeholder='Escriba su mensaje...'
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

export default formulario
