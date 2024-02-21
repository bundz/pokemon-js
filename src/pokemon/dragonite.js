import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Dragonite extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Dragonite, { level, iv, ev });
  }
}
