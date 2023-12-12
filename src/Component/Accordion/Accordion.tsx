import { MutableRefObject, ReactElement, useEffect, useRef, useState } from "react";
import BackgroundContainer from "../BackgroundContainer/BackgroundContainer";
import vector from "./img/Vector.png";
import "./Accordion.scss";

export default function Accordion(
    {
        title,
        value,
        active,
        valueIsArray,
        txtSizeContent
    }: {
        title: string,
        value: string | string[] | any,
        active: boolean,
        valueIsArray: boolean,
        txtSizeContent: string
    }) {
    const [isActive, setIsActive] = useState(active);
    let valueProcess: ReactElement[] = [];
    const contentRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
    const contentRefHeight: MutableRefObject<HTMLDivElement | null> = useRef(null);

    useEffect(() => {
        if (contentRef.current) {
            contentRefHeight!.current!.style.maxHeight = isActive ? `${contentRef!.current!.scrollHeight}px` : "0";
        }
    }, [isActive]);

    if (valueIsArray) {
        for (let i = 0; i < value.length; i++) {
            valueProcess.push(<li key={`AccordionData-${i}`}>{value[i]}</li>);
        }
    } else {
        valueProcess.push(<li key={`AccordionData`}>{value}</li>);
    }

    return (
        <div className="Accordion">
            <div className="AccordionTitle" onClick={() => setIsActive(!isActive)}>
                <div>
                    {title}
                    <span>
                        <img src={vector} alt="Options" className={isActive ? "AccordionClose" : "AccordionOpen"} />
                    </span>
                </div>
            </div>
            <div className={`AccordionContent ${isActive ? "Active" : "Disable"}`} ref={contentRef}>
                <div ref={contentRefHeight}>
                    <BackgroundContainer children={<ul>{valueProcess}</ul>} />
                </div>
            </div>
        </div>
    );
}
