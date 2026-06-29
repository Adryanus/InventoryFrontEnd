import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Articulos from "./pages/Articulos";
import Categorias from "./pages/Categorias";
import NuevoArticulo from "./pages/NuevoArticulo";
import EditarArticulo from "./pages/EditarArticulo";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/articulos" element={<Articulos />} />

        <Route path="/categorias" element={<Categorias />} />
        <Route path="/articulos/nuevo" element={<NuevoArticulo />} />
        <Route  path="/articulos/editar/:id" element={<EditarArticulo />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
