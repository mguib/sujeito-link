import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';

import {Home} from './pages/Home';
import {Links} from './pages/Links';

export function RoutesApp(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/links" element={<Links/>}/>
      </Routes>
    </BrowserRouter>
  )
}