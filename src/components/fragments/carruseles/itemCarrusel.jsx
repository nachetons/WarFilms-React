//import Img from '../../images/1.jpg'
const URL_IMG = "https://image.tmdb.org/t/p/w500/";
export default function ItemCarrusel({movieInfo, index}){
    const {original_title,backdrop_path,release_date,vote_average,overview,title}=movieInfo;
    return(

            <div className={"movie-card carrusel"+index}>
                <div className="delante">
                    <div className="movie-image"><img style={{width:"100%"}} src={URL_IMG+backdrop_path}/></div>
                    <h4 className="movie-title">{title}</h4>
                    <h6>{release_date}</h6>
                    <div className="movie-rating">{vote_average}</div>
                    <button className="boton-card flip">Trailer</button>
                </div>

                <div className="detras">
                    <strong>
                        {overview}
                    </strong>
                    <br />
                    <button className="boton-card flp">Pelicula</button>
                </div>
            </div>
    );
};