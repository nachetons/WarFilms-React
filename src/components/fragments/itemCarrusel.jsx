import Img from '../../images/1.jpg'

export default function ItemCarrusel({movieInfo, index}){
    return(

            <div className={"movie-card carrusel"+index}>
                <div className="delante">
                    <div className="movie-image"><img src={Img} /></div>
                    <h4 className="movie-title">{movieInfo.title}</h4>
                    <h6>{movieInfo.dateRealase}</h6>
                    <div className="movie-rating">{movieInfo.rating}</div>
                    <button className="boton-card flip">Sinopsis</button>
                </div>

                <div className="detras">
                    <strong>
                        {movieInfo.sinopsis}
                    </strong>
                    <br />
                    <button className="boton-card flp">Pelicula</button>
                </div>
            </div>
    );
};