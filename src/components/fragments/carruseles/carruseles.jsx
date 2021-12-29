import Carrusel from "./carrusel";

import {useState,useEffect} from "react";
//La línea sagradan NO TOCAR >:[

  let date = new Date();
  let day = `0${date.getDate()}`.slice(-2);
  let month = `0${date.getMonth() - 2}`.slice(-2);
  let year = date.getFullYear();
  const last3months = year + "-" + month + "-" + day;
  const MOSTPOPULAR="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&include_adult=false&include_video=false&page=1&api_key=cfe422613b250f702980a3bbf9e90716";
export default function carruseles(){
  const [mostPopularMovieList,setMostPopularMovieList]=useState([]);
  const [isLoading,setIsloading]=useState(false);
  
  const getMoviesFromAPIBy=(toFetch)=>
    fetch(toFetch)
    .then(response=>response.json())
    .then(responseConverted=>responseConverted.results);
  
  function getMostPopularMovieList(){
    setIsloading(true);
    getMoviesFromAPIBy(MOSTPOPULAR).then(result=>{
      setMostPopularMovieList(result);
      setIsloading(false);
    })
  }
  //Al estar vacio el array la función del useEffect es solo de montado, es decir, solo se 
  //ejecuta la primera vez
  useEffect(getMostPopularMovieList,[]);
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

              <Carrusel sliderNumber={2} movieList={mostPopularMovieList} title={"Las nuevas"}/>
              <br />
              <br />

              <Carrusel sliderNumber={3} movieList={mostPopularMovieList} title={"Las más valoradas"}/>
            </div>
          </>
      }
  </div>
</>
);
}

