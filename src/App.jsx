import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Listar from './componentes/listar'
import Original from './componentes/original'
import Aleatorios from './componentes/aleatorios'
import Favoritos from './componentes/favoritos'
import Usuario from './componentes/usuario'
import Detalle from './componentes/detalle'
import Menu from './componentes/menu';

function App() {

  return (
    <Router>

    <Menu />
   
    <Routes>

        <Route path="/" element={<Listar />} />
        <Route path="/original" element={<Original />} />
        <Route path="/aleatorios" element={<Aleatorios />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/usuario" element={<Usuario />} />
        <Route path="/detalle/:name" element={<Detalle />} />

    </Routes>
 
    </Router>
  )
}

export default App
