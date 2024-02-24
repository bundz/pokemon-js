import { Pokemon } from "../base/pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Gengar extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Gengar, { level, iv, ev });
  }
}
