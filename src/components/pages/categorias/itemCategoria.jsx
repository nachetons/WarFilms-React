import logo from '../../../images/1.jpg'
import { URL_IMG } from '../../../diccionario/url';



export default function ItemCategoria({movieInfo}){
    const {original_title,backdrop_path,release_date,vote_average,overview}=movieInfo;

    return(
 
        <div className="poster">
          <img src={URL_IMG+backdrop_path} style={{width: "100%"}} alt="Imagen portada"/>
        </div>
   
    );
};