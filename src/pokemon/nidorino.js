import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Nidorino extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Nidorino, { level, iv, ev });
  }
}
