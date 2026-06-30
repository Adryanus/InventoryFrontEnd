import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import CategoriaTable from "../components/CategoriaTable";
import {
    obtenerCategorias,
    eliminarCategoria
} from "../services/categoriaService";

function Categorias() {

    const [categorias, setCategorias] = useState([]);
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

    

    async function borrarCategoria(id) {

        const confirmar = window.confirm(
            "¿Está seguro de eliminar esta categoría?"
        );

        if (!confirmar) return;

        try {

            await eliminarCategoria(id);

            cargarCategorias();

        } catch (error) {

            console.error(error);

            alert("No fue posible eliminar la categoría.");

        }

    }

    return (

        <div className="container mt-4">

            <div className="d-flex justify-content-between align-items-center mb-3">

                <h2>Categorías</h2>

                <Link
                    to="/categorias/nuevo"
                    className="btn btn-success">

                    + Nueva Categoría

                </Link>

            </div>

            <CategoriaTable
                categorias={categorias}
                onEliminar={borrarCategoria}
            />

        </div>

    );

}

export default Categorias;