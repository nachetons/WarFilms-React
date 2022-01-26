/* eslint-disable react/jsx-closing-tag-location */
import '@fortawesome/fontawesome-free/css/all.min.css'
// import { Redirect } from 'react-router-dom'
import '@/styles/footer.css'
import '@/styles/login.css'
import '@/styles/main.css'
import '@/styles/navs.css'
import '@/styles/opciones.css'
import Footer from '@/components/fragments/footer'
import Navs from '@/components/fragments/navs/navs.jsx'
import { useState, useEffect } from 'react'
import { storage, auth } from '../../../config'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'

const opciones = ({ setIsAuth, isAuth }) => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [imageUrl, setImageUrl] = useState(null)
  let avatar = false
  if (isAuth === false) {
    // return <Redirect to='/' />
  } else {
    const Uid = auth.currentUser.uid
    const imageRef = ref(storage, 'images/' + Uid + '/profileImage')
    if (imageRef != null) {
      avatar = true
      getDownloadURL(imageRef).then((imageUrl) => {
        setImageUrl(imageUrl)

        console.log(imageUrl)
      }).catch((error) => {
        console.log(error)
      })
    }
  }

  useEffect(() => {
    if (selectedImage) {
      avatar = false
      setImageUrl(URL.createObjectURL(selectedImage))
    }
  }, [selectedImage])

  const handleUpload = () => {
    const Uid = auth.currentUser.uid
    const imageRef = ref(storage, 'images/' + Uid + '/profileImage')
    uploadBytes(imageRef, selectedImage).then(() => {
      getDownloadURL(imageRef).then((imageUrl) => {
        setImageUrl(URL.createObjectURL((imageUrl)))
        console.log('Image uploaded')
      }).catch((error) => {
        console.error(error, 'Error al obtener la url de la imagen')
      }).catch((error) => {
        console.error(error, 'Error al subir la imagen')
      })
    })
  }
  return (
    <>

      <Navs setIsAuth={setIsAuth} isAuth={isAuth} />

      <div className='container'>

        <form className='modal-content' id='form_content' action='#'>
          <div className='imgcontainer'>
            <input
              accept='image/*' type='file' id='select-image' style={{ display: 'none' }} onChange={e => setSelectedImage(e.target.files[0])}
            />
            <label htmlFor='select-image'>
              {!imageUrl
                ? (
                  <i className='fas fa-user fa-2x foto' title='Portafolio' />)
                : <>
                  {avatar
                    ? <>
                      <div>Image Preview:</div>
                      <img src={imageUrl} height='100px' />
                    </>
                    : null}

                </>}
              {imageUrl && selectedImage && (
                <>
                  <div>Image Preview:</div>
                  <img src={imageUrl} alt={selectedImage.name} height='100px' />
                </>
              )}
            </label>
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
          </div>

          <div className='container'>
            <label htmlFor='uname'><b>Nombre:</b></label>
            <input
              className='input-form-preferences'
              type='text'
              placeholder='Enter name'
              name='uname'
            />
          </div>

          <div className='container'>
            <label htmlFor='uname'><b>Apellidos:</b></label>
            <input
              className='input-form-preferences'
              type='text'
              placeholder='Enter second name'
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
            <button className='boton-form' type='submit' onClick={handleUpload}>
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
