import { GetterTree } from "vuex";
import { PokemonState } from "./types";
import { State } from "@/store/types";
import { pokeRegion } from "@/types/pokeRegion.interface";
import { pokemonInfo } from "@/types/pokeAPI.interface";

export const getters: GetterTree<PokemonState, State> = {
  getPokemon(state): pokemonInfo[] {
    return state.pokemonData;
  },
  getRegionData(state): pokeRegion {
    return state.regionData;
  },
};
