import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import Header from "../components/Header";
import ArticuloTable from "../components/ArticuloTable";

import {
    obtenerArticulos,
    eliminarArticulo,
} from "../services/articuloService";

import { toast } from "react-toastify";

function Articulos() {
    const [articulos, setArticulos] = useState([]);

    const location = useLocation();
    const navigate = useNavigate();

    async function cargarArticulos() {
        try {
            const datos = await obtenerArticulos();

            setArticulos(datos);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        cargarArticulos();
    }, []);

    useEffect(() => {

        if (location.state?.mensaje) {

            toast.success(location.state.mensaje);

            navigate(location.pathname, {
                replace: true,
                state: {},
            });

        }

    }, [location, navigate]);



    async function borrarArticulo(id) {
        const confirmar = window.confirm(
            "¿Está seguro de eliminar este artículo?"
        );

        if (!confirmar) return;

        try {
            await eliminarArticulo(id);

            toast.success("Artículo eliminado correctamente.");

            cargarArticulos();
        } catch (error) {
            console.error(error);

            toast.error("No fue posible eliminar el artículo.");
        }
    }

    return (
        <div className="container mt-4">
            <Header />

            <div className="d-flex justify-content-between align-items-center mb-3">
                <h2>Artículos</h2>

                <Link to="/articulos/nuevo" className="btn btn-success">
                    + Nuevo Artículo
                </Link>
            </div>

            <ArticuloTable
                articulos={articulos}
                onEliminar={borrarArticulo}
            />
        </div>
    );
}

export default Articulos;