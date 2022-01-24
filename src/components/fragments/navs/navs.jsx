
import { useState } from 'react'
import { Link } from 'react-router-dom'
import NavsSearch from './navsSearch.jsx'

const navs = ({ setIsAuth, isAuth }) => {
  const iconos = ['fas fa-bomb', 'fas fa-running', 'fab fa-d-and-d', 'fas fa-grin-squint',
    'fas fa-user-secret', 'fas fa-theater-masks', 'fas fa-dragon', 'fas fa-baby',
    'fas fa-dizzy', 'fas fa-book', 'fas fa-hand-holding-heart', 'fas fa-rocket', 'fas fa-mask', 'fas fa-fighter-jet',
    'fas fa-hat-cowboy']

  const categoryName = ['Action', 'Adventure', 'Animation', 'Comedy',
    'Crime', 'Drama', 'Fantasy', 'Family',
    'Horror', 'History', 'Romance', 'Science Fiction', 'Thriller', 'War',
    'Western']
  const [searchValue, setSearchValue] = useState('')

  if (isAuth === true) {
    return (
      <>
        <nav>
          <ul className='logo-ul'>
            <li className='toggle' id='btn_movil'><i className='fas fa-bars' /></li>
            <Link to='/' className='logo' />
            <li className='menu_options'><Link to='/peliculas'>Peliculas</Link></li>
            <li className='menu_options'><Link to='/series'>Series</Link></li>
            <li className='menu_options'><Link to='/formulario'>Contacto</Link></li>
            <li className='menu_options'><Link to='/marcadores'>Marcadores</Link></li>
            <li className='menu_options'><Link to='/opciones'>Opciones</Link></li>

          </ul>
          <NavsSearch
            searchValue={searchValue}
            changeSearchValueFunction={setSearchValue}
            setIsAuth={setIsAuth}
            isAuth={isAuth}
          />

        </nav>

        <div className='menu__side' id='menu_side'>
          <div className='options__menu'>

            {categoryName.map((categoria, index) => {
              return (

                // PREGUNTAR POR PASAR COMPONENTES A OTROS COMPONENTES
                <Link key={index} to={'/categorias/' + categoria}>
                  <div className='option'>
                    <i className={iconos[index] + ' fa-2x'} title={categoria} />
                    <h4 className='text_category'>{categoria}</h4>
                  </div>
                </Link>
              )
            })}

          </div>

        </div>

      </>
    )
  } else {
    return (
      <>
        <nav>
          <ul className='logo-ul'>
            <li className='toggle' id='btn_movil'><i className='fas fa-bars' /></li>
            <Link to='/' className='logo' />
            <li className='menu_options'><Link to='/peliculas'>Peliculas</Link></li>
            <li className='menu_options'><Link to='/series'>Series</Link></li>
            <li className='menu_options'><Link to='/formulario'>Contacto</Link></li>

          </ul>
          <NavsSearch
            searchValue={searchValue}
            changeSearchValueFunction={setSearchValue}
            setIsAuth={setIsAuth}
            isAuth={isAuth}
          />

        </nav>

        <div className='menu__side' id='menu_side'>
          <div className='options__menu'>

            {categoryName.map((categoria, index) => {
              return (

                // PREGUNTAR POR PASAR COMPONENTES A OTROS COMPONENTES
                <Link key={index} to={'/categorias/' + categoria}>
                  <div className='option'>
                    <i className={iconos[index] + ' fa-2x'} title={categoria} />
                    <h4 className='text_category'>{categoria}</h4>
                  </div>
                </Link>
              )
            })}

          </div>

        </div>

      </>
    )
  }
}
export default navs
