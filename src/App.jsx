
import { Routes, Route } from 'react-router-dom';
import Nav from "./components/Nav.jsx";
import Inicio from "./pages/Inicio.jsx";
import Contacto from "./pages/Contacto.jsx";
import Productos from "./pages/Productos.jsx";
import Accesorios from "./pages/Accesorios.jsx";
import Nosotros from './pages/Nosotros.jsx';
import Carrito from './pages/Carrito.jsx';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Nav/>}>
          <Route path="inicio" element={<Inicio/>} />
          <Route path="productos" element={<Productos/>} />
          <Route path="Accesorios" element={<Accesorios/>} />
          <Route path="Nosotros" element={<Nosotros/>} />
          <Route path="contacto" element={<Contacto/>} />
          <Route path="Carrito" element={<Carrito/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App