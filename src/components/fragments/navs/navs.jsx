import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
//import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid'
import Index from '../../pages/index'
import Peliculas from '../../pages/peliculas'
import Series from '../../pages/series'
import Formulario from '../../pages/formulario'
import itemNavs from './itemNavs'


const navs = () => {
  const arrayMovies = {
    "Action":28,
    "Adventure":12,
    "Animation":16,
    "Comedy":35,
    "Crime":80,
    "Documentary":99,
    "Drama":18,
    "Family":10751,
    "Fantasy":14,
    "History":36,
    "Horror":27,
    "Music":10402,
    "Mystery":9,
    "Romance":10749,
    "Thriller":53,
    "War":10752,
    "Action & Adventure":10759,
    "Western":37
  };

  const iconos = ["fas fa-bomb", "fas fa-running", "fab fa-d-and-d", "fas fa-grin-squint",
    "fas fa-user-secret","fas fa-theater-masks", "fas fa-dragon", "fas fa-baby",
    "fas fa-dizzy","fas fa-book","fas fa-hand-holding-heart","fas fa-rocket","fas fa-mask", "fas fa-fighter-jet",
    "fas fa-hat-cowboy"];

  const category_name = ["Action", "Adventure", "Animation", "Comedy", 
  "Crime", "Drama", "Fantasy", "Family", 
  "Horror", "History","Romance","Science Fiction","Thriller", "War",
  "Western"];
return (
<>
  <nav>
      <ul className="logo-ul">
        <li className="toggle" id="btn_movil"><i className="fas fa-bars"></i></li>
        <Link to='/' className="logo"></Link>
        <li className="menu_options categorias">Categorias</li>
        <li className="menu_options"><Link to='/peliculas'>Peliculas</Link></li>
        <li className="menu_options"><Link to='/series'>Series</Link></li>
        <li className="menu_options"><Link to='/formulario'>Contacto</Link></li>
      </ul>


      


    <ul className="icons-ul">
      <form className="log" id="myForm" action="./busquedas.html">
        <input type="search" className="input-search" id="mySearch" placeholder="Search movies" name="search" autoComplete="off" />
        <button className="boton-search" type="submit"><i className="fas fa-search"></i></button>
        <div id="textoPredict" className="textoPredict"></div>
      </form>
      <li><a href="#"><i style={{width:"auto"}} className="fas fa-user" id="btn_login_nav" title="Portafolio"/></a></li>
    </ul>
  </nav>

  <div className="menu__side" id="menu_side">

  

      <div className="options__menu">


      {category_name.map((categoria, index) => {
                 
        return(

          //PREGUNTAR POR PASAR COMPONENTES A OTROS COMPONENTES
<Link key={index} to={"/categorias/"+categoria}>
            <div className="option">
                <i className={iconos[index]+" fa-2x"} title={categoria}></i>
                <h4 className="text_category">{categoria}</h4>
            </div>
        </Link>)
      })}


      </div>




  </div>

</>
);
}
export default navs;

 

