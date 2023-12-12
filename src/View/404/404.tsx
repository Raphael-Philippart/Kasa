import { Link } from "react-router-dom";
import "./404.scss";

export default function NotFound(): JSX.Element {
return (
        <div className="NotFound">
            <p>404</p>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/">Retourner sur la page d’accueil</Link>
        </div>
    );
}
