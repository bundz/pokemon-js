import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Gengar extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Gengar, { level, iv, ev });
  }
}
