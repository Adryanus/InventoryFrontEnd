import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import ArticuloTable from "../components/ArticuloTable";
import { obtenerArticulos } from "../services/articuloService";

function Articulos() {

    const [articulos, setArticulos] = useState([]);

    async function cargarArticulos() {

        try {

            const datos = await obtenerArticulos();

            setArticulos(datos);

        } catch (error) {

            console.error(error);

        }

    }

   useEffect(() => {

    const cargarArticulos = async () => {

        try {

            const datos = await obtenerArticulos();

            setArticulos(datos);

        } catch (error) {

            console.error(error);

        }

    };

    cargarArticulos();

}, []);

    return (

        <div className="container mt-4">

            <div className="d-flex justify-content-between align-items-center mb-3">

                <h2>Artículos</h2>

                <Link
                    to="/articulos/nuevo"
                    className="btn btn-success">

                    + Nuevo Artículo

                </Link>

            </div>

            <ArticuloTable articulos={articulos} />

        </div>

    );

}

export default Articulos;