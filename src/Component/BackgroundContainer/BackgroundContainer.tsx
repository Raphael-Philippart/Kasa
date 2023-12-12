import { ReactNode } from "react";
import "./BackgroundContainer.scss";

export default function BackgroundContainer({ children }: { children: ReactNode }): JSX.Element {
    return (
        <div className="BackgroundContainer">{children}</div>
    );
}
