import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Aerodactyl extends Pokemon {
  constructor({ level, iv, ev }, moves) {
    super(pokemonData.Aerodactyl, { level, iv, ev }, moves);
  }
}
