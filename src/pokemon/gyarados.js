import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Gyarados extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Gyarados, { level, iv, ev });
  }
}
