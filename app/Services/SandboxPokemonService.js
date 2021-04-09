
import { ProxyState } from "../AppState.js"
import Pokemon from "../Models/Pokemon.js"
import { sandboxApi } from "./AxiosService.js"

class SandboxPokemonService {
  async remove() {
    console.log(ProxyState.activePokemon);
    await sandboxApi.delete(ProxyState.activePokemon.id)

    ProxyState.myPokemon = ProxyState.myPokemon.filter(p => p.id !== ProxyState.activePokemon.id)

    ProxyState.activePokemon = null
  }


  async add() {

    let res = await sandboxApi.post('', ProxyState.activePokemon)
    ProxyState.myPokemon = [...ProxyState.myPokemon, new Pokemon(res.data)]
  }


  async getMyPokemon() {
    let res = await sandboxApi.get()
    ProxyState.myPokemon = res.data
  }

}

export const sandboxPokemonService = new SandboxPokemonService()