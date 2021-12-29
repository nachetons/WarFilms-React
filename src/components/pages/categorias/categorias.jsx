
import logo from '../../../images/1.jpg'
import '../../../styles/main.css'
import '../../../styles/navs.css'
import '../../../styles/footer.css'
import '../../../styles/carrusel.css'
import '../../../styles/login.css'
import '../../../styles/categorias.css'


import '@fortawesome/fontawesome-free/css/all.min.css';
import '../../../styles/mediaquerys.css'

import Login from '../../fragments/login.jsx'
import Navs from '../../fragments/navs.jsx'
import Footer from '../../fragments/footer';
import ItemCategoria from './itemCategoria';
import { useParams } from 'react-router-dom';
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'


const categorias = () => {
 const {categoria} = useParams();
 const [movieList,setMovieList]=useState([]);
 const [isLoading,setIsloading]=useState(false);
 const [categorias,setCategoria]=useState([categoria]);
 const URL_BASE = 'https://api.themoviedb.org/3/';
 const API_KEY = 'api_key=cfe422613b250f702980a3bbf9e90716';



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
  "Romance":10751,
  "Thriller":53,
  "War":10752,
  "Action & Adventure":10759,
  "Western":37
};
 const API_URL_CATEGORY = URL_BASE + 'discover/movie?sort_by=popularity.desc&vote_count.gte=2000&'+API_KEY+'&with_genres='+arrayMovies[categoria];
  
  const getMoviesFromAPIBy=(toFetch)=>
    fetch(toFetch)
    .then(response=>response.json())
    .then(responseConverted=>responseConverted.results);
  
  function getMostPopularMovieList(){
    const xs = [];

    setIsloading(true);
    getMoviesFromAPIBy(API_URL_CATEGORY).then(result=>{
      if(result.length<15){
        result.map(item=>{
          xs.push(item);
        });
      }else{
        for(let i=0;i<=15;i++){
      
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
    
    <h3 id="titulos" className="titulo">{categoria}</h3>

    <div className="row" id="contenedor_main">

      <div className="peliculas" id="list_pelis">

      {isLoading ?
      <p>Cargando...</p>
      :

    movieList.map(movie=>
      
      <Link key={movie.id} to={'/pelicula/'+movie.original_title+'/'+movie.id}><div key={movie.id}><ItemCategoria key={movie.id} movieInfo={movie}/></div></Link>
        )
      
      }
    
        </div>
    </div>
    <Footer />
    </>





  )



}


export default categorias



    


    

  

  /*  <script>
      var slideIndex = 0;
      let tiempocambio = 3000;
      showSlides();
      function showSlides() {
        
       var i;

       var slides = document.getElementsByclassNameName("mySlides");

       for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        
if (i==0) {
  
  tiempocambio=0;

}else{
  tiempocambio=3000;
}
        
       }
       slideIndex++;
       if(slideIndex > slides.length) {slideIndex = 1}
       slides[slideIndex-1].style.display = "block";

       setTimeout(showSlides,tiempocambio);
       }
    
    </script>*/

   