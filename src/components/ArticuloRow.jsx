import { Link } from "react-router-dom";

function ArticuloRow({
    articulo,
    onEliminar
}) {

    return (

        <tr>

            <td>{articulo.id}</td>

            <td>{articulo.nombre}</td>

            <td>${articulo.precio}</td>

            <td>{articulo.stock}</td>

            <td>{articulo.categoriaNombre}</td>

            <td>

                <Link
                    to={`/articulos/editar/${articulo.id}`}
                    className="btn btn-warning btn-sm me-2"
                >
                    Editar
                </Link>

                <button
                    className="btn btn-danger btn-sm"
                    onClick={() => onEliminar(articulo.id)}
                >
                    Eliminar
                </button>

            </td>

        </tr>

    );

}

export default ArticuloRow;