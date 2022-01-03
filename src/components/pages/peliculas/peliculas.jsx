
import logo from '../../../images/1.jpg'
import {API_URL_CATEGORY,arrayMovies,API_URL_POP} from '../../../diccionario/url.jsx'
import '../../../styles/main.css'
import '../../../styles/navs.css'
import '../../../styles/footer.css'
import '../../../styles/carrusel.css'
import '../../../styles/login.css'
import '../../../styles/categorias.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../../../styles/mediaquerys.css'



import Login from '../../fragments/login'
import Navs from '../../fragments/navs/navs'
import Footer from '../../fragments/footer';
import ItemPelicula from './itemPeliculas';



import { useParams } from 'react-router-dom';
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'


const peliculas = () => {
 const {categoria} = useParams();

 const [movieList,setMovieList]=useState([]);
 const [isLoading,setIsloading]=useState(false);
 const [categorias,setCategoria]=useState([categoria]);


  
  const getMoviesFromAPIBy=(toFetch)=>
    fetch(toFetch)
    .then(response=>response.json())
    .then(responseConverted=>responseConverted.results);
  
  function getMostPopularMovieList(){
    const xs = [];

    setIsloading(true);
    getMoviesFromAPIBy(API_URL_POP).then(result=>{
      if(result.length<19){
        result.map(item=>{
          xs.push(item);
        });
      }else{
        for(let i=0;i<=19;i++){
      
          xs.push(result[i]);
       
     }
      }
      
      setMovieList(xs);
      setIsloading(false);
    })
  }



  //Al estar vacio el array la función del useEffect es solo de montado, es decir, solo se 
  //ejecuta la primera vez
  useEffect(getMostPopularMovieList,[categoria]);

  return (
    <>
    

    <Navs />
    <Login />
    

    <div className="row" id="contenedor_main">

      <h3 id="titulos" className="titulo">Peliculas</h3>

      <div className="peliculas" id="list_pelis">

      {isLoading ?
      <p>Cargando...</p>
      :

    movieList.map(movie=>
      
      <Link key={movie.id} to={'/pelicula/'+movie.original_title+'/'+movie.id}><div key={movie.id}><ItemPelicula key={movie.id} movieInfo={movie}/></div></Link>
        )
      
      }
    
        </div>
    </div>
    <Footer />
    </>





  )



}


export default peliculas;

   