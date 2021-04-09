import { ProxyState } from "../AppState.js";
import { pokemonApiService } from "../Services/PokemonApiService.js";


//Private
function _draw() {

  let template = ""
  ProxyState.allPokemon.forEach(p => {
    template += `<ul class="action hover-action" style="cursor: pointer" title="${p.name}"onclick="app.pokemonApiController.getActivePokemon('${p.name}')"> ${p.name}</ul>`

  })
  document.getElementById('allPokemon').innerHTML = template
}


function _drawActive() {
  document.getElementById('activePokemon').innerHTML = ProxyState.activePokemon ? ProxyState.activePokemon.Template : "<p> no active pokemon</p>"
}

//Public
export default class PokemonApiController {
  constructor() {
    ProxyState.on("allPokemon", _draw);
    ProxyState.on("activePokemon", _drawActive);

    this.getAllPokemon()
  }

  async getAllPokemon() {
    try {
      await pokemonApiService.getAllPokemon()
    } catch (error) {
      console.error(error)
    }
  }

  async getActivePokemon(name) {
    try {
      await pokemonApiService.getActivePokemon(name)
    } catch (error) {
      console.error(error)
    }
  }

}
