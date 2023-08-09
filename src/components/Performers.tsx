import React from "react";
import { Performer as PerformerModel } from "../models/Performer";
import { Performer } from "./Performer";
import { Col, Row } from "react-bootstrap";

function PerformerRow(props: { readonly index: number, readonly perfomers: PerformerModel[] }) {
    return (
        <Row>
            <Col md={4}>
                <Performer {...props.perfomers[props.index * 3]} imageWidthRem={10} />
            </Col>
            <Col md={4}>
                <Performer {...props.perfomers[(props.index * 3) + 1]} imageWidthRem={10} />
            </Col>
            <Col md={4}>
                <Performer {...props.perfomers[(props.index * 3) + 2]} imageWidthRem={10} />
            </Col>
        </Row>
    );
}

function LastPerformerRow2(props: { readonly index: number, readonly perfomers: PerformerModel[] }) {
    return (
        <Row>
            <Col md={{ span: 4, offset: 2 }}>
                <Performer {...props.perfomers[props.index * 3]} imageWidthRem={10} />
            </Col>
            <Col md={4}>
                <Performer {...props.perfomers[(props.index * 3) + 1]} imageWidthRem={10} />
            </Col>
        </Row>
    );
}

function LastPerformerRow(props: { readonly index: number, readonly perfomers: PerformerModel[] }) {
    return (
        <Row>
            <Col md={{ span: 4, offset: 4 }}>
                <Performer {...props.perfomers[props.index * 3]} imageWidthRem={10} />
            </Col>
        </Row>
    );
}

export function Performers(props : React.HTMLAttributes<HTMLDivElement>) {
    const [performers, setPerformers] = React.useState<PerformerModel[] | undefined>(undefined);
    const [rows, setRows] = React.useState(0);
    const [lastRowColumns, setlastRowColumns] = React.useState(0);

    React.useEffect(() => {
        (async () => {
            try {
                const response = await fetch("/performers.json");
                if (!response.ok) {
                    return;
                }
                const data = await response.json();
                const performers = data as PerformerModel[];
                setPerformers(performers);
                setRows(Math.floor(performers.length / 3));
                setlastRowColumns(performers.length % 3);
            }
            catch {
                // do nothing
            }
        })();
    }, []);

    if (!performers) {
        return undefined;
    }

    const fullRowIndices = [];
    for (let i = 0; i < rows; i++) {
        fullRowIndices.push(i);
    }

    return (
        <div {...props}>
            {
                fullRowIndices.map(i => <PerformerRow key={i} index={i} perfomers={performers} />)
            }
            {
                lastRowColumns === 1 ? <LastPerformerRow index={rows} perfomers={performers} /> : undefined
            }
            {
                lastRowColumns === 2 ? <LastPerformerRow2 index={rows} perfomers={performers} /> : undefined
            }
        </div>
    );
}