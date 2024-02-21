import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Magnemite extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Magnemite, { level, iv, ev });
  }
}
