export type GigProperty = {
    readonly type : string,
    readonly value : string,
};

export type Gig = {
    readonly name: string;
    readonly imageUrl: string;
    readonly properties: Readonly<{
        readonly key: string;
        readonly value: GigProperty
    }[]>
};
