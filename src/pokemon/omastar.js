import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Omastar extends Pokemon {
  constructor({ level, iv, ev }, moves) {
    super(pokemonData.Omastar, { level, iv, ev }, moves);
  }
}
