import { Pokemon } from "../base/pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Marowak extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Marowak, { level, iv, ev });
  }
}
