import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Jynx extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Jynx, { level, iv, ev });
  }
}
