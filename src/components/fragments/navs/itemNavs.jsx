
import { Link } from 'react-router-dom'

export default function itemNavs (icono, categoria) {
  return (
    <Link to={'/categorias/' + categoria}>
      <div className='option'>
        <i className={icono + ' fa-2x'} title={categoria} />
        <h4 className='text_category'>{categoria}</h4>
      </div>
    </Link>
  )
}
