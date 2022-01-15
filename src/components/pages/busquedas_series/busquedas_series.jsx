import logo from '../../../images/1.jpg/';
import {SEARCH_URL_TV,API_KEY} from '../../../diccionario/url.jsx'
import ItemBusquedaSerie from './itemBusqueda_serie'
import '../../../styles/busquedas.css'

import Login from '../../fragments/login'
import Navs from '../../fragments/navs/navs'
import Footer from '../../fragments/footer';



import { useParams } from 'react-router-dom';
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'

const busquedas_series = ({setIsAuth, isAuth}) => {
    const {title} = useParams();
    const [movieList,setMovieList]=useState([]);
    const [isLoading,setIsloading]=useState(true);
    const URL_SEARCH = SEARCH_URL_TV + title + "&" + API_KEY

     
     const getMoviesFromAPIBy=(toFetch)=>
       fetch(toFetch)
       .then(response=>response.json())
       .then(responseConverted=>responseConverted.results);
     
     function getMostPopularMovieList(){
       const xs = [];
   
       setIsloading(true);
       getMoviesFromAPIBy(URL_SEARCH).then(result=>{
         if(result.length<4){
           result.map(item=>{ 
             xs.push(item);
           });
         }else{
           for(let i=0;i<=4;i++){
         
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

<Navs setIsAuth={setIsAuth} isAuth={isAuth}/>

<div className="container2">
      <div className="row" id="listas_pelis">
          
      {isLoading ?
      <p>Cargando...</p>
      :
     
      
      movieList.map(serie=>
      
        <Link key={serie.id} to={'/serie/'+serie.name+'/'+serie.id}><div key={serie.id}><ItemBusquedaSerie key={serie.id} movieInfo={serie}/></div></Link>
          )
        

      }

      <button className="btn_mas">Mostrar mas</button>
    </div>
  </div>


  <Footer />

</>
)


}

export default busquedas_series;