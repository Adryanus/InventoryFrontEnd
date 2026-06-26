import { useEffect, useState } from "react";

import Header from "../components/Header";
import ArticuloTable from "../components/ArticuloTable";

import { obtenerArticulos } from "../services/articuloService";

function Articulos() {

    const [articulos, setArticulos] = useState([]);

    useEffect(() => {

        cargarArticulos();

    }, []);

    async function cargarArticulos() {

        try {

            const datos = await obtenerArticulos();

            setArticulos(datos);

        } catch (error) {

            console.error(error);

        }

    }

    return (

        <div className="container mt-4">

            <Header />

            <ArticuloTable articulos={articulos} />

        </div>

    );

}

export default Articulos;