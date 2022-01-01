import logo from '../../../images/1.jpg/';
import {SEARCH_URL_MOVIE,API_KEY} from '../../../diccionario/url.jsx'
import ItemBusqueda from './itemBusqueda'
import '../../../styles/busquedas.css'

import Login from '../../fragments/login'
import Navs from '../../fragments/navs/navs'
import Footer from '../../fragments/footer';



import { useParams } from 'react-router-dom';
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'

const busquedas = () => {
    const {title} = useParams();
    const [movieList,setMovieList]=useState([]);
    const [isLoading,setIsloading]=useState(false);
    const URL_SEARCH = SEARCH_URL_MOVIE + title + "&" + API_KEY
   
     
     const getMoviesFromAPIBy=(toFetch)=>
       fetch(toFetch)
       .then(response=>response.json())
       .then(responseConverted=>responseConverted.results);
     
     function getMostPopularMovieList(){
       const xs = [];
   
       setIsloading(true);
       getMoviesFromAPIBy(URL_SEARCH).then(result=>{
         if(result.length<6){
           result.map(item=>{
             xs.push(item);
           });
         }else{
           for(let i=0;i<=6;i++){
         
             xs.push(result[i]);
        }
         }
         
         setMovieList(xs);
         setIsloading(false);
       })
     }

     useEffect(getMostPopularMovieList,[]);

return (
<>

<Navs />
<Login />

<div className="container2">
      <div className="row" id="listas_pelis">
          
      {isLoading ?
      <p>Cargando...</p>
      :

    movieList.map(movie=>
      
      <Link key={movie.id} to={'/pelicula/'+movie.original_title+'/'+movie.id}><div key={movie.id}><ItemBusqueda key={movie.id} movieInfo={movie}/></div></Link>
        )
      
      }

      <button className="btn_mas">Mostrar mas</button>
    </div>
  </div>


  <Footer />

</>
)


}

export default busquedas;