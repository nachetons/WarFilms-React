/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable no-undef */
import Carrusel from './carrusel'
import { API_URL_POP, API_URL_RATED, API_URL_NEW } from '@/diccionario/url'
import fetchApi, { fetchApi2, fetchApi3 } from '@/components/fragments/fetchApi'

// import { useState, useEffect } from 'react'
// La línea sagradan NO TOCAR >:[

export default function carruseles ({ handleClick, setMostPopularMovieList, setMostRatedMovieList, setMostNewMovieList, mostPopularMovieList, mostRatedMovieList, mostNewMovieList, setIdTrailer }) {
  // const [isLoading, setIsloading] = useState(true)

  const { status, data } = fetchApi(API_URL_POP, 10)
  const { status2, data2 } = fetchApi2(API_URL_RATED, 10)
  const { status3, data3 } = fetchApi3(API_URL_NEW, 10)

  /* const getMoviesFromAPIBy = (toFetch) =>
    fetch(toFetch)
      .then(response => response.json())
      .then(responseConverted => responseConverted.results)

   function getMostPopularMovieList () {
    setIsloading(true)
    getMoviesFromAPIBy(API_URL_POP).then(result => {
      setMostPopularMovieList(takeItems(result))
      setIsloading(false)
    })
  }

  function getMostRatedMovieList () {
    setIsloading(true)
    getMoviesFromAPIBy(API_URL_RATED).then(result => {
      setMostRatedMovieList(takeItems(result))

      setIsloading(false)
    })
  }

  function getMostNewMovieList () {
    setIsloading(true)
    getMoviesFromAPIBy(API_URL_NEW).then(result => {
      setMostNewMovieList(takeItems(result))
      setIsloading(false)
    })
  }

  function takeItems (list) {
    const xs = []

    if (list.length < 10) {
      return xs
    } else {
      for (let i = 0; i < 10; i++) {
        xs.push(list[i])
      }
      return xs
    }
  } */

  return (
    <>
      <div className='container'>
        {
          !status
            // Cuando está cargando...
            ? <h3>Cargando...</h3>

          // Cuando está cargado

            : <Carrusel handleClick={handleClick} sliderNumber={1} movieList={data} setIdTrailer={setIdTrailer} title='Las más populares' />

        }{
          !status2

            ? <h3>Cargando...</h3>
            : <Carrusel handleClick={handleClick} sliderNumber={2} movieList={data2} setIdTrailer={setIdTrailer} title='Las más valoradas' />

            }
        {
          !status3

            ? <h3>Cargando...</h3>
            : <Carrusel handleClick={handleClick} sliderNumber={3} movieList={data3} setIdTrailer={setIdTrailer} title='Las nuevas' />

        }
      </div>
    </>
  )
}
