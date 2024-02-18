import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Zapdos extends Pokemon {
  constructor({ iv, ev }) {
    super(pokemonData.Zapdos, { iv, ev });
  }
}
