import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class NidoranM extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.NidoranM, { level, iv, ev });
  }
}
