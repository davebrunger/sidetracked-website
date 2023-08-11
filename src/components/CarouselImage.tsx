import { Image } from "./Image";
import "./Image.css";

type Props = {
    readonly url: string;
    readonly carouselName: string;
}

export function CarouselImage(props: Props) {

    const backgroundImage = `url("${props.url}")`;

    console.log(backgroundImage);

    return (
        <Image className={`carousel-${props.carouselName} carousel-image`} url={props.url} />
    );
}