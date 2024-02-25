import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Psyduck extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Psyduck, { level, iv, ev });
  }
}
