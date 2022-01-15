import logo from '../../images/1.jpg'
import {useState,useEffect} from 'react';
import { API_URL_POP, API_URL_RATED, API_URL_NEW } from "../../diccionario/url";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
const URL_IMG = "https://image.tmdb.org/t/p/w500/";


export default function Header(){
    const [headerMovies,setHeaderMovies]=useState([]);
    const [isLoading,setIsloading]=useState(true);
    const [index,setIndex]=useState(0);


      
/*  
   function getMoviesFromApi(URL){
       return(
        fetch(URL)
        .then(response => response.json())
        .then(responseConverted=>responseConverted.results)
    )}

const getMoviesFromApi=(URL)=>{
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
function setMovies(movieIndex){
    let toSubstract=0;
    if(movieIndex>5){
        toSubstract=-7;
        //Esto lo pongo a -7 ya que va a llegar al if en la 6ºIteracion y
        //abajo le sumo 1 para que siga iterando en el array
    }
    //Utilizo la variable toSubstract para que el set del estado se ejecute en
    //el mismo orden, ya que si se condiciona o no se reenderiza un componente
    //en el mismo orden va a dar error sí o sí
    setIndex(lastIndex=>lastIndex+toSubstract+1);
}
useEffect(()=>{
    setIsloading(true);
    fetch(API_URL_POP)
    .then(response => response.json())
    .then(responseConverted=>responseConverted.results)
    .then(movieResults=>{
            setHeaderMovies(movieResults);
            setIsloading(false)});

},[]);


useEffect(() => {
    const interval = setInterval(() => {
        setMovies(index);
    }, 8000);
    return () => clearInterval(interval);
}, [index]);
    
    
    




    

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
            <div className='slider_content'>
                <div id="pelis_header" key={headerMovies[index].id}>
                    <div className="mySlides fade">
                        <img id="foto" src={URL_IMG+headerMovies[index].poster_path}/>
                        <div className="text_title">{headerMovies[index].title}</div>
                    <div className="text">{headerMovies[index].vote_average}</div>
                    </div>
                </div>
            </div> 
        }
    </div>

</>
)
}