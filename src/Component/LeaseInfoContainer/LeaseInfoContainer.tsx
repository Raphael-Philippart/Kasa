import { InterfaceLease } from "../../Type/Lease";
import Tags from "../Tags/Tags";
import ImageRounded from "../Img/ImageRounded/ImageRounded";
import Rating from "../Rating/Rating";
import "./LeaseInfoContainer.scss";

export default function LeaseInfoContainer({ lease }: { lease: InterfaceLease[0]}): JSX.Element {
    return (
        <div className="LeaseInfoC">
            <div>
                <div className="LeaseInfoCTitle">{lease.title}</div>
                <div className="LeaseInfoCLocation">{lease.location}</div>
                <Tags tags={lease.tags} />
            </div>
            <div>
                <div className="LeaseInfoCHost">
                    <div>{lease.host.name}</div>
                    <ImageRounded host={lease.host} />
                </div>
                <Rating rating={lease.rating} />
            </div>
        </div>
    );
}
