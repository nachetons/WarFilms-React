/* eslint-disable react/jsx-closing-tag-location */
import '@fortawesome/fontawesome-free/css/all.min.css'
import { Redirect } from 'react-router-dom'
import '@/styles/footer.css'
import '@/styles/login.css'
import '@/styles/main.css'
import '@/styles/navs.css'
import '@/styles/opciones.css'
import Footer from '@/components/fragments/footer'
// import Navs from '@/components/fragments/navs/navs.jsx'
import { useState, useEffect, useRef } from 'react'

import updateImage from '../functions/updateImageProfile'
import updatePreferences from '../functions/preferences/updatePreferences'
import getPreferences from '../functions/preferences/getPreferences'
import getPreferencesImage from '../functions/preferences/getPreferencesImage'
import swal from 'sweetalert'

const opciones = ({ setIsAuth, isAuth }) => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [imageUrl, setImageUrl] = useState(null)
  const [values, setValues] = useState([])

  const form = useRef()

  function submitHandler (e) {
    e.preventDefault()

    const username = e.target.username.value
    const name = e.target.name.value
    const lastname = e.target.lastname.value
    const telefono = e.target.telefono.value

    console.log(username, name, lastname, telefono)
    // declare initial values
    if (selectedImage) {
      updateImage(selectedImage)
    }

    updatePref(username, name, lastname, telefono)
    swal('¡Listo!', 'Tus cambios se han guardado', 'success')
  }
  if (isAuth === false) {
    return <Redirect to='/' />
  } else {
    if (imageUrl === null) {
      getPreferencesImage(setImageUrl)
      // getPreferences(setValues)
    }

    // getPreferences(setValues)
  }

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage))
    }
  }, [selectedImage])

  useEffect(() => {
    if (values.length === 0) {
      getPreferences(setValues)
    }
  }, [values])

  function updatePref (username, name, lastname, telefono) {
    // update values and verify if is empty
    if (values.length === 0) {
      console.log('No hay nada que actualizar')
    } else {
      updatePreferences(username, name, lastname, telefono)
    }
  } return (
    <>

      <div className='container'>

        <div className='imgcontainer'>
          <>
            <input
              accept='image/*' type='file' id='select-image' style={{ display: 'none' }} onChange={e => setSelectedImage(e.target.files[0])}
            />
            <label htmlFor='select-image'>
              {!imageUrl
                ? (
                  <i className='fas fa-user fa-2x foto' title='Portafolio' />)
                : <>
                  {!selectedImage
                    ? <img src={imageUrl} height='100px' />

                    : imageUrl && selectedImage && (

                      <img src={imageUrl} alt={selectedImage.name} height='100px' />

                    )}

                </>}
            </label>
          </>
          <br />
        </div>

        <form action='#' ref={form} onSubmit={submitHandler}>

          <div className='container'>
            <label htmlFor='uname'><b>Cambiar nombre de usuario:</b></label>
            <input
              className='input-form-preferences'
              type='text'
            // onChange={handleInputChange}
              placeholder='Enter Username'
              name='username'
              defaultValue={values[4]}
            />

            <label htmlFor='uname'><b>Nombre:</b></label>
            <input
              className='input-form-preferences'
              type='text'
            // onChange={handleInputChange}
              placeholder='Enter name'
              name='name'
              defaultValue={values[2]}
            />

            <label htmlFor='uname'><b>Apellidos:</b></label>
            <input
              className='input-form-preferences'
              type='text'
            // onChange={handleInputChange}
              placeholder='Enter second name'
              name='lastname'
              defaultValue={values[1]}
            />
            <br />
            <label htmlFor='uname'><b>Telefono:</b></label>
            <input
              className='input-form-preferences'
              type='text'
            // onChange={handleInputChange}
              placeholder='Enter second name'
              name='telefono'
              defaultValue={values[3]}
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
            <div className='row bottom'>
              <input type='submit' value='Enviar' />
            </div>
          </div>
        </form>

      </div>

      <Footer />
    </>

  )
}

export default opciones
