import ArticuloRow from "./ArticuloRow";

function ArticuloTable({
    articulos,
    onEliminar
}) {

    return (

        <table className="table table-striped table-hover">

            <thead className="table-dark">

                <tr>

                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Stock</th>
                    <th>Categoría</th>
                    <th>Acciones</th>

                </tr>

            </thead>

            <tbody>

                {articulos.map((articulo) => (

                    <ArticuloRow
                        key={articulo.id}
                        articulo={articulo}
                        onEliminar={onEliminar}
                    />

                ))}

            </tbody>

        </table>

    );

}

export default ArticuloTable;