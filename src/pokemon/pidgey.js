import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Pidgey extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Pidgey, { level, iv, ev });
  }
}
