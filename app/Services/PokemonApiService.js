
import { ProxyState } from "../AppState.js"
import Pokemon from "../Models/Pokemon.js"
import { pokemonApi } from "./AxiosService.js"

class PokemonApiService {
  async getActivePokemon(name) {
    let res = await pokemonApi.get(name)
    console.log(res.data);
    ProxyState.activePokemon = new Pokemon(res.data)
  }
  async getAllPokemon() {
    let res = await pokemonApi.get()
    ProxyState.allPokemon = res.data.results
    console.log(ProxyState.allPokemon)
  }


}

export const pokemonApiService = new PokemonApiService()