import ItemCarrusel from './itemCarrusel'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
export default function Carrusel ({ sliderNumber, movieList, title, handleClick, setIdTrailer }) {
  const responsive = {
    0: { items: 1 },
    800: { items: 3 },
    1080: { items: 4 },
    1800: { items: 5 },
    1900: { items: 6 }
  }
  return (
    <>

      <h1>{title}</h1>

      <div className={'slider' + sliderNumber} id={'carruseles' + sliderNumber} data-pause='false'>
        <AliceCarousel
          autoPlay
          autoPlayInterval={2000}
          animationType='fadeout'
          disableButtonsControls
          infinite
          responsive={responsive}
          className='slider_content'
        >
          {movieList.map(movie => {
            return (<ItemCarrusel handleClick={handleClick} key={movie.id} setIdTrailer={setIdTrailer} movieInfo={movie} index={sliderNumber} />)
          })}
        </AliceCarousel>

      </div>

    </>
  )
}
