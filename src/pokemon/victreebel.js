import { Pokemon } from "../base/pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class Victreebel extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Victreebel, { level, iv, ev });
  }
}
