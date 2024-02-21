import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Meowth extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Meowth, { level, iv, ev });
  }
}
