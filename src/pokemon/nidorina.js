import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Nidorina extends Pokemon {
  constructor({ level, iv, ev }, moves) {
    super(pokemonData.Nidorina, { level, iv, ev }, moves);
  }
}
