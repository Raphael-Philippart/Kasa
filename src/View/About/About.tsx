import Banner from "../../Component/Banner/Banner";
import background from "./img/background-about.png";
import "./About.scss";
import Accordion from "../../Component/Accordion/Accordion";

export default function About(): JSX.Element {
    return (
        <>
            <Banner img={background} altText="Bannière d'accueil" textCenter="" />
            <div className="About">
                <Accordion title="Fiabilité"
                           value="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
                           active={false} valueIsArray={false} txtSizeContent="24px"/>
                <Accordion title="Respect"
                           value="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
                           active={false} valueIsArray={false} txtSizeContent="24px" />
                <Accordion title="Service"
                           value="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
                           active={false} valueIsArray={false} txtSizeContent="24px" />
                <Accordion title="Sécurité"
                           value="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
                           active={false} valueIsArray={false} txtSizeContent="24px" />
            </div>
        </>
    );
}
