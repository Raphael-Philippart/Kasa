import { Key, useState } from "react";
import ImageCover from "../Img/ImageCover/ImageCover";
import imgLeft from "./img/Left.png";
import imgRight from "./img/Right.png";
import "./Carrousel.scss";

export default function Carrousel({ title, pictures }: { title: string, pictures: string[] }): JSX.Element {
    let [current, setCurrent] = useState(0);
    const length = pictures.length;

    const actionRight = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const actionLeft = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    return (
        <>
            <section className="Carrousel">
                {pictures.map((image: any, index: Key | null | undefined) => {
                    return (
                        index === current && (
                            <ImageCover key={`ImageCover-${index}-${Math.random()}`} src={image}
                                        altText={`Photo ${index + 1}, de la location: ${title}`}
                            />
                        )
                    );
                })}
                {length > 1 && (
                    <>
                        <div className="CarrouselRight">
                            <img onClick={() => actionRight()} src={imgRight} alt="Slide à droite" />
                        </div>
                        <div className="CarrouselLeft">
                            <img onClick={() => actionLeft()} src={imgLeft} alt="Slide à gauche" />
                        </div>
                    </>
                )}
                <div className="CarrouselPosition">
                    <p>{current + 1}/{length}</p>
                </div>
            </section>
        </>
    );
}
