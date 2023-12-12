export interface InterfaceLease {
    [index: number]: {
        id: string;
        title: string;
        description: string;
        equipments: string[];
        host: {
            name: string;
            picture: string;
            length: number;
            map: Function,
        };
        location: string;
        pictures: string[];
        rating: string;
        tags: string[];
        cover: string;
    },
    find: Function,
    map: Function,
    json: Function,
}
