import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Venonat extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Venonat, { level, iv, ev });
  }
}
