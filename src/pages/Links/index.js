import './styles.css';
import { FiArrowLeft, FiLink, FiTrash } from 'react-icons/fi'
import { Link } from 'react-router-dom';

export function Links() {
  return (
    <div className='links-container'>
      <div className='links-header'>
        <Link to="/">
          <FiArrowLeft size={38} color='#fff' />
        </Link>
        <h1>Meus links</h1>
      </div>

      <div className='links-item'>
        <button className='linke'>
          <FiLink size={18} color='#fff' />
          https://sujeitoprogramador.com
        </button>
        <button className='link-delete'>
          <FiTrash size={24} color='#ff5454' />
        </button>

      </div>
    </div>

  )
}