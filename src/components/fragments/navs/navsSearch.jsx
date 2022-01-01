import { useState, useEffect} from "react";
import {    SEARCH_URL_MOVIE,   API_KEY    } from "../../../diccionario/url";


//Linea sagrada nº4
export default function NavSearch({searchValue,changeSearchValueFunction}){
    const [isLoading,setIsLoading]=useState(false);
    const [movieList,setMovieList]=useState([]);

    useEffect(()=>{
        if(searchValue.length>1){
            fetch(SEARCH_URL_MOVIE+searchValue+'&'+API_KEY)
            .then((res)=>res.json())
            .then(data=>{
                console.log(data.results);
            })
        };
    },[searchValue]);

    
    const handleOnChange = (e) => {
        changeSearchValueFunction(e.target.value)
    }

    return (
    <ul className="icons-ul">
        <form className="log" id="myForm">
        {/*Al cambiar el "type" a texto se rompe el buscador en dos, hay que arreglar eso posteriormente.*/}
        <input  type="text"
                className="input-search" 
                id="mySearch" 
                placeholder="Search movies" 
                value={searchValue}
                onChange={(event)=>{
                    handleOnChange(event);
                }}
                /*name="search"*/ 
                autoComplete="off"
        />

        <button className="boton-search" type="submit"><i className="fas fa-search"></i></button>
        <div id="textoPredict" className="textoPredict">     
            {
            }
        </div>
        </form>
        <li><a href="#"><i style={{width:"auto"}} className="fas fa-user" id="btn_login_nav" title="Portafolio"/></a></li>
    </ul>

    );
};