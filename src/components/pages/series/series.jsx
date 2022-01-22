
import '@fortawesome/fontawesome-free/css/all.min.css'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { API_URL_TV_POP } from '@/diccionario/url.jsx'
import '@/styles/carrusel.css'
import '@/styles/categorias.css'
import '@/styles/footer.css'
import '@/styles/login.css'
import '@/styles/main.css'
import '@/styles/mediaquerys.css'
import '@/styles/navs.css'
import Footer from '@/components/fragments/footer'
import Navs from '@/components/fragments/navs/navs'
import ItemSerie from './itemSeries'
import fetchApi from '@/components/fragments/fetchApi'








const series = ({ setIsAuth, isAuth }) => {
  const { categoria } = useParams();


  const {status, data} = fetchApi(API_URL_TV_POP);


  return (
    <>


      <Navs setIsAuth={setIsAuth} isAuth={isAuth} />


      <div className="row" id="contenedor_main">

        <h3 id="titulos" className="titulo">Series</h3>

        <div className="peliculas" id="list_pelis">

          {!status ?
            <p>Cargando...</p>
            :

            data.map(serie =>

              <Link key={serie.id} to={'/serie/' + serie.name + '/' + serie.id}><div key={serie.id}><ItemSerie key={serie.id} movieInfo={serie} /></div></Link>
            )

          }

        </div>
      </div>
      <Footer />
    </>





  )



}


export default series;