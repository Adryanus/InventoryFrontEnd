import { Link } from "react-router-dom";

function CategoriaRow({
  categoria,
  onEliminar,
}) {
  return (
    <tr>

      <td>{categoria.id}</td>

      <td>{categoria.nombre}</td>

      <td>{categoria.descripcion}</td>

      <td>

        <Link
          to={`/categorias/editar/${categoria.id}`}
          className="btn btn-warning btn-sm me-2"
        >
          Editar
        </Link>

        <button
          className="btn btn-danger btn-sm"
          onClick={() => onEliminar(categoria.id)}
        >
          Eliminar
        </button>

      </td>

    </tr>
  );
}

export default CategoriaRow;