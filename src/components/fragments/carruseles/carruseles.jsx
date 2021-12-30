import Carrusel from "./carrusel";
import { API_URL_POP, API_URL_RATED, API_URL_NEW } from "../../../diccionario/url";


import {useState,useEffect} from "react";
//La línea sagradan NO TOCAR >:[

export default function carruseles(){
  const [mostPopularMovieList,setMostPopularMovieList]=useState([]);
  const [mostRatedMovieList,setMostRatedMovieList]=useState([]);
  const [mostNewMovieList,setMostNewMovieList]=useState([]);

  const [isLoading,setIsloading]=useState(false);
  
  const getMoviesFromAPIBy=(toFetch)=>
    fetch(toFetch)
    .then(response=>response.json())
    .then(responseConverted=>responseConverted.results);
  
  function getMostPopularMovieList(){
    setIsloading(true);
    getMoviesFromAPIBy(API_URL_POP).then(result=>{
      setMostPopularMovieList(result);
      setIsloading(false);
    })
  }
  
  
  function getMostRatedMovieList(){
    setIsloading(true);
    getMoviesFromAPIBy(API_URL_RATED).then(result=>{
      setMostRatedMovieList(result);
      setIsloading(false);
    })
  }


  function getMostNewMovieList(){
    setIsloading(true);
    getMoviesFromAPIBy(API_URL_NEW).then(result=>{
      setMostNewMovieList(result);
      setIsloading(false);
      console.log(API_URL_NEW);
    })
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
          <div className="container">
              <Carrusel sliderNumber={1} movieList={mostPopularMovieList} title={"Las más populares"}/>
              <br />
              <br />

              <Carrusel sliderNumber={2} movieList={mostRatedMovieList} title={"Las más valoradas"}/>
              <br />
              <br />

              <Carrusel sliderNumber={3} movieList={mostNewMovieList} title={"Las nuevas"}/>
            </div>
          </>
      }
  </div>
</>
);
}

