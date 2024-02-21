import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Vulpix extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Vulpix, { level, iv, ev });
  }
}
