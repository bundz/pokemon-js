import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Cubone extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Cubone, { level, iv, ev });
  }
}
