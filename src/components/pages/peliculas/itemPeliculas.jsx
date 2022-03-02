/* eslint-disable camelcase */
import { URL_IMG } from '@/diccionario/url'

export default function ItemPelicula ({ movieInfo }) {
  // eslint-disable-next-line camelcase
  const { poster_path } = movieInfo

  return (

    <div className='poster poster_pelicula'>
      <img src={URL_IMG + poster_path} style={{ width: '100%' }} alt='Imagen portada' />
    </div>

  )
};
