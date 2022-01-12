import logo from '../../images/1.jpg'
import {useState,useEffect} from 'react';
import { API_URL_POP, API_URL_RATED, API_URL_NEW } from "../../diccionario/url";


export default function Header(){
    const [headerMovies,setHeaderMovies]=useState([]);
    const [isLoading,setIsloading]=useState(true);


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
            
         headerMovies.map(movie =>{
            return (
            <div id="pelis_header" key={movie.id}>
            <div className="mySlides fade">
            <img id="foto" src={logo}/>
            <div className="text_title">{movie.title}</div>
            <div className="text">{movie.vote_average}</div>
         </div>
    </div>
           ) 

        })
                  
                

             
            
}
    </div>

</>
)
}