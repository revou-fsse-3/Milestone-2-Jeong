import axios from "axios";

const apiConfig = (config: any) => {

    config.headers = {

        'Accept' : 'application/json'
    }

    return config;
}

const baseApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
    timeout: 90_000
})

baseApi.interceptors.request.use(apiConfig)

export default baseApi