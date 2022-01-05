import { useState } from 'react'
//import logo from './logo.svg'
import Index from './components/pages/index'
import Peliculas from './components/pages/peliculas/peliculas'
import Series from './components/pages/series/series'
import Formulario from './components/pages/formulario'
import Marcadores from './components/pages/marcadores'
import Opciones from './components/pages/opciones'


import Categorias from './components/pages/categorias/categorias'
import Pelicula from './components/pages/pelicula'
import Serie from './components/pages/serie'
import Login from './components/fragments/login'



import Busqueda from './components/pages/busquedas/busquedas'

import {BrowserRouter, Link, Route, Switch, Router} from 'react-router-dom'

import './App.css'


function App() {
  const [count, setCount] = useState(0)
  const [isAuth, setIsAuth] = useState(false)


  return (
    <>
    
    
    




    <BrowserRouter>

    <Switch>

    <Route path='/peliculas'>
        <Peliculas setIsAuth={setIsAuth} isAuth={isAuth}/>
      </Route>

      <Route path='/series'>
        <Series setIsAuth={setIsAuth} isAuth={isAuth}/>
      </Route>

      <Route path='/formulario'>
        <Formulario setIsAuth={setIsAuth} isAuth={isAuth}/>
      </Route>

      <Route path='/marcadores'>
        <Marcadores setIsAuth={setIsAuth} isAuth={isAuth}/>
      </Route>

      <Route path='/opciones'>
        <Opciones setIsAuth={setIsAuth} isAuth={isAuth}/>
      </Route>

      <Route path='/login'>
        <Login setIsAuth={setIsAuth} isAuth={isAuth}/>
      </Route>

      

      

      <Route path='/categorias/:categoria'>
        <Categorias setIsAuth={setIsAuth} isAuth={isAuth}/>
      </Route>

      <Route path='/pelicula/:title/:id'>
        <Pelicula setIsAuth={setIsAuth} isAuth={isAuth}/>
      </Route>

      <Route path='/serie/:title/:id'>
        <Serie setIsAuth={setIsAuth} isAuth={isAuth}/>
      </Route>

      <Route path='/busquedas/:title'>
        <Busqueda setIsAuth={setIsAuth} isAuth={isAuth}/>
      </Route>
      
      <Route path='/'>
        <Index setIsAuth={setIsAuth} isAuth={isAuth}/>
      </Route>

      


      </Switch>
      </BrowserRouter>

    </>
    
   /* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>*/

  )
}

export default App
