import * as React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Image } from "./Image";
import { Gig as GigModel, GigProperty as GigPropertyModel } from "../models/Gig";

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

function FormatedDate(props : {readonly value : string}) {
    const date = new Date(props.value);
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const suffix = day % 10 === 1 ? "st" : (day % 10 === 2 ? "nd" : (day % 10 === 3 ? "rd" : "th"));
    return <>{day}<sup>{suffix}</sup>{" "}{month}{" "}{year}</>
}

function GigProperty(props : {readonly gigProperty: GigPropertyModel}) {
    switch (props.gigProperty.type) {
        case "text":
            return props.gigProperty.value;
        case "date":
            return <FormatedDate value={props.gigProperty.value} />
        case "link":
            return <a href={props.gigProperty.value} target="_blank">{props.gigProperty.value}</a>;
    }
}

export function Gig(props: GigModel & React.HTMLAttributes<HTMLDivElement>) {
    return (
        <Card {...props} className="rounded-0 text-bg-light" border="secondary">
            <Row className="g-0">
                <Col xs={4} md={3} lg={2}>
                    <Image url={props.imageUrl} className="img-fluid gig-image" heightPct={100}/>
                </Col>
                <Col>
                    <Card.Body>
                        <Card.Title>{props.name}</Card.Title>
                        {
                            props.properties.map((p, i) => (
                                <div key={i}>
                                    <Card.Subtitle className="d-inline">{p.key}: </Card.Subtitle><GigProperty gigProperty={p.value} />
                                </div>
                            ))
                        }
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    );
}
