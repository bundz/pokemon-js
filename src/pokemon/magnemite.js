import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Magnemite extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Magnemite, { level, iv, ev });
  }
}
