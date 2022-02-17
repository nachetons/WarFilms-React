/* eslint-disable no-undef */
import { signInWithPopup, signOut } from 'firebase/auth'
import { auth, provider, loginEmailPassword } from '../../../config'
import Registro from './registro'
import { useState, useEffect } from 'react'

import { useHistory, Link } from 'react-router-dom'

import getPreferences from '../functions/preferences/getPreferences'
import getPreferencesImage from '../functions/preferences/getPreferencesImage'

export default function login ({ setLogin, login, setIsAuth, isAuth }) {
  const [register, setRegister] = useState(false)
  const [imageUrl, setImageUrl] = useState(null)
  const [values, setValues] = useState([])
  useEffect(() => {
    if (auth.currentUser) {
      getPreferences(setValues)
      getPreferencesImage(setImageUrl)
    }
  }, [])

  const redirectPage = useHistory()
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then(result => {
      localStorage.setItem('isAuth', true)
      setIsAuth(true)
      setLogin(false)
    })
  }

  // getPreferences(setValues)

  async function submitHandler (e) {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    await loginEmailPassword(email, password)
    setLogin(false)
  }

  const logOut = () => {
    signOut(auth).then(result => {
      redirectPage.push('/')
      localStorage.clear()
      setIsAuth(false)
      setLogin(false)
    })
  }

  if (isAuth === false) {
    return (
      <>
        <div className='background_login' onClick={() => setLogin(false)} />
        {console.log('autentificacion: ' + isAuth)}
        <div className='all-modal'>
          <div id='id01' className='modal login'>
            <form className='modal-content' id='form_content' onSubmit={submitHandler}>
              <div className='imgcontainer'>
                <i className='fas fa-user fa-2x foto' title='Portafolio' />
                <br />
                <span className='btn' id='btn_login'>
                  Login
                </span>

              </div>

              <div className='container'>

                <input
                  className='input-form'
                  type='email'
                  placeholder='Enter Username'
                  name='email'
                />

                <input
                  className='input-form'
                  type='password'
                  placeholder='Enter Password'
                  name='password'
                />
                <button className='boton-form' type='submit'>
                  Login
                </button>
                <p />
                <Link to='/registro'><label className='registerLink'>Registrate aqui</label></Link>
              </div>

              <div className='container' />
            </form>
            <a className='login-with-google-btn boton_sesion_google' onClick={signInWithGoogle}><i className='fab fa-google' /></a>
          </div>

        </div>
        {register
          ? <Registro setRegister={setRegister} register={register} setIsAuth={setIsAuth} isAuth={isAuth} />

          : null}
      </>
    )
  } else {
    return (
      <>
        <div className='background_login' onClick={() => setLogin(false)} />
        {console.log('autentificacion: ' + isAuth)}
        <div className='all-modal'>
          <div id='id01' className='modal login'>
            <form className='modal-content' id='form_content' action='#'>
              <div className='imgcontainer'>
                {imageUrl !== null
                  ? <img className='image-nav' src={imageUrl} alt='preferences' />
                  : <li><i style={{ width: 'auto' }} className='fas fa-user logo_inicio' id='btn_login_nav' title='Portafolio' /></li>}
                <br />
                <label>{values[2]}</label>
              </div>
              <br />
            </form>

            <button className='login-with-google-btn' onClick={logOut}>Log Out</button>
          </div>

        </div>

      </>
    )
  }
}
