import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Zapdos extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Zapdos, { level, iv, ev });
  }
}
