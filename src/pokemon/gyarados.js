import { Pokemon } from "../base/pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Gyarados extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Gyarados, { level, iv, ev });
  }
}
