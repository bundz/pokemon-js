import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Gyarados extends Pokemon {
  constructor({ level, iv, ev }, moves) {
    super(pokemonData.Gyarados, { level, iv, ev }, moves);
  }
}
