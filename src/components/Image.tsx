import * as React from "react";
import "./Image.css"

type Props = React.HTMLAttributes<HTMLDivElement> & {
    readonly url: string;
    readonly heightRem?: number;
    readonly heightPct?: number;
    readonly widthRem?: number;
    readonly widthPct?: number;
    readonly circle?: boolean;
};

export function Image(props: Props) {
    const style: React.CSSProperties = {
        ...props.style,
        height: props.heightRem ? `${props.heightRem}rem` : (props.heightPct ? `${props.heightPct}%` : undefined),
        width: props.widthRem ? `${props.widthRem}rem` : (props.widthPct ? `${props.widthPct}%` : undefined),
        backgroundImage: `url(${props.url})`,
        borderRadius : props.circle ? "50%" : undefined
    };

    return (
        <div {...props} className="stretched-centered-image" style={style} />
    );
}