import { ProxyState } from "../AppState.js";
import { sandboxPokemonService } from "../Services/SandboxPokemonService.js";

function _draw() {
  let template = ""
  ProxyState.myPokemon.forEach(p => {
    // template += `<ul class="action hover-action" onclick="app.sandboxPokemonController.setActive('${p.id}')">${p.name}</ul>`

    template += `<ul class="action hover-action" style="cursor: pointer" title="${p.name}"onclick="app.pokemonApiController.getActivePokemon('${p.name}')"> ${p.name}</ul>`
  })
  document.getElementById('myPokemon').innerHTML = template
}

//Public
export default class SandboxSpellsController {
  constructor() {
    ProxyState.on("myPokemon", _draw);



    this.getMyPokemon()
  }

  async getMyPokemon() {
    try {
      await sandboxPokemonService.getMyPokemon()
    } catch (error) {
      console.error(error)
    }
  }



  async add() {
    try {
      await sandboxPokemonService.add()
    } catch (error) {
      console.error(error)
    }
  };

  async remove() {
    try {
      await sandboxPokemonService.remove()
    } catch (error) {
      console.error(error)
    }
  };
}



my template needs to get myPokemon and in my sandbox controller and service needs to have a active pokemon thing.