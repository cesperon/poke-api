import { Module } from "vuex";
import { State } from "@/store/types";
import { PokemonState } from "./types";
import { getters } from "./getters";
import { mutations } from "./mutations";
import { actions } from "./actions";

const state: PokemonState = {
  regionData: {
    region_api_data: null,
    region_name: null,
    region_pokemon: null,
    version: null,
  },
  habitatData: {
    name: null,
    pokemon_species: null,
  },
  pokemonData: [],
};

export const pokemon: Module<PokemonState, State> = {
  state,
  getters,
  mutations,
  actions,
};
