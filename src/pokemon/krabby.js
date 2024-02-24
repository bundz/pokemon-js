import { Pokemon } from "../base/pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Krabby extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Krabby, { level, iv, ev });
  }
}
