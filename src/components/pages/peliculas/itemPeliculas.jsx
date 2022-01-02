import logo from '../../../images/1.jpg'
import { URL_IMG } from '../../../diccionario/url';



export default function ItemPelicula({movieInfo}){
    const {original_title,backdrop_path,release_date,vote_average,overview,poster_path}=movieInfo;

    return(
 
        <div className="poster">
          <img src={URL_IMG+poster_path} style={{width: "100%"}} alt="Imagen portada"/>
        </div>
   
    );
};