import ImageCover from "../Img/ImageCover/ImageCover";
import ImageGradient from "../Img/ImageGradient/ImageGradient";
import "./Banner.scss";

export default function Banner(
    { img, textCenter, altText }
        : { img: string, textCenter: string, altText: string }): JSX.Element {
    return (
        <div className="Banner">
            <ImageCover src={img} altText={altText} />
            {textCenter && <div className="Banner_Text">{textCenter}</div>}
            <ImageGradient />
        </div>
    );
}
