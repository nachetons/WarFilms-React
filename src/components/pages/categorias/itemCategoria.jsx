import logo from '../../../images/1.jpg'


const URL_IMG = "https://image.tmdb.org/t/p/w500/";


export default function ItemCategoria({movieInfo}){
    const {original_title,backdrop_path,release_date,vote_average,overview}=movieInfo;
    console.log(original_title);

    return(
        <a href="#">
        <div className="poster">
          <img src={URL_IMG+backdrop_path} style={{width: "100%"}} alt="Imagen portada"/>
        </div>
      </a>
    );
};