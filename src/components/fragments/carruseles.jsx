import Img from '../../images/1.jpg'
import ItemCarrusel from './itemCarrusel';

//La línea sagrada





const movieList=[
  {
    title:"Venom",
    rating:"83%",
    sinopsis:"Venom venom venom venom",
    dateRealase:"Sep 28,2018"
  }
];


function displayMovies(movie,id){
  let xs=[]
  for (let i = 0; i <10; i++) {
  xs.push(<ItemCarrusel movieInfo={movie} index={id}/>);
  }
  return xs;
}


export default function carruseles(){
  return (
<>
<div className="container">

  <h1>Mas populares</h1>
  <div className="freetowatch-cards">
  <div className="slider" id="carruseles1" data-pause="false"></div>
  {displayMovies(movieList[0],1)}
  </div>
  <br />
  <br />
  <h1>Estrenos</h1>
  <div className="freetowatch-cards">
  <div className="slider" id="carruseles2" data-pause="false"></div>
  {displayMovies(movieList[0],2)}
  </div>
  <br />
  <br />
  <h1>Mejor valoradas</h1>
  <div className="freetowatch-cards">
  <div className="slider" id="carruseles3" data-pause="false"></div>
  {displayMovies(movieList[0],3)}
  </div>
</div>

</>
);
}

