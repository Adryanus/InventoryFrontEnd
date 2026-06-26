function ArticuloTable({ articulos }) {

    return (

        <table className="table table-striped">

            <thead>

                <tr>

                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Stock</th>
                    <th>Categoría</th>

                </tr>

            </thead>

            <tbody>

                {articulos.map((articulo) => (

                    <tr key={articulo.id}>

                        <td>{articulo.id}</td>
                        <td>{articulo.nombre}</td>
                        <td>${articulo.precio}</td>
                        <td>{articulo.stock}</td>
                        <td>{articulo.categoriaNombre}</td>

                    </tr>

                ))}

            </tbody>

        </table>

    );

}

export default ArticuloTable;