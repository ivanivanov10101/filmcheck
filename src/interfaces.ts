import {MediaType} from "./types";

export interface Film {
    backdropPath: string;
    id: number
    mediaType: MediaType
    title: string
    posterPath: string
    releaseDate: string
    runtime: number
    averageVote: number
    overview: string
    imdb: string
    budget: number
    results: any
    homepage: string
    prodcomp: any
    country: any
    revenue: number
    tag: string
}

export interface Cast {
    id: number
    name: string
    characterName: string
    profilePath: string
}
