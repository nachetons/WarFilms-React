import ItemCarrusel from './itemCarrusel';
export default function Carrusel({sliderNumber,movieList,title}){
    return(
    <>
        <h1>{title}</h1>
        <div className="freetowatch-cards">
        <div className={"slider"+sliderNumber} id={"carruseles"+sliderNumber} data-pause="false"> 
            {movieList.map(movie=>{
                return (<ItemCarrusel key={movie.id} movieInfo={movie} index={sliderNumber}/>)
            })}
        </div>
    </div>
    </>
    );
}