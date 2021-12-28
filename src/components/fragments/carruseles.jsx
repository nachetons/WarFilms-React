import Carrusel from "./carrusel";

import {useState,useEffect} from "react";
//La línea sagradan NO TOCAR >:[


export default function carruseles(){
  const [movieList,setMovieList]=useState([]);
  const [isLoading,setIsloading]=useState(false);
  const getMoviesFromJson=()=>
    fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&include_adult=false&include_video=false&page=1&api_key=cfe422613b250f702980a3bbf9e90716')
    .then(response=>response.json())
    .then(responseConverted=>responseConverted.results);

  function getMovieList(){
    setIsloading(true);
    getMoviesFromJson().then(result=>{
      setMovieList(result);
      setIsloading(false);
    })
  }
  //Al estar vacio el array la función del useEffect es solo de montado, es decir, solo se 
  //ejecuta la primera vez
  useEffect(getMovieList,[]);
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
              <Carrusel sliderNumber={1} movieList={movieList} title={"Las más populares"}/>
              <br />
              <br />

              <Carrusel sliderNumber={2} movieList={movieList} title={"Las nuevas"}/>
              <br />
              <br />

              <Carrusel sliderNumber={3} movieList={movieList} title={"Las más valoradas"}/>
            </div>
          </>
      }
  </div>
</>
);
}

