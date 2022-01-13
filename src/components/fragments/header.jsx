import logo from '../../images/1.jpg'
import {useState,useEffect} from 'react';
import { API_URL_POP, API_URL_RATED, API_URL_NEW } from "../../diccionario/url";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
const URL_IMG = "https://image.tmdb.org/t/p/w500/";


export default function Header(){
    const [headerMovies,setHeaderMovies]=useState([]);
    const [isLoading,setIsloading]=useState(true);

    const handleDragStart = (e) => e.preventDefault();


      
/*  
   function getMoviesFromApi(URL){
       return(
        fetch(URL)
        .then(response => response.json())
        .then(responseConverted=>responseConverted.results)
    )}

const getMoviesFromApi=(URL)=>{
    console.log("prueba const getMoviesFromApi")
    return(
    fetch(URL).then(response => response.json()).then(responseConverted=>responseConverted.results)
    )
}

    function getMovies(){
        setIsloading(true);
        getMoviesFromApi(API_URL_POP).then(movies=>{
            setHeaderMovies(movies);
            setIsloading(false);
        })
    }
*/
 
        
    

useEffect(()=>{
    setIsloading(true);
    fetch(API_URL_POP)
    .then(response => response.json())
    .then(responseConverted=>responseConverted.results)
    .then(movieResults=>{
        setHeaderMovies(movieResults);
        setIsloading(false)});

},[])

    return (
  <>



<div className="container">
      <div className="background">

      </div>
    </div>

    <div id="contenedor">
        {isLoading ?
            <p>CARGANDO....</p>
            
                :
                /*<AliceCarousel
        autoPlay
        autoPlayStrategy="none"
        autoPlayInterval={1000}
        animationDuration={1000}
        animationType="fadeout"
        infinite
        touchTracking={false}
        disableDotsControls
        disableButtonsControls
        items={items}
    />*/

        <AliceCarousel 
        autoPlay 
        autoPlayInterval={2700} 
        animationType="fadeout"
        disableDotsControls
        disableButtonsControls
        infinite
         className="slider_content">
            {
headerMovies.map(movie =>{

    return (
    <div id="pelis_header" key={movie.id}>
    <div className="mySlides fade">
    <img id="foto" src={URL_IMG+movie.poster_path}/>
    <div className="text_title">{movie.title}</div>
    <div className="text">{movie.vote_average}</div>
 </div>
</div>
   ) 

})




            }
        </AliceCarousel>
       /*  headerMovies.map(movie =>{

            return (
            <div id="pelis_header" key={movie.id}>
            <div className="mySlides fade">
            <img id="foto" src={logo}/>
            <div className="text_title">{movie.title}</div>
            <div className="text">{movie.vote_average}</div>
         </div>
    </div>
    
           ) 

        })*/
      
                

             
            
}
    </div>

</>
)
}