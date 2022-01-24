/* eslint-disable no-undef */
import Login from '@/components/fragments/login'
import { useState } from 'react'

export default function registro ({ setRegister, register, setIsAuth, isAuth }) {
  const [login, setLogin] = useState(false)

  return (
    <>
      <div className='all-modal'>
        <div id='id01' className='modal login'>
          <form className='modal-content' id='form_content'>
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
              <label className='registerLink' onClick={() => setRegister(lastState => !lastState)}>Registrate aqui</label>
            </div>

            <div className='container' />
          </form>
        </div>

      </div>
      {register
        ? <Login setLogin={setLogin} login={login} setIsAuth={setIsAuth} isAuth={isAuth} />
        : null}
    </>
  )
}
