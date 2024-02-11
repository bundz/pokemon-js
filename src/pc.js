export class PC {
  #box;

  constructor() {
    this.#box = [];
  }

  addPokemon(pokemon) {
    this.#box.push(pokemon);
  }

  printBox() {}
}
