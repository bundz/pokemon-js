import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Arcanine extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Arcanine, { level, iv, ev });
  }
}
