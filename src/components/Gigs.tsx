import React from "react";
import { Gig as GigModel } from "../models/Gig";
import { Gig } from "./Gig";

export function Gigs() {
    const [gigs, setGigs] = React.useState<GigModel[] | undefined>(undefined);

    React.useEffect(() => {
        (async () => {
            try {
                const response = await fetch("/gigs.json");
                if (!response.ok) {
                    return;
                }
                const data = await response.json();
                setGigs(data);
            }
            catch {
                // do nothing
            }
        })();
    }, []);

    if (!gigs) {
        return undefined;
    }

    return (
        <>
            {
                gigs.map((g, i) => <Gig key={i} {...g} style={i > 0 ? { marginTop: "1rem" } : {}} />)
            }
        </>
    );
}