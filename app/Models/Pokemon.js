export default class Pokemon {
    constructor({ name, img, sprites, weight, height, types, id }) {
        this.name = name
        this.img = img || sprites.other['official-artwork'].front_default
        this.weight = weight
        this.height = height
        this.types = types
        this.id = id
    }

    get Template() {
        return `
    <div class="p-3">
        <img src="${this.img}" alt="${this.name}">

        <div class="bg-white rounded p-3 mb-3 shadow ">
            <h1>${this.name}</h1>
             <hr>
             <h4>W: ${this.weight} | H: ${this.height} | TYPE: ${this.sortTypes()}</h4>

             <div>
            <button class="btn btn-outline-danger" onclick="app.sandboxPokemonController.remove()">Remove</button>
            <button class="btn btn-outline-info" onclick="app.sandboxPokemonController.add()">Add</button>
             </div>
        </div>

    </div>
    `
    }


    sortTypes() {
        let template = ''
        this.types.forEach(banana => {
            template += `${banana.type.name} `
        })
        return template
    }
}
