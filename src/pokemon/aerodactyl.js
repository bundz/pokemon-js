import { Pokemon } from "../pokemon.js";
import { pokemonData } from "../pokemonData.js";

export class Aerodactyl extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Aerodactyl, { level, iv, ev });
  }
}
