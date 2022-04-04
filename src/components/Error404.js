
import { Link } from "react-router-dom";
import "../components/error404.css"


export default function Error404 (){
    return (
        <div className="error404">

            <h1>Error 404</h1>
            <h2>Pagina no encontrada</h2>
            <Link to={"/"}>
                <h3>Volver al Inicio</h3>
            </Link>

        </div>
        
        );
}