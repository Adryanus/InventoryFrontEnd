import CategoriaRow from "./CategoriaRow";

function CategoriaTable({
  categorias,
  onEliminar,
}) {
  return (
    <table className="table table-striped table-hover">

      <thead className="table-dark">

        <tr>

          <th>ID</th>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Acciones</th>

        </tr>

      </thead>

      <tbody>

        {categorias.map((categoria) => (

          <CategoriaRow
            key={categoria.id}
            categoria={categoria}
            onEliminar={onEliminar}
          />

        ))}

      </tbody>

    </table>
  );
}

export default CategoriaTable;