import { Carousel as BootstrapCarousel } from "react-bootstrap";
import { CarouselImage } from "./CarouselImage";
import React from "react";

type Props = {
    readonly name : string;
    readonly imageUrlPattern: string;
    readonly heightRemXs : number;
    readonly heightRemSm : number;
    readonly heightRemMd : number;
    readonly heightRemLg : number;
    readonly heightRemXl : number;
    readonly heightRemXxl : number;
}

export function Carousel(props: Props) {
  
    const [imageCount, setImageCount] = React.useState<number | undefined>(undefined);

    React.useEffect(() => {
        (async () => {
            try {
                const response = await fetch("/gallery.json");
                if (!response.ok) {
                    return;
                }
                const data = await response.json();
                setImageCount(data.imageCount);
            }
            catch {
                // do nothing
            }
        })();
    }, []);

    const images = imageCount ? new Array(imageCount).fill(0).map((_ , i) => (
        <BootstrapCarousel.Item key={i}>
            <CarouselImage carouselName={props.name} url={props.imageUrlPattern.replace("*", i.toString())} />
        </BootstrapCarousel.Item>
    )) : undefined;

    return (
        <>
            <style>
                {`
                    .carousel-${props.name}, .carousel-${props.name} .carousel-image {
                        height: ${props.heightRemXs}rem;
                    }

                    @media only screen and (min-width: 576px) {
                        .carousel-${props.name}, .carousel-${props.name} .carousel-image {
                            height: ${props.heightRemSm}rem;
                        }
                    }

                    @media only screen and (min-width: 768px) {
                        .carousel-${props.name}, .carousel-${props.name} .carousel-image {
                            height: ${props.heightRemMd}rem;
                        }
                    }

                    @media only screen and (min-width: 992px) {
                        .carousel-${props.name}, .carousel-${props.name} .carousel-image {
                            height: ${props.heightRemLg}rem;
                        }
                    }

                    @media only screen and (min-width: 1200px) {
                        .carousel-${props.name}, .carousel-${props.name} .carousel-image {
                            height: ${props.heightRemXl}rem;
                        }
                    }

                    @media only screen and (min-width: 1400px) {
                        .carousel-${props.name}, .carousel-${props.name} .carousel-image {
                            height: ${props.heightRemXxl}rem;
                        }
                    }
                `}
            </style>
            <BootstrapCarousel className={`.carousel-${props.name}`}>
                {images}
            </BootstrapCarousel>
        </>
    );
}