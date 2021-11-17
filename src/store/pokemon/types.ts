import { pokeRegion } from "@/types/pokeRegion.interface";
import { pokemonInfo } from "@/types/pokeAPI.interface";

export interface PokemonState {
  regionData: pokeRegion;
  pokemonData: pokemonInfo[];
}
