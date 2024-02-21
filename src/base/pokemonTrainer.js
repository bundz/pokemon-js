import { PC } from "./pc.js";

export class PokemonTrainer {
  #name;
  #party;
  #money;
  #pc;

  constructor({ name = "Trainer", party = [], money = 0 }) {
    this.#name = name;
    this.#party = party;
    this.#money = money;
    this.#pc = new PC();
  }

  getName() {
    return this.#name;
  }

  getParty() {
    return this.#party;
  }

  getMoney() {
    return this.#money;
  }

  getActivePokemon() {
    for (const pokemon of this.#party) {
      if (pokemon.isAlive()) {
        return pokemon;
      }
    }
  }

  getPC() {
    return this.#pc;
  }

  addPokemon(pokemon) {
    if (this.#party.length < 6) {
      this.#party.push(pokemon);
      return;
    }

    this.#pc.addPokemon(pokemon);
  }

  printParty() {
    for (const pokemon of this.#party) {
      console.log(`${pokemon.getName()} - Level ${pokemon.getLevel()} - HP ${pokemon.getHp()}`);
    }
  }
}
