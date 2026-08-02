import {
  Pokemon,
  PokemonStatModifiers,
  PokemonState,
} from "../../base/pokemon";
import { PokemonData } from "../../../data/pokemon.data";

export class Wartortle extends Pokemon {
  constructor(statModifiers: PokemonStatModifiers, state: PokemonState) {
    super(PokemonData.Wartortle, statModifiers, state);
  }
}
