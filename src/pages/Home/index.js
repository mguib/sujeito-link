import {FiLink} from 'react-icons/fi';
import './styles.css';
import { Menu } from '../../components/Menu';

export function Home(){
  return(
    <div className="container-home">
      <div className="logo">
        <img src="/logo.png" alt="Sujeito Link Logo"/>
        <h1>SujeitoLink</h1>
        <span>Cole seu link para encurtar 👇</span>
      </div>

      <div className="area-input">
        <div>
          <FiLink size={24} color='#ffff'/>
          <input
            placeholder='Cole seu link aqui...'
          />
        </div>
        <button>Gerar Link</button>
      </div>

      <Menu/>

    </div>
    
  )
}