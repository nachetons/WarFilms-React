export default function NavSearch({searchValue,changeSearchValueFunction}){
    return (
    <ul className="icons-ul">
        <form className="log" id="myForm">
        {/*Al cambiar el "type" a texto se rompe el buscador en dos, hay que arreglar eso posteriormente.*/}
        <input  type="text"
                className="input-search" 
                id="mySearch" 
                placeholder="Search movies" 
                value={searchValue}
                onChange={(event)=>{changeSearchValueFunction(event.target.value)}}
                /*name="search"*/ 
                autoComplete="off"
        />

        <button className="boton-search" type="submit"><i className="fas fa-search"></i></button>
        <div id="textoPredict" className="textoPredict">
            <li>{searchValue}</li>
            <li>{searchValue}</li>
            <li>{searchValue}</li>
            <li>{searchValue}</li>            
        </div>
        </form>
        <li><a href="#"><i style={{width:"auto"}} className="fas fa-user" id="btn_login_nav" title="Portafolio"/></a></li>
    </ul>

    );
};