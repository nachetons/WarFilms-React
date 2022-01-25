/* eslint-disable camelcase */

import { URL_IMG } from '../../../diccionario/url.jsx'
import imageNoLoad from '@/images/ImageNoLoad.jpg'

export default function ItemBusqueda ({ movieInfo }) {
  const { title, overview, poster_path } = movieInfo

  return (
    <>
      <div className='movie'>

        {poster_path != null
          ? <img id='foto' src={URL_IMG + poster_path} style={{ width: '15%' }} />
          : <img id='foto' src={imageNoLoad} style={{ width: '15%' }} />}
        <div className='content_film'>
          <h3 className='titulo'>{title}</h3>
          <p className='titulo-secundario'>Sinopsis:</p>
          <p className='descripcion'>{overview}</p>
        </div>
      </div>
    </>
  )
};
