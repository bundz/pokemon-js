import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Nidorino extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Nidorino, { level, iv, ev });
  }
}
