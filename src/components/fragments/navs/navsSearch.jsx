import { useEffect, useRef, useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import { API_KEY, SEARCH_URL_MOVIE, SEARCH_URL_TV } from "../../../diccionario/url";
import useOutsideClick from '../../../tools/useOutSideClick';
import Login from '../login';


export default function NavSearch({ searchValue, changeSearchValueFunction, setIsAuth, isAuth }) {
  const [isLoading, setIsLoading] = useState(true);
  const [movieList, setMovieList] = useState([]);
  const [login, setLogin] = useState(false);
  const [show, setSate] = useState(false);

  useEffect(() => {
    if (searchValue.length > 1 && window.location.pathname != '/series') {
      setIsLoading(true);
      fetch(SEARCH_URL_MOVIE + searchValue + '&' + API_KEY)
        .then((res) => res.json())
        .then(data => {
          setMovieList(takeItems(data.results));
          setIsLoading(false);
        })
    }

    else if (searchValue.length > 1) {
      setIsLoading(true);
      fetch(SEARCH_URL_TV + searchValue + '&' + API_KEY)
        .then((res) => res.json())
        .then(data => {
          setMovieList(takeItems(data.results));
          setIsLoading(false);
        })
    };



   
  }, [searchValue]);


  const ref = useRef();
  useOutsideClick(ref, () => {
    if (show) setSate(false);
  });

  let history = useHistory();



  const handleOnChange = (e) => {
    changeSearchValueFunction(e.target.value)

  }
  function handleClick() {
    history.push("/busquedas/" + searchValue);
  }



  function takeItems(list) {
    let xs = [];

    if (list.length < 10) {
      return xs;
    }




    else {

      for (let i = 0; i < 10; i++) {

        xs.push(list[i]);

      }
      return xs;
    }


  }




  return (
    <ul className="icons-ul">

      <form className="log" id="myForm" onSubmit={handleClick}>
        {window.location.pathname != "/series" ?
          <input onClick={() => setSate(!show)}
            type="text"
            className="input-search"
            id="mySearch"
            placeholder="Search movies"
            value={searchValue}
            onChange={(event) => {
              handleOnChange(event);
            }}
            /*name="search"*/
            autoComplete="off"
          ></input>
          :
          <input onClick={() => setSate(!show)}
            type="text"
            className="input-search"
            id="mySearch"
            placeholder="Search series"
            value={searchValue}
            onChange={(event) => {
              handleOnChange(event);
            }}
            autoComplete="off"
          ></input>

        }
        <button className="boton-search" type="submit"><i className="fas fa-search"></i></button>
        {
          searchValue.length > 1 && show ?
            isLoading ?
              null
              :
              window.location.pathname != "/series" ?
                <div ref={ref} id="textoPredict" className="textoPredict" style={{ display: "block", border: "thick solid red" }}>
                  {movieList.map(movie => <Link style={{ textDecoration: 'none' }} key={movie.id} to={"/pelicula/" + movie.title + "/" + movie.id}><li className="lista_predict" key={movie.id}><p>{movie.title}</p><p>{movie.release_date}</p></li></Link>)}
                </div>
                :
                <div ref={ref} id="textoPredict" className="textoPredict" style={{ display: "block", border: "thick solid red" }}>
                  {movieList.map(movie => <Link style={{ textDecoration: 'none' }} key={movie.id} to={"/serie/" + movie.name + "/" + movie.id}><li className="lista_predict" key={movie.id}><p>{movie.name}</p><p>{movie.first_air_date}</p></li></Link>)}
                </div>
            :
            null
        }

      </form>


      <li><i style={{ width: "auto" }} className="fas fa-user logo_inicio" onClick={() => setLogin(lastState => !lastState)} id="btn_login_nav" title="Portafolio" /></li>

      {login ?
        <Login setLogin={setLogin} login={login} setIsAuth={setIsAuth} isAuth={isAuth} />
        :
        null


      }
    </ul>


  );
};