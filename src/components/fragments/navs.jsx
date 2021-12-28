import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
//import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid'
//import Index from '../pages/index'
import Peliculas from '../pages/peliculas'
import Series from '../pages/series'
import Formulario from '../pages/formulario'


const navs = () => {
return (
<>
<BrowserRouter>
  <nav>
      <ul className="logo-ul">
        <li className="toggle" id="btn_movil"><i className="fas fa-bars"></i></li>
        <Link to='/' className="logo"></Link>
        <li className="menu_options categorias">Categorias</li>
        <Link to='/peliculas' className="menu_options">Peliculas</Link>
        <Link to='/series' className="menu_options">Series</Link>
        <Link to='/formulario' className="menu_options">Contacto</Link>
      </ul>


      


    <ul className="icons-ul">
      <form className="log" id="myForm" action="./busquedas.html">
        <input type="search" className="input-search" id="mySearch" placeholder="Search movies" name="search" autoComplete="off" />
        <button className="boton-search" type="submit"><i className="fas fa-search"></i></button>
        <div id="textoPredict" className="textoPredict"></div>
      </form>
      <li><a href="#"><i className="fas fa-user" id="btn_login_nav" title="Portafolio"/></a></li>
    </ul>
  </nav>



  <Switch>
      

      <Route path='/peliculas'>
        <Peliculas />
      </Route>

      <Route path='/series'>
        <Series />
      </Route>

      <Route path='/formulario'>
        <Formulario />
      </Route>
      </Switch>
  </BrowserRouter>
  <div className="menu__side" id="menu_side">



      <div className="options__menu">


        <a href="#">
          <div className="option" value="Action">
            <i className="fas fa-bomb fa-2x" title="Action"></i>
            <h4 className="text_category">Action</h4>
          </div>
        </a>


        <a href="#">
          <div className="option">
            <i className="fas fa-running fa-2x" title="Adventure"></i>
            <h4 className="text_category">Adventure</h4>
          </div>
        </a>


        <a href="#">
          <div className="option">
            <i className="fab fa-d-and-d fa-2x" title="Animation"></i>

            <h4 className="text_category">Animation</h4>
          </div>
        </a>

        <a href="#">
          <div className="option">
            <i className="fas fa-theater-masks fa-2x" title="Comedy"></i>
            <h4 className="text_category">Comedy</h4>
          </div>
        </a>


        <a href="#">
          <div className="option">
            <i className="fas fa-user-secret fa-2x" title="Crime"></i>
            <h4 className="text_category">Crime</h4>
          </div>
        </a>

        <a href="#">
          <div className="option">
            <i className="fas fa-dragon fa-2x" title="Fantasy"></i>
            <h4 className="text_category">Fantasy</h4>
          </div>
        </a>

        <a href="#">
          <div className="option">
            <i className="fas fa-baby fa-2x" title="Family"></i>
            <h4 className="text_category">Family</h4>
          </div>
        </a>

        <a href="#">
          <div className="option">
            <i className="fas fa-dizzy fa-2x" title="Horror"></i>
            <h4 className="text_category">Horror</h4>
          </div>
        </a>

        <a href="#">
          <div className="option">
            <i className="fas fa-fighter-jet fa-2x" title="War"></i>
            <h4 className="text_category">War</h4>
          </div>
        </a>







      </div>




  </div>

</>
);
}
export default navs;

 

   /* <script>
      function store(){
         var inputEmail= document.getElementById("mySearch").value;
         sessionStorage.setItem("search", inputEmail);
      }
        </script>*/

    

    