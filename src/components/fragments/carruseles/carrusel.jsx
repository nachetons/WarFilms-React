import ItemCarrusel from './itemCarrusel'
import { Link } from 'react-router-dom'
export default function Carrusel ({ sliderNumber, movieList, title, handleClick, setIdTrailer }) {
  return (
    <>
      <h1>{title}</h1>
      <div className='freetowatch-cards'>
        <div className={'slider' + sliderNumber} id={'carruseles' + sliderNumber} data-pause='false'>
          {movieList.map(movie => {
            return (<Link key={movie.id} to={'/pelicula/' + movie.id}><ItemCarrusel handleClick={handleClick} key={movie.id} setIdTrailer={setIdTrailer} movieInfo={movie} index={sliderNumber} /></Link>)
          })}
        </div>
      </div>
    </>
  )
}
