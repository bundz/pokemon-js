import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Arcanine extends Pokemon {
  constructor({ level, iv, ev }, moves) {
    super(pokemonData.Arcanine, { level, iv, ev }, moves);
  }
}
