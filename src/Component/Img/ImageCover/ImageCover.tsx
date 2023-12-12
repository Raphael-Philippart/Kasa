import "./ImageCover.scss";

export default function ImageCover(
    { src, altText }: { src: string, altText: string }
): JSX.Element {
    return (
        <img className="ImageCover" src={src} alt={altText} />
    );
}
