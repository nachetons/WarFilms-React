/* eslint-disable camelcase */
import { URL_IMG } from '@/diccionario/url'

export default function ItemSerie ({ movieInfo }) {
  const { poster_path } = movieInfo

  return (

    <div className='poster'>
      <img src={URL_IMG + poster_path} style={{ width: '100%' }} alt='Imagen portada' />
    </div>

  )
};
