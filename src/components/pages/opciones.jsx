/* eslint-disable react/jsx-closing-tag-location */
import '@fortawesome/fontawesome-free/css/all.min.css'
import { Redirect } from 'react-router-dom'
import '@/styles/footer.css'
import '@/styles/login.css'
import '@/styles/main.css'
import '@/styles/navs.css'
import '@/styles/opciones.css'
import Footer from '@/components/fragments/footer'
import Navs from '@/components/fragments/navs/navs.jsx'
import { useState, useEffect } from 'react'
import updateImage from '../functions/updateImageProfile'
import updatePreferences from '../functions/updatePreferences'
import getPreferences from '../functions/getPreferences'
import getPreferencesImage from '../functions/getPreferencesImage'
import swal from 'sweetalert'

const opciones = ({ setIsAuth, isAuth }) => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [imageUrl, setImageUrl] = useState(null)
  const [values, setValues] = useState([])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    // declare initial values
    setValues({

      ...values,
      [name]: value
    })
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

  const handleUpload = () => {
    if (selectedImage) {
      updateImage(selectedImage)
    }

    updatePref(values)
    swal('¡Listo!', 'Tus cambios se han guardado', 'success')
  }

  function updatePref (values) {
    // update values and verify if is empty
    if (values.length === 0) {
      console.log('No hay nada que actualizar')
    } else {
      updatePreferences(values)
    }
  } return (
    <>

      <Navs setIsAuth={setIsAuth} isAuth={isAuth} />

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

        <div className='container'>
          <label htmlFor='uname'><b>Cambiar nombre de usuario:</b></label>
          <input
            className='input-form-preferences'
            type='text'
            onChange={handleInputChange}
            placeholder='Enter Username'
            name='username'
            defaultValue={values[3]}

          />
        </div>

        <div className='container'>
          <label htmlFor='uname'><b>Nombre:</b></label>
          <input
            className='input-form-preferences'
            type='text'
            onChange={handleInputChange}
            placeholder='Enter name'
            name='name'
            defaultValue={values[1]}

          />
        </div>

        <div className='container'>
          <label htmlFor='uname'><b>Apellidos:</b></label>
          <input
            className='input-form-preferences'
            type='text'
            onChange={handleInputChange}
            placeholder='Enter second name'
            name='surnames'
            defaultValue={values[2]}

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
          <button className='boton-form' onClick={handleUpload}>
            Guardar cambios
          </button>
        </div>

        <div className='container' />

      </div>

      <Footer />
    </>

  )
}

export default opciones
