import { Card } from "react-bootstrap";
import { Image } from "./Image";
import { Performer as PerformerModel } from "../models/Performer";

type Props = PerformerModel & {
    readonly imageWidthRem: number;
}

export function Performer(props: Props) {
    return (
        <Card className="border border-0">
            <Card.Body>
                <Card.Title className="text-center">
                    {props.name}
                </Card.Title>
                <div style={{ width: `${props.imageWidthRem}rem`, margin: "0 auto", paddingTop: "1rem", paddingBottom: "1rem" }}>
                    <Image url={props.imageUrl} widthRem={props.imageWidthRem} heightRem={10} circle />
                </div>
                <Card.Subtitle className="text-center">
                    {Array.isArray(props.instruments) ? props.instruments.join(", ") : props.instruments}
                </Card.Subtitle>
            </Card.Body>
        </Card>
    );
}