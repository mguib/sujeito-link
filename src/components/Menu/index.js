import './styles.css';
import {BsYoutube, BsInstagram} from 'react-icons/bs'
import { Link } from 'react-router-dom';

export function Menu(){
  return(
    <div className='menu'>
      <a className='social' href='https://youtube.com/c/sujeitoprogramador'>
        <BsYoutube color='#fff' size={24}/>
      </a>
      <a className='social' href='https://instagram.com/_mguibsoon'>
        <BsInstagram color='#fff' size={24}/>
      </a>
      <Link className='menu-item' to="/links">
        Meus links
      </Link>
    </div>
    
  )
} 