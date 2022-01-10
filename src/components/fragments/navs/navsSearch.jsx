import { useState, useEffect,useRef} from "react";
import {    SEARCH_URL_MOVIE,   API_KEY    } from "../../../diccionario/url";
import {Link,Redirect, useHistory} from 'react-router-dom'
import Login from '../login'

import useOutsideClick from '../../../tools/useOutSideClick';


//Linea sagrada nº4
export default function NavSearch({searchValue,changeSearchValueFunction, setIsAuth,isAuth}){
    const [isLoading,setIsLoading]=useState(false);
    const [movieList,setMovieList]=useState([]);
    const [login,setLogin]=useState(false);
    const [show, setSate] = useState(false);
    const ref = useRef();
    useOutsideClick(ref, () => {
      if (show) setSate(false);
    });

    const textoPre = document.getElementById('textoPredict');
    const search = document.getElementById('textoPredict');
    let history = useHistory();

    const titulos = [];

    useEffect(()=>{
        if(searchValue.length>1){
            setIsLoading(true);
            fetch(SEARCH_URL_MOVIE+searchValue+'&'+API_KEY)
            .then((res)=>res.json())
            .then(data=>{
                setMovieList(takeItems(data.results));
                setIsLoading(false);
            })
        };



        /*if (!isAuth){
            history.push('/peliculas');
        }*/
    },[searchValue]);



    
    const handleOnChange = (e) => {
        changeSearchValueFunction(e.target.value)
        
    }
    function handleClick() {
      history.push("/busquedas/" + searchValue);
    }



      function takeItems(list){
        let xs=[];

        if (list.length<10){
          console.log(xs);
          return xs;
          }


          
          
          else{

            for (let i=0;i<10;i++){
                
              xs.push(list[i]);

            }
            console.log(xs);
            return xs;
          }
        
    
      }

   


    return (
    <ul className="icons-ul">

        <form className="log" id="myForm" onSubmit={handleClick}>
        {/*Al cambiar el "type" a texto se rompe el buscador en dos, hay que arreglar eso posteriormente.*/}
        <input onClick={()=>setSate(!show)}
               type="text"
                className="input-search" 
                id="mySearch" 
                placeholder="Search movies" 
                value={searchValue}
                onChange={(event)=>{
                    handleOnChange(event);
                }}
                /*name="search"*/ 
                autoComplete="off"
        ></input>

       <button className="boton-search" type="submit"><i className="fas fa-search"></i></button>
            {
                searchValue.length>1&&show?
                isLoading?
                null
                :
                <div ref={ref} id="textoPredict" className="textoPredict" style={{display: "block", border:"thick solid red"}}>     
                  {movieList.map(movie=><Link key={movie.id} to={"/pelicula/" + movie.title +"/"+ movie.id}><li className="lista_predict" key={movie.id}><p>{movie.title}</p><p>{movie.release_date}</p></li></Link>)}
                </div>          
                :
                null
            }
      
        </form>


        <li><i style={{width:"auto"}} className="fas fa-user logo_inicio" onClick={()=>setLogin(lastState=>!lastState)}id="btn_login_nav" title="Portafolio"/></li>

            {login?
            <Login setLogin={setLogin} login={login} setIsAuth={setIsAuth} isAuth={isAuth}/>
          :
          null
          
          
          }
    </ul>


    );
};