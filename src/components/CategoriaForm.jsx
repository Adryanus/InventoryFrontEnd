import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
    crearCategoria,
    obtenerCategoriaPorId,
    actualizarCategoria
} from "../services/categoriaService";

function CategoriaForm() {

    const [categoria, setCategoria] = useState({
        nombre: "",
        descripcion: ""
    });

    const navigate = useNavigate();
    const { id } = useParams();
    async function cargarCategoria() {

        try {

            const datos = await obtenerCategoriaPorId(id);

            setCategoria(datos);

        } catch (error) {

            console.error(error);

        }

    }
    useEffect(() => {

        if (id) {

            cargarCategoria();

        }

    }, [id]);



    function handleChange(e) {

        const { name, value } = e.target;

        setCategoria({
            ...categoria,
            [name]: value
        });

    }

    async function handleSubmit(e) {

        e.preventDefault();

        try {

            if (id) {

                await actualizarCategoria(id, categoria);

                alert("Categoría actualizada correctamente.");

            } else {

                await crearCategoria(categoria);

                alert("Categoría creada correctamente.");

            }

            navigate("/categorias");

        } catch (error) {

            console.error(error);

            alert("Error al guardar la categoría.");

        }

    }

    return (

        <div className="card shadow">

            <div className="card-header">

                <h3>

                    {id ? "Editar Categoría" : "Nueva Categoría"}

                </h3>

            </div>

            <div className="card-body">

                <form onSubmit={handleSubmit}>

                    <div className="mb-3">

                        <label className="form-label">

                            Nombre

                        </label>

                        <input
                            type="text"
                            className="form-control"
                            name="nombre"
                            value={categoria.nombre}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <div className="mb-4">

                        <label className="form-label">

                            Descripción

                        </label>

                        <textarea
                            className="form-control"
                            rows="3"
                            name="descripcion"
                            value={categoria.descripcion}
                            onChange={handleChange}
                        />

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

export default CategoriaForm;