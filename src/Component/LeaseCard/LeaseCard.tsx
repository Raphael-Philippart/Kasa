import { Key, useEffect, useState } from "react";
import { getLeases } from "../../Service/Service";
import { InterfaceLease } from "../../Type/Lease";
import ImageCover from "../Img/ImageCover/ImageCover";
import { Link } from "react-router-dom";
import "./LeaseCard.scss";

export default function LeaseCard(): JSX.Element {
    const [leases, setLeases] = useState<InterfaceLease|never[]>([]);

    useEffect(() => {
        getLeases().then((res) => {
            setLeases(res! as InterfaceLease);
        });
    }, []);

    return (
        <div className="Lease">
            {leases.map((data: any, index: Key | null | undefined) => {
                return (
                    <Link className="LeaseCard" key={index} to={`location/${data!.id}`}>
                        <ImageCover src={data!.cover} altText={data!.title} />
                        <div className="LeaseCardTitle">{ data!.title }</div>
                    </Link>
                );
            })}
        </div>
    );
}
