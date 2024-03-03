import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Chansey extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Chansey, { level, iv, ev });
  }
}
