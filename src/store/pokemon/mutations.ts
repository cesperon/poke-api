import { MutationTree } from "vuex";
import { PokemonState } from "./types";
import { pokemonInfo } from "@/types/pokeAPI.interface";
import { pokeRegion } from "@/types/pokeRegion.interface";

export enum PokemonMutations {
  SET_POKEMON_DATA = "SET_POKEMON_DATA",
  SET_REGION_DATA = "SET_REGION_DATA",
  REMOVE_POKEMON_DATA = "REMOVE_POKEMON_DATA",
}
export const mutations: MutationTree<PokemonState> = {
  [PokemonMutations.SET_REGION_DATA](state, payload: pokeRegion) {
    console.log("payload", payload);
    state.regionData = payload;
    console.log("afterState", state.regionData);
  },
  [PokemonMutations.SET_POKEMON_DATA](state, payload: pokemonInfo) {
    state.pokemonData.push(payload);
  },
  [PokemonMutations.REMOVE_POKEMON_DATA](state) {
    state.pokemonData = [];
  },
};
