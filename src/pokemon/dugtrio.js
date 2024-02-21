import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Dugtrio extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Dugtrio, { level, iv, ev });
  }
}
