import Carrusel from "./carrusel";
import { API_URL_POP, API_URL_RATED, API_URL_NEW } from "../../../diccionario/url";


import {useState,useEffect} from "react";
//La línea sagradan NO TOCAR >:[

export default function carruseles({handleClick}){
  const [mostPopularMovieList,setMostPopularMovieList]=useState([]);
  const [mostRatedMovieList,setMostRatedMovieList]=useState([]);
  const [mostNewMovieList,setMostNewMovieList]=useState([]);

  const [isLoading,setIsloading]=useState(true);
  
  const getMoviesFromAPIBy=(toFetch)=>
    fetch(toFetch)
    .then(response=>response.json())
    .then(responseConverted=>responseConverted.results);
  
  function getMostPopularMovieList(){
    setIsloading(true);
    getMoviesFromAPIBy(API_URL_POP).then(result=>{
      setMostPopularMovieList(takeItems(result));
      setIsloading(false);
    })
  }
  
  
  function getMostRatedMovieList(){
    setIsloading(true);
    getMoviesFromAPIBy(API_URL_RATED).then(result=>{
      setMostRatedMovieList(takeItems(result));
    
      setIsloading(false);
    })
  }


  function getMostNewMovieList(){
    setIsloading(true);
    getMoviesFromAPIBy(API_URL_NEW).then(result=>{
      setMostNewMovieList(takeItems(result));
      setIsloading(false);
    })
  }



  function takeItems(list){
    let xs=[];
   
    if (list.length<10){
      return xs;
      }else{
        for (let i=0;i<10;i++){
          xs.push(list[i]);
          
        }
        return xs;
      }
    
      
    



  }

  useEffect(() => {

    getMostPopularMovieList();
    getMostRatedMovieList();
    getMostNewMovieList();
    

}, []);
  return (
<>
  <div className="container">
      {
          isLoading ?
          //Cuando está cargando...
          <>
          <h3>Cargando...</h3>
          </>

          :

          //Cuando está cargado
          <>
         
              <Carrusel handleClick={handleClick} sliderNumber={1} movieList={mostPopularMovieList} title={"Las más populares"}/>
              <br />
              <br />

              <Carrusel handleClick={handleClick}sliderNumber={2} movieList={mostRatedMovieList} title={"Las más valoradas"}/>
              <br />
              <br />

              <Carrusel handleClick={handleClick}sliderNumber={3} movieList={mostNewMovieList} title={"Las nuevas"}/>
              
          </>
      }
  </div>
</>
);
}

