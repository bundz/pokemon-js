import {
  Pokemon,
  PokemonStatModifiers,
  PokemonState,
} from "../../base/pokemon";
import { PokemonData } from "../../../data/pokemon.data";

export class Moltres extends Pokemon {
  constructor(statModifiers: PokemonStatModifiers, state: PokemonState) {
    super(PokemonData.Moltres, statModifiers, state);
  }
}
