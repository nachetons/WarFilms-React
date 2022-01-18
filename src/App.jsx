import { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import Login from './components/fragments/login'
import Actor from './components/pages/actor'
import Busqueda from './components/pages/busquedas/busquedas'
import Busqueda_Series from './components/pages/busquedas_series/busquedas_series'
import Categorias from './components/pages/categorias/categorias'
import Formulario from './components/pages/formulario'
import Index from './components/pages/index'
import Marcadores from './components/pages/marcadores'
import Opciones from './components/pages/opciones'
import Pelicula from './components/pages/pelicula'
import Peliculas from './components/pages/peliculas/peliculas'
import Serie from './components/pages/serie'
import Series from './components/pages/series/series'



function App() {
  const [count, setCount] = useState(0)
  const [isAuth, setIsAuth] = useState(false)


  return (
    <>


      <BrowserRouter>

        <Switch>

          <Route path='/peliculas'>
            <Peliculas setIsAuth={setIsAuth} isAuth={isAuth} />
          </Route>

          <Route path='/series'>
            <Series setIsAuth={setIsAuth} isAuth={isAuth} />
          </Route>

          <Route path='/formulario'>
            <Formulario setIsAuth={setIsAuth} isAuth={isAuth} />
          </Route>

          <Route path='/marcadores'>
            <Marcadores setIsAuth={setIsAuth} isAuth={isAuth} />
          </Route>

          <Route path='/opciones'>
            <Opciones setIsAuth={setIsAuth} isAuth={isAuth} />
          </Route>

          <Route path='/login'>
            <Login setIsAuth={setIsAuth} isAuth={isAuth} />
          </Route>





          <Route path='/categorias/:categoria'>
            <Categorias setIsAuth={setIsAuth} isAuth={isAuth} />
          </Route>

          <Route path='/pelicula/:title/:id'>
            <Pelicula setIsAuth={setIsAuth} isAuth={isAuth} />
          </Route>

          <Route path='/serie/:title/:id'>
            <Serie setIsAuth={setIsAuth} isAuth={isAuth} />
          </Route>

          <Route path='/busquedas/:title'>
            <Busqueda setIsAuth={setIsAuth} isAuth={isAuth} />
          </Route>

          <Route path='/busquedas_series/:title'>
            <Busqueda_Series setIsAuth={setIsAuth} isAuth={isAuth} />
          </Route>
          <Route path='/actor/:id'>
            <Actor setIsAuth={setIsAuth} isAuth={isAuth} />
          </Route>
          <Route path='/'>
            <Index setIsAuth={setIsAuth} isAuth={isAuth} />
          </Route>




        </Switch>
      </BrowserRouter>

    </>

  )
}

export default App
