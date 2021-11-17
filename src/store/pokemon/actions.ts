import { ActionTree } from "vuex";
import { PokemonState } from "./types";
import { State } from "@/store/types";
import { pokemonInfo } from "@/types/pokeApi.interface";
import { PokemonMutations } from "@/store/pokemon/mutations";
import axios from "axios";

export const actions: ActionTree<PokemonState, State> = {
  async getRegionData({ commit }, payload: string): Promise<void> {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokedex/${payload}`
    );
    console.log("response", response);
    const regionData = {
      region_api_data: response.data,
      region_name: response.data.name,
      region_pokemon: response.data.pokemon_entries,
      version: response.data.version_groups,
    };
    console.log("regionData", regionData);
    commit(PokemonMutations.SET_REGION_DATA, regionData);
  },
  async getRegionPokemon({ commit }, payload: string): Promise<void> {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${payload}`
    );
    const currentPokemon: pokemonInfo = {
      id: response.data.id,
      name: response.data.name,
      image: response.data.sprites.front_shiny,
      height: response.data.height,
      weight: response.data.weight,
    };
    commit(PokemonMutations.SET_POKEMON_DATA, currentPokemon);
  },
  async clearRegionPokemon({ commit }): Promise<void> {
    commit(PokemonMutations.REMOVE_POKEMON_DATA);
  },
};
