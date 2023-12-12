import ImageCover from "../ImageCover/ImageCover";
import "./ImageRounded.scss";

export default function ImageRounded({ host }: { host: { name: string, picture: string} }): JSX.Element {
    return (
        <div className="ImageRounded">
            <ImageCover src={host.picture} altText={`Bailleur: ${host.name}`} />
        </div>
    );
}
