import Img from '../../images/1.jpg'
import ItemCarrusel from './itemCarrusel';

//La línea sagrada





const movieList=[
  {
    id:1,
    title:"Venom",
    rating:"83%",
    sinopsis:"Venom venom venom venom",
    dateRealase:"Sep 28,2018"
  },
  {
    id:2,
    title:"Pelicula nº2",
    rating:"20%",
    sinopsis:"Sauludo nº2",
    dateRealase:"Ene 21,2000"
  },
  {
    id:3,
    title:"Pelicula nº3",
    rating:"30%",
    sinopsis:"Sauludo nº3",
    dateRealase:"Ene 21,2000"
  },
  {
    id:4,
    title:"Pelicula nº4",
    rating:"40%",
    sinopsis:"Sauludo nº4",
    dateRealase:"Ene 21,2000"
  },
  {
    id:5,
    title:"Pelicula nº5",
    rating:"50%",
    sinopsis:"Sauludo nº5",
    dateRealase:"Ene 21,2000"
  },
  {
    id:6,
    title:"Pelicula nº6",
    rating:"60%",
    sinopsis:"Sauludo nº6",
    dateRealase:"Ene 21,2000"
  },
  {
    id:7,
    title:"Pelicula nº7",
    rating:"70%",
    sinopsis:"Sauludo nº7",
    dateRealase:"Ene 21,2000"
  },
  {
    id:8,
    title:"Pelicula nº8",
    rating:"80%",
    sinopsis:"Sauludo nº8",
    dateRealase:"Ene 21,2000"
  },
  {
    id:9,
    title:"Pelicula nº9",
    rating:"90%",
    sinopsis:"Sauludo nº9",
    dateRealase:"Ene 21,2000"
  },
  {
    id:10,
    title:"Pelicula nº10",
    rating:"100%",
    sinopsis:"Sauludo nº10",
    dateRealase:"Ene 21,2000"
  }
];


export default function carruseles(){
  return (
<>
<div className="container">

  <h1>Mas populares</h1>
  <div className="freetowatch-cards">
    <div className="slider1" id="carruseles1" data-pause="false"> 
      {movieList.map(movie=>{
        return (<ItemCarrusel key={movie.id} movieInfo={movie} index={1}/>)
        })
      }
    </div>
  </div>
  <br />
  <br />


  <h1>Estrenos</h1>
  <div className="freetowatch-cards">
    <div className="slider2" id="carruseles2" data-pause="false">
      {movieList.map(movie=>{
         return (<ItemCarrusel key={movie.id} movieInfo={movie} index={2}/>);
        })
      }
    </div>
  </div>
  <br />
  <br />


  <h1>Mejor valoradas</h1>
  <div className="freetowatch-cards">
    <div className="slider3" id="carruseles3" data-pause="false"></div>
      {movieList.map(movie=>{
         return (<ItemCarrusel key={movie.id} movieInfo={movie} index={3}/>);
       })
      }
    </div>
</div>

</>
);
}

