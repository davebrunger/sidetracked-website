import * as React from "react";
import "./Image.css"

type Props = {
    readonly className? : string;
    readonly url: string;
    readonly heightRem?: number;
    readonly heightPct?: number;
    readonly widthRem?: number;
    readonly widthPct?: number;
    readonly circle?: boolean;
};

export function Image(props: Props) {
    const style: React.CSSProperties = {
        backgroundImage: `url("${props.url}")`,
    };

    if (props.heightRem || props.heightPct) {
        style.height = props.heightRem ? `${props.heightRem}rem` : `${props.heightPct}%`;
    }
    if (props.widthRem || props.widthPct) {
        style.height = props.widthRem ? `${props.widthRem}rem` : `${props.widthPct}%`;
    }
    if (props.circle) {
        style.borderRadius = "50%";
    }

    return (
        <div className={`${props.className ? props.className : ""} stretched-centered-image`} style={style} />
    );
}