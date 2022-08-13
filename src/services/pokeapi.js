import axios from "axios";

export const getAllpokemons = async (offset = 0) =>{
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=9&offset=${offset}`)
    return response.data
}

export const getOnePokemon = async (URL) =>{
    const response = await axios.get(URL)
    return response.data
}

export const getOnepokemonByName = async (url) =>{
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${url}`)
    return response.data
}

export const PokeTypes = async (type) =>{
    const response = await axios.get(`https://pokeapi.co/api/v2/type/${type}`)
    return response.data
}
export const getAllTypes = async () =>{
    const response =  await axios.get(`https://pokeapi.co/api/v2/type/`)
    return response.data
}
