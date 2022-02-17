/* eslint-disable no-undef */
/* eslint-disable react/jsx-indent */
import { auth } from '../../../../config'
import { useEffect, useRef, useState } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { API_KEY, SEARCH_URL_MOVIE, SEARCH_URL_TV } from '@/diccionario/url'

import useOutsideClick from '@/tools/useOutSideClick'
import Login from '@/components/fragments/login'
import getPreferencesImage from '../../functions/preferences/getPreferencesImage'
// import translate from '../../functions/translate'

export default function NavSearch ({ searchValue, changeSearchValueFunction, setIsAuth, isAuth }) {
  const [isLoading, setIsLoading] = useState(true)
  const [movieList, setMovieList] = useState([])
  const [login, setLogin] = useState(false)
  const [show, setSate] = useState(false)
  const ref = useRef()
  const timeout = useRef()
  const location = useLocation()
  const [imageUrl, setImageUrl] = useState(null)

  useEffect(() => {
    if (auth.currentUser) {
      getPreferencesImage(setImageUrl)
    }
  })

  // getPreferences(setValues)

  useEffect(() => {
    clearTimeout(timeout.current)

    if (searchValue.length > 1 && location.pathname !== '/series' && !location.pathname.includes('/serie/') && location.pathname.indexOf('/busquedas_series') === -1) {
      timeout.current = setTimeout(() => {
        // translate(searchValue, changeSearchValueFunction, setIsLoading, 'es', 'en')
        fetch(SEARCH_URL_MOVIE + searchValue + '&' + API_KEY)
          .then((res) => res.json())
          .then(data => {
            setMovieList(takeItems(data.results))
            setIsLoading(false)
          })
      }, 400)
    } else if (searchValue.length > 1) {
      timeout.current = setTimeout(() => {
        setIsLoading(true)
        fetch(SEARCH_URL_TV + searchValue + '&' + API_KEY)
          .then((res) => res.json())
          .then(data => {
            setMovieList(takeItems(data.results))
            setIsLoading(false)
          })
      }, 400)
    };
  }, [searchValue])

  useOutsideClick(ref, () => {
    if (show) setSate(false)
  })

  const history = useHistory()

  const handleOnChange = (e) => {
    changeSearchValueFunction(e.target.value)
  }
  function handleClick () {
    history.push('/busquedas/' + searchValue)
  }

  function handleClick2 () {
    history.push('busquedas_series/' + searchValue)
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
  }

  return (
    <ul className='icons-ul'>

      {location.pathname !== '/series' && location.pathname.indexOf('/serie') === -1 && location.pathname.indexOf('/busquedas_series') === -1
        ? <form className='log' id='myForm' onSubmit={handleClick}>

          <input
            onClick={() => setSate(!show)}
            type='text'
            className='input-search'
            id='mySearch'
            placeholder='Search movies'
            value={searchValue}
            onChange={(event) => {
              handleOnChange(event)
            }}
            /* name="search" */
            autoComplete='off'
          />
          </form>

        : <form className='log' id='myForm' onSubmit={handleClick2}>

          <input
            onClick={() => setSate(!show)}
            type='text'
            className='input-search'
            id='mySearch'
            placeholder='Search series'
            value={searchValue}
            onChange={(event) => {
              handleOnChange(event)
            }}
            autoComplete='off'
          />
          </form>}
      <button className='boton-search' type='submit'><i className='fas fa-search' /></button>
      {
          searchValue.length > 1 && show
            ? isLoading
                ? null
                : location.pathname !== '/series' && location.pathname.indexOf('/serie') === -1 && location.pathname.indexOf('/busquedas_series') === -1
                  ? <div ref={ref} id='textoPredict' className='textoPredict' style={{ display: 'block', border: 'thick solid red' }}>
                    {movieList.map(movie => <Link style={{ textDecoration: 'none' }} key={movie.id} to={'/pelicula/' + movie.id}><li className='lista_predict' key={movie.id}><p>{movie.title}</p><p>{movie.release_date}</p></li></Link>)}
                    </div>
                  : <div ref={ref} id='textoPredict' className='textoPredict' style={{ display: 'block', border: 'thick solid red' }}>
                    {movieList.map(movie => <Link style={{ textDecoration: 'none' }} key={movie.id} to={'/serie/' + movie.name + '/' + movie.id}><li className='lista_predict' key={movie.id}><p>{movie.name}</p><p>{movie.first_air_date}</p></li></Link>)}
                    </div>
            : null
        }
{imageUrl !== null && auth.currentUser
  ? <img className='image-nav' src={imageUrl} alt='preferences' onClick={() => setLogin(lastState => !lastState)} />
  : <li><i style={{ width: 'auto' }} className='fas fa-user logo_inicio' onClick={() => setLogin(lastState => !lastState)} id='btn_login_nav' title='Portafolio' /></li>}

      {login
        ? <Login setLogin={setLogin} login={login} setIsAuth={setIsAuth} isAuth={isAuth} />
        : null}
    </ul>

  )
};
