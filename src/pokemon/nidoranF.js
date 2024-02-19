import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class NidoranF extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.NidoranF, { level, iv, ev });
  }
}
