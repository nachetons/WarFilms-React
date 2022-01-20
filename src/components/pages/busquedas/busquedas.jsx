import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { API_KEY, SEARCH_URL_MOVIE } from '@/diccionario/url.jsx';
import '@/styles/busquedas.css';
import Footer from '@/components/fragments/footer';
import Navs from '@/components/fragments/navs/navs';
import ItemBusqueda from './itemBusqueda';





const busquedas = ({ setIsAuth, isAuth }) => {
  const { title } = useParams();
  const [movieList, setMovieList] = useState([]);
  const [secondmovieList, setSecondmovieList] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [page_Number, setPageNumber] = useState(1);
  const URL_SEARCH = SEARCH_URL_MOVIE + title + "&" + API_KEY+"&page="+page_Number;


  useEffect( ()=>
    {
      getMostPopularMovieList(setMovieList);
      getMostPopularMovieList(setSecondmovieList);

    
    },
    
    [page_Number]);


  const getMoviesFromAPIBy = (toFetch) =>
    fetch(toFetch)
      .then(response => response.json())
      .then(responseConverted => responseConverted.results);

  function getMostPopularMovieList(f) {
    const xs = [];

    setIsloading(true);
    getMoviesFromAPIBy(URL_SEARCH).then(result => {


      f(result);
      setIsloading(false);
    })
  }


  return (
    <>

      <Navs setIsAuth={setIsAuth} isAuth={isAuth} />

      <div className="container2">
        <div className="row" id="listas_pelis">

          {isLoading ?
            <p>Cargando...</p>
            :
            <>
            {
              movieList.length==0?
              <p style={{width:"40px",height:"40px", margin:"100px"}}>No hay resultados</p>
              :
              movieList.map(movie =>

                <Link style={{ textDecoration: 'none' }} key={movie.id} to={'/pelicula/' + movie.original_title + '/' + movie.id}><div key={movie.id}><ItemBusqueda key={movie.id} movieInfo={movie} /></div></Link>
              )
            }
           
            <div className="pagination">
          {page_Number==1 ?
          null
          :
          <a onClick={() =>setPageNumber((lastPage)=>lastPage-1)} className="btn_pagination btn_atras">Atras</a>

        
        }
          <button className="btn_mas">{page_Number}</button>
          {console.log(page_Number)}
          
          {secondmovieList.length==0 ?
          null
          :
          <a onClick={() =>setPageNumber((lastPage)=>lastPage+1)}className="btn_pagination">Siguiente</a>

        
        }
        </div>
            </>
          }

        </div>
      </div>


      <Footer />

    </>
  )


}

export default busquedas;