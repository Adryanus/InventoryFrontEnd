import { Link } from "react-router-dom";

function Navbar() {

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

            <div className="container">

                <Link className="navbar-brand" to="/">
                    Inventory
                </Link>

                <div className="navbar-nav">

                    <Link className="nav-link" to="/">
                        Inicio
                    </Link>

                    <Link className="nav-link" to="/articulos">
                        Artículos
                    </Link>

                    <Link className="nav-link" to="/categorias">
                        Categorías
                    </Link>

                </div>

            </div>

        </nav>

    );

}

export default Navbar;