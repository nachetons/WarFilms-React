import '@fortawesome/fontawesome-free/css/all.min.css'
import { useEffect, useRef, useState } from 'react'
import {
  API_KEY,
  URL_BASE
} from '@/diccionario/url'
import '@/styles/carrusel.css'
import '@/styles/footer.css'
import '@/styles/login.css'
import '@/styles/main.css'
import '@/styles/navs.css'
import useOutsideClick from '@/tools/useOutSideClick'
import Carrusel from '@/components/fragments/carruseles/carruseles'
import Footer from '@/components/fragments/footer'
import Header from '@/components/fragments/header'
// import Navs from '@/components/fragments/navs/navs'
import ItemTrailer from '@/components/fragments/itemTrailer'
// import fetchApi from '../fragments/fetchApi'

const IndexPage = ({ setIsAuth, isAuth }) => {
  const [show, setShow] = useState(false)
  const [mostPopularMovieList, setMostPopularMovieList] = useState([])
  const [mostRatedMovieList, setMostRatedMovieList] = useState([])
  const [mostNewMovieList, setMostNewMovieList] = useState([])
  const [idTrailer, setIdTrailer] = useState('')

  // LLAMADA AL TRAILER
  const [trailerMovieList, settrailerMovieList] = useState([])
  const [isLoading2, setIsloading2] = useState(true)
  const URL_TRAILER =
    URL_BASE +
    'movie/' +
    idTrailer +
    '?' +
    API_KEY +
    '&append_to_response=videos'

  useEffect(() => {
    if (idTrailer) {
      getTrailerMovieList()
    }
  }, [idTrailer])

  const ref = useRef()
  useOutsideClick(ref, () => {
    if (show) setShow(false)
  })

  const getTrailersFromAPIBy = (toFetch) =>
    // eslint-disable-next-line no-undef
    fetch(toFetch)
      .then((response) => response.json())
      .then((responseConverted) => responseConverted.videos.results)

  function getTrailerMovieList () {
    setIsloading2(true)
    getTrailersFromAPIBy(URL_TRAILER).then((result) => {
      settrailerMovieList(result)
      setIsloading2(false)
    })
  }

  const filterVideo = trailerMovieList.find(trailer => trailer.name.includes('Tráiler') || trailer.name.includes('Official Trailer') || trailer.name.includes('TRAILER'))

  return (
    <>
      <div className='all_carrusel' ref={ref} style={{ position: 'relative' }}>
        {show
          ? (
            <>
              <div
                className='iframe_index'
                onClick={() => setShow(!show)}
                style={{ position: 'absolute' }}
              >
                <div className='youtube-wrappers'>
                  <div className='trailers'>
                    <strong id='mytrailer' />
                    {isLoading2
                      ? (
                        <p>Cargando..</p>
                        )
                      : (
                          filterVideo
                            ? <div key={filterVideo.id}><ItemTrailer key={filterVideo.id} trailer={filterVideo} /></div>
                            : null

                        )}
                  </div>
                </div>
              </div>
            </>
            )
          : null}

        <Header />

        <Carrusel
          setMostPopularMovieList={setMostPopularMovieList}
          mostPopularMovieList={mostPopularMovieList}
          setMostRatedMovieList={setMostRatedMovieList}
          mostRatedMovieList={mostRatedMovieList}
          setMostNewMovieList={setMostNewMovieList}
          mostNewMovieList={mostNewMovieList}
          handleClick={setShow}
          setIdTrailer={setIdTrailer}
        />

        <Footer />
      </div>
    </>
  )
}

export default IndexPage
