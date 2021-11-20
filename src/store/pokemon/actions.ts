import { ActionTree } from "vuex";
import { PokemonState } from "./types";
import { State } from "@/store/types";
import { pokemonInfo } from "@/types/pokeApi.interface";
import { PokemonMutations } from "@/store/pokemon/mutations";
import {
  Ability,
  GameIndex,
  pokeStat,
  Stat,
  Type,
} from "@/types/pokeApi.interface";
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

    //get abilities from poke api array of objects and store in string array
    const abilities = response.data.abilities;
    const pokeAbilities: string[] = [];
    abilities.forEach((ability: Ability) => {
      pokeAbilities.push(ability.ability.name);
    });

    //get game_index from poke api array of objects and store in string array
    const gameIndex = response.data.game_indices;
    const gameIndexList: string[] = [];
    gameIndex.forEach((game: GameIndex) => {
      gameIndexList.push(game.version.name);
    });

    //extract important stats from poke api stats array and store in created interface array
    const statArray = response.data.stats;
    const pokemonStats: pokeStat[] = [];
    statArray.forEach((stat: Stat) => {
      const currentStat: pokeStat = {
        base_stat: stat.base_stat,
        effort: stat.effort,
        stat: stat.stat.name,
      };
      pokemonStats.push(currentStat);
    });

    //types
    const typeArray = response.data.types;

    const pokemonTypes: string[] = [];
    typeArray.forEach((type: Type) => {
      pokemonTypes.push(type.type.name);
    });
    console.log("types", pokemonTypes);

    console.log("stats", response.data.types);
    const currentPokemon: pokemonInfo = {
      id: response.data.id,
      name: response.data.name,
      height: response.data.height,
      weight: response.data.weight,
      types: pokemonTypes,
      front_default: response.data.sprites.front_default,
      back_default: response.data.sprites.back_default,
      front_shiny: response.data.sprites.front_shiny,
      back_shiny: response.data.sprites.back_shiny,
      abilities: pokeAbilities,
      game_index: gameIndexList,
      stats: pokemonStats,
    };
    //stats
    console.log("abilities", response.data.name, response.data.stats);
    commit(PokemonMutations.SET_POKEMON_DATA, currentPokemon);
  },
  async clearRegionPokemon({ commit }): Promise<void> {
    commit(PokemonMutations.REMOVE_POKEMON_DATA);
  },
};
