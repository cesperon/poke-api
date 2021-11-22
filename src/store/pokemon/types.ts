import { pokeRegion } from "@/types/pokeRegion.interface";
import { pokemonInfo } from "@/types/pokeAPI.interface";
import { pokeHabitats } from "@/types/pokeHabitats.interface";
export interface PokemonState {
  regionData: pokeRegion;
  habitatData: pokeHabitats;
  pokemonData: pokemonInfo[];
}
