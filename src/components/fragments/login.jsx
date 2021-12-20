export default function login() {
  return (
    <>
      <div className="all-modal">
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
