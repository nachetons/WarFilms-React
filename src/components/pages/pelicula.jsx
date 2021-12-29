
import logo from '../../images/1.jpg'
import '../../styles/main.css'
import '../../styles/navs.css'
import '../../styles/footer.css'
import '../../styles/carrusel.css'
import '../../styles/login.css'
import '../../styles/pelicula.css'


import '@fortawesome/fontawesome-free/css/all.min.css';
import '../../styles/mediaquerys.css'

import Login from '../fragments/login.jsx'
import Navs from '../fragments/navs.jsx'
import Footer from '../fragments/footer';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const pelicula = () => {
    const { title, id } = useParams();

    const API_KEY = 'api_key=cfe422613b250f702980a3bbf9e90716';
    const URL_BASE = 'https://api.themoviedb.org/3/';
    const SEARCH_URL = URL_BASE + 'search/movie?query=';
    const URL_IMG = "https://image.tmdb.org/t/p/w500";
    const SEARCH_URL_ID = URL_BASE + 'movie/';
    const URL_BUSQUEDA = SEARCH_URL + title + "&" + API_KEY;
    const URL_TRAILER = SEARCH_URL_ID + id + "?" + API_KEY + "&append_to_response=videos";
    let count=0;



    const [mostPopularMovieList, setMostPopularMovieList] = useState([]);
    const [isLoading, setIsloading] = useState(false);

    const getMoviesFromAPIBy = (toFetch) =>
        fetch(toFetch)
            .then(response => response.json())
            .then(responseConverted => responseConverted.results);

    function getMostPopularMovieList() {
        setIsloading(true);
        getMoviesFromAPIBy(URL_BUSQUEDA).then(result => {
            setMostPopularMovieList(result);
            setIsloading(false);
        });
    }




    const [trailerMovieList, settrailerMovieList] = useState([]);
    const [isLoading2, setIsloading2] = useState(false);

    const getTrailersFromAPIBy = (toFetch) =>
        fetch(toFetch)
            .then(response => response.json())
            .then(responseConverted => responseConverted.videos.results);

    function getTrailerMovieList() {
        setIsloading2(true);
        getTrailersFromAPIBy(URL_TRAILER).then(result => {
            settrailerMovieList(result);
            setIsloading2(false);
            console.log(result);


        })
    }

  


    //Al estar vacio el array la función del useEffect es solo de montado, es decir, solo se 
    //ejecuta la primera vez

    useEffect(getMostPopularMovieList, []);
    //useEffect(getTrailerMovieList, []);


    return (

        <>

            <Navs />
            <Login />
            {isLoading ?
                <p>Cargando...</p>
                :
                mostPopularMovieList.map(movie =>
    
                    
                    <div key={movie.id} className="container" id="listas_pelis">
                        <div className="contenedor-pelicula">

                            <img id="foto" src={URL_IMG + movie.poster_path} style={{ width: '35%' }} />
                            <div className="content_film" id={movie.id}>
                                <h3 className="titulo">{movie.original_title}</h3>
                                <p className="titulo-secundario">Sinopsis:</p>
                                <p className="descripcion">{movie.overview}</p>
                                <p><strong id="mytrailer"></strong></p>

                            </div>
                        </div>
                    </div>

                )

                }


                {isLoading2 ?
                <p>Cargando...</p>
                :
                
                trailerMovieList.map(trailer => 
                    {trailer.type=="Trailer" && trailer.site == "YouTube" ?
                    document.getElementById("mytrailer").innerHTML = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${trailer.key}" title="YouTube video player" frameborder="0" allow="accelerometer;
                    autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>` 
                :


                document.getElementById("mytrailer").innerHTML = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/_s4qXyZOJSQ" title="YouTube video player" frameborder="0" allow="accelerometer;
                    autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
                
                
                }
                  )

                


            }
            <Footer />



        </>





    )



}


export default pelicula