import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class NidoranM extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.NidoranM, { level, iv, ev });
  }
}
