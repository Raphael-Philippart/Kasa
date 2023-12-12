import star from './img/Star.png';
import "./Star.scss";

export default function Star({ isFilled }: { isFilled: boolean }): JSX.Element {
    return (
        isFilled ? <img src={star} alt="Star" className="StarOff"/> : <img src={star} alt="Star" className="StarOn"/>
    );
}
