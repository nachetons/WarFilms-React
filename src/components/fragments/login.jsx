/* eslint-disable no-undef */
import { signInWithPopup, signOut } from 'firebase/auth'
import { auth, provider, loginEmailPassword } from '../../../config'
import Registro from './registro'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

export default function login ({ setLogin, login, setIsAuth, isAuth }) {
  const [register, setRegister] = useState(false)
  const redirectPage = useHistory()
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then(result => {
      localStorage.setItem('isAuth', true)
      setIsAuth(true)
      setLogin(false)
    })
  }

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
                <span className='btn' id='btn_registro'>
                  Registro
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
                <label className='registerLink' onClick={() => setRegister(lastState => !lastState) + setLogin(false)}>Registrate aqui</label>
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
                <i className='fas fa-user fa-2x foto' title='Portafolio' />
                <br />
                <span className='btn' id='btn_login'>
                  Preferencias
                </span>
                <span className='btn' id='btn_registro'>
                  Privacidad
                </span>
              </div>

              <div className='container'>
                <label>
                  <b>Idioma de preferencia</b>
                </label>
                <select name='language-picker-select' defaultValue='spanish' id='language-picker-select' className='input-form'>
                  <option className='choose_lenguage' lang='es' value='spanish'>Spanish</option>
                  <option className='choose_lenguage' lang='de' value='deutsch'>Deutsch</option>
                  <option className='choose_lenguage' lang='en' value='english'>English</option>
                  <option className='choose_lenguage' lang='fr' value='francais'>Français</option>
                  <option className='choose_lenguage' lang='it' value='italiano'>Italiano</option>
                </select>

                <input
                  className='input-form'
                  type='password'
                  placeholder='Enter Password'
                  name='psw'
                />
                <button className='boton-form' type='submit'>
                  Login
                </button>
                <input type='checkbox' /> Remember me
              </div>

              <div className='container' />
            </form>

            <button className='login-with-google-btn' onClick={logOut}>Log Out</button>
          </div>

        </div>

      </>
    )
  }
}
