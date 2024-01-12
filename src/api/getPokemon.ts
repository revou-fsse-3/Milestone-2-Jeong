import baseApi from "./baseApi";

const API_URL_POKEMON = 'pokemon/';

export interface Pokemon {
    id: number;
    name: string;
    sprites: {
        front_default: string;
    };
    stats: {
        base_stat: number;
        stat: {
            name: string;
        };
    }[];
    types: {
        type: {
            name: string;
        };
    }[];
}

export const getPokemon = async (pokemonId: number) => {
    return await baseApi.get<Pokemon>(`${API_URL_POKEMON}${pokemonId}`).then((data) => data.data);
};