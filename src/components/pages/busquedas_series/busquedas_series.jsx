/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable no-undef */
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { API_KEY, SEARCH_URL_TV } from '@/diccionario/url.jsx'
import '@/styles/busquedas.css'
import Footer from '@/components/fragments/footer'
// import Navs from '@/components/fragments/navs/navs'
import ItemBusquedaSerie from './itemBusqueda_serie'

const busquedasSeries = ({ setIsAuth, isAuth }) => {
  const { title } = useParams()
  const [movieList, setMovieList] = useState([])
  const [isLoading, setIsloading] = useState(true)
  const [pageNumber, setPageNumber] = useState(1)
  const [secondmovieList, setSecondmovieList] = useState([])
  const URL_SEARCH = SEARCH_URL_TV + title + '&' + API_KEY + '&page=' + pageNumber

  useEffect(() => {
    getMostPopularMovieList(setMovieList)
    getMostPopularMovieList(setSecondmovieList)
  },

  [pageNumber])

  const getMoviesFromAPIBy = (toFetch) =>
    fetch(toFetch)
      .then(response => response.json())
      .then(responseConverted => responseConverted.results)

  function getMostPopularMovieList (f) {
    setIsloading(true)
    getMoviesFromAPIBy(URL_SEARCH).then(result => {
      setMovieList(result)
      f(result)
      setIsloading(false)
    })
  }

  return (
    <>

      <div className='container2'>
        <div className='row' id='listas_pelis'>

          {isLoading
            ? <p>Cargando...</p>
            : <>
              {
              movieList.length === 0
                ? <p style={{ width: '40px', height: '40px', margin: '100px' }}>No hay resultados</p>
                : movieList.map(serie =>

                  <Link key={serie.id} to={'/serie/' + serie.name + '/' + serie.id}><div key={serie.id}><ItemBusquedaSerie key={serie.id} movieInfo={serie} /></div></Link>
                )
}

              <div className='pagination'>
                {pageNumber === 1
                  ? null
                  : <a onClick={() => setPageNumber((lastPage) => lastPage - 1)} className='btn_pagination btn_atras'>Atras</a>}
                <button className='btn_mas'>{pageNumber}</button>

                {secondmovieList.length === 0
                  ? null
                  : <a onClick={() => setPageNumber((lastPage) => lastPage + 1)} className='btn_pagination'>Siguiente</a>}
              </div>
            </>}
        </div>
      </div>
      <Footer />

    </>
  )
}

export default busquedasSeries
