export type Vinyl = {
    id: string;
    title: string;
    price: number;
    imageUrl: string;
    sizes: number[];
    types: number[];
    rating: number;
};

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'completed',
    ERROR = 'error',
}

export type SearchVinylParams = {
    sortBy: string;
    order: string;
    category: string;
    search: string;
    currentPage: string;
};

export interface VinylSliceState {
    items: Vinyl[];
    status: Status;
}