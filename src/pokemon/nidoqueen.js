import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Nidoqueen extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Nidoqueen, { level, iv, ev });
  }
}
