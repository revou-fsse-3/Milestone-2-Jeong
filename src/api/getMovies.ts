import baseApi from "./baseApi";

const API_URL_POKEMON = 'pokemon/';

export interface Pokemon {
    id: number;
    title: string;
    poster_path: string;
}

export interface PokemonResult {
    page: number;
    total_pages: number;
    total_results: number;
    results: Pokemon[]
}

export const getMovies = async () => {
    return await baseApi.get<PokemonResult>(API_URL_POKEMON).then((data) => data.data)
}