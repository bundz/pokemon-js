export class PC {
  #box;

  constructor() {
    this.#box = [];
  }

  addPokemon(pokemon) {
    this.#box.push(pokemon);
  }

  get box() {
    return this.#box;
  }

  printBox() {}
}
