import { Link } from "react-router-dom";

function ArticuloRow({ articulo }) {

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
                    className="btn btn-warning btn-sm"
                >
                    Editar
                </Link>

                <button
                    className="btn btn-danger btn-sm">

                    Eliminar

                </button>

            </td>

        </tr>

    );

}

export default ArticuloRow;