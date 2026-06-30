import { useEffect, useState } from "react";

import { obtenerCategorias } from "../services/categoriaService";
import {
  crearArticulo,
  obtenerArticuloPorId,
  actualizarArticulo
} from "../services/articuloService";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
function ArticuloForm() {
  const [articulo, setArticulo] = useState({
    nombre: "",
    precio: "",
    stock: "",
    categoriaId: "",
  });

  const [categorias, setCategorias] = useState([]);

  const navigate = useNavigate();
  const { id } = useParams();

  async function cargarCategorias() {
    try {
      const datos = await obtenerCategorias();

      setCategorias(datos);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    cargarCategorias();
  }, []);

  async function cargarArticulo() {

    try {

      const datos = await obtenerArticuloPorId(id);

      setArticulo({
        nombre: datos.nombre,
        precio: datos.precio,
        stock: datos.stock,
        categoriaId: datos.categoriaId
      });

    } catch (error) {

      console.error(error);

    }

  }

  useEffect(() => {

    if (id) {

      cargarArticulo();

    }

  }, [id]);



  function handleChange(e) {
    const { name, value } = e.target;

    setArticulo({
      ...articulo,
      [name]: value,
    });
  }
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const nuevoArticulo = {
        ...articulo,
        precio: Number(articulo.precio),
        stock: Number(articulo.stock),
        categoriaId: Number(articulo.categoriaId),
      };

      if (id) {

        await actualizarArticulo(id, nuevoArticulo);
        toast.success("Artículo actualizado correctamente.");
      } else {

        await crearArticulo(nuevoArticulo);
        toast.success("Artículo creado correctamente.");
      }



      navigate("/articulos");
    } catch (error) {
      console.error(error);

      toast.error("Error al guardar el artículo.");
    }
  }
  console.log("Estado categorías:", categorias);
  return (
    <div className="card shadow">
      <div className="card-header">
        <h3>{id ? "Editar Artículo" : "Nuevo Artículo"}</h3>
      </div>

      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Nombre</label>

            <input
              type="text"
              className="form-control"
              name="nombre"
              value={articulo.nombre}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Precio</label>

            <input
              type="number"
              className="form-control"
              name="precio"
              value={articulo.precio}
              onChange={handleChange}
              min="0"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Stock</label>

            <input
              type="number"
              className="form-control"
              name="stock"
              value={articulo.stock}
              onChange={handleChange}
              min="0"
              required
            />
          </div>

          <div className="mb-4">
            <label className="form-label">Categoría</label>

            <select
              className="form-select"
              name="categoriaId"
              value={articulo.categoriaId}
              onChange={handleChange}
              required
            >
              <option value="">Seleccione una categoría</option>

              {categorias.map((categoria) => (
                <option key={categoria.id} value={categoria.id}>
                  {categoria.nombre}
                </option>
              ))}
            </select>
          </div>

          <div className="d-flex justify-content-end">
            <button
              type="submit"
              className="btn btn-success">

              {id ? "Actualizar" : "Guardar"}

            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ArticuloForm;
