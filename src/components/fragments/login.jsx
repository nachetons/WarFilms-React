
import {auth, provider} from '../../../config'
import { signInWithPopup, signOut} from 'firebase/auth'

export default function login({setLogin,login, setIsAuth, isAuth}) {


  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then(result => {
    localStorage.setItem("isAuth", true)
    setIsAuth(true)
    
    
    })
  }

  const logOut = () => {
    signOut(auth).then(result => {
    localStorage.clear()
    setIsAuth(false)
    
    
    })
  }


if(isAuth === false){
  return (
    <>
      <div className="background_login" onClick={()=>setLogin(false)}></div>
      {console.log("autentificacion: "+isAuth)}
      <div className="all-modal" >
        <div id="id01" className="modal login">
          <form className="modal-content" id="form_content" action="#">
            <div className="imgcontainer">
              <i className="fas fa-user fa-2x foto" title="Portafolio"></i>
              <br />
              <span className="btn" id="btn_login">
                Login
              </span>
              <span className="btn" id="btn_registro">
                Registro
              </span>
            </div>

            <div className="container">
              <label>
                <b>Username</b>
              </label>
              <input
                className="input-form"
                type="text"
                placeholder="Enter Username"
                name="uname"
              />
              <label>
                <b>Password</b>
              </label>
              <input
                className="input-form"
                type="password"
                placeholder="Enter Password"
                name="psw"
              />
              <button className="boton-form" type="submit">
                Login
              </button>
              <input type="checkbox" /> Remember me
            </div>

            <div className="container"></div>
          </form>
          <button className="login-with-google-btn" onClick={signInWithGoogle}>Sign in with Google</button>
        </div>

        <div id="id02" className="modal registro">
          <form className="modal-content" id="form_content2" action="#">
            <div className="imgcontainer">
              <i className="fas fa-user fa-2x foto" title="Portafolio"></i>
              <br />
              <span className="btn" id="btn_login2">
                Login
              </span>
              <span className="btn" id="btn_registro2">
                Registro
              </span>
            </div>

            <div className="container">
              <label>
                <b>Name</b>
              </label>
              <input
                className="input-form"
                type="text"
                placeholder="Enter Name"
                name="uname"
                required
              />

              <label>
                <b>Email</b>
              </label>
              <input
                className="input-form"
                type="Email"
                placeholder="prueba@123.com"
                name="psw"
                required
              />

              <label>
                <b>Password</b>
              </label>
              <input
                className="input-form"
                type="password"
                placeholder="Enter Password"
                name="psw"
                required
              />

              <button className="boton-form" type="submit">
                Registrarse
              </button>
            </div>

            <div className="container"></div>
          </form>
        </div>
      </div>
    </>
  );
}

else{
  return (
    <>
      <div className="background_login" onClick={()=>setLogin(false)}></div>
      {console.log("autentificacion: "+isAuth)}
      <div className="all-modal" >
        <div id="id01" className="modal login">
          <form className="modal-content" id="form_content" action="#">
            <div className="imgcontainer">
              <i className="fas fa-user fa-2x foto" title="Portafolio"></i>
              <br />
              <span className="btn" id="btn_login">
                Login
              </span>
              <span className="btn" id="btn_registro">
                Registro
              </span>
            </div>

            <div className="container">
              <label>
                <b>Username</b>
              </label>
              <input
                className="input-form"
                type="text"
                placeholder="Enter Username"
                name="uname"
              />
              <label>
                <b>Password</b>
              </label>
              <input
                className="input-form"
                type="password"
                placeholder="Enter Password"
                name="psw"
              />
              <button className="boton-form" type="submit">
                Login
              </button>
              <input type="checkbox" /> Remember me
            </div>

            <div className="container"></div>
          </form>
          <button className="login-with-google-btn" onClick={logOut}>Log Out</button>
        </div>

      </div>
    </>
  );




}
}

  
