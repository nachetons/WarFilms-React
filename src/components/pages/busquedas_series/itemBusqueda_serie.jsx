
import { URL_IMG } from '../../../diccionario/url.jsx';




export default function ItemBusqueda({ movieInfo }) {
  const { name, overview, poster_path } = movieInfo;
  return (
    <>
      <div className="movie">
        <img id="foto" src={URL_IMG + poster_path} style={{ width: "8%" }} />

        <div className="content_film" id="${id}">
          <h3 className="titulo">{name}</h3>
          <p className="titulo-secundario">Sinopsis:</p>
          <p className="descripcion">{overview}</p>
        </div>
      </div>
    </>
  );
};