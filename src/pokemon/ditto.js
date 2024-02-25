import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Ditto extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Ditto, { level, iv, ev });
  }
}
