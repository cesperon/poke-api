<template>
  <div class="home">
    <sidebar></sidebar>
    <div class="container">
      <div class="row">
        <div class="form-outline col-6 mx-auto mb-4 mt-4">
          <input
            v-model="searchText"
            type="search"
            id="form1"
            class="form-control"
            placeholder="Search by name or pokemon number"
            aria-label="Search"
          />
        </div>
      </div>
      <h2>{{ state.region_name }} pokemon</h2>
      <div v-for="pokemon in filteredList" class="" :key="pokemon.id">
        <img :src="pokemon.image" />
        {{ pokemon.name }}
        {{ pokemon.id }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, computed } from "vue";
import axios from "axios";
import { onMounted } from "vue";
import { pokeRegion, RegionId } from "@/types/pokeRegion.interface";
import { pokemonInfo } from "@/types/pokeApi.interface";
import sidebar from "@/components/sidebar.vue";

export default defineComponent({
  name: "Home",
  components: { sidebar },
  setup() {
    //reactive components
    const state: pokeRegion = reactive({
      region_api_data: null,
      region_name: null,
      region_pokemon: null,
      version: null,
    });

    let searchText = ref("");
    let pokeList = ref([]);
    let pokeInfo = ref<pokemonInfo[]>([]);

    const filteredList = computed(() => {
      return pokeInfo.value.filter((pokemon: pokemonInfo) => {
        return (
          pokemon.name.includes(searchText.value) ||
          pokemon.id == parseInt(searchText.value)
        );
      });
    });

    //mounted hook
    onMounted(() => {
      getPokemon();
      console.log("mounted", pokeInfo);
    });

    //methods
    const getPokemon = async (): Promise<void> => {
      const res = await axios.get("https://pokeapi.co/api/v2/pokedex/9");
      console.log("res2", res.data);

      state.region_api_data = res.data;
      state.region_name = res.data.name;
      state.region_pokemon = res.data.pokemon_entries;

      state.region_pokemon?.forEach((pokemon) => {
        let name: string = pokemon.pokemon_species.name;
        getPokemonInfo(name);
      });
      console.log("pokeObject", pokeInfo);

      pokeList.value = res.data.pokemon_entries;
      console.log("pokeList", pokeList);
      // sortPokemon();
      pokeInfo.value.sort((a, b) => {
        return a.id - b.id;
      });
      console.log("sortedList", pokeInfo);
      state.version = res.data.version;

      console.log("kanto", RegionId.updated_johto);
    };
    //returns pokemonInfo object with require attributes
    const getPokemonInfo = async (name: string): Promise<void> => {
      try {
        const res = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        );
        let currentPokemon: pokemonInfo = {
          id: res.data.id,
          name: res.data.name,
          image: res.data.sprites.front_shiny,
          height: res.data.height,
          weight: res.data.weight,
        };
        pokeInfo.value.push(currentPokemon);
      } catch (error) {
        console.log(error);
      }
    };

    return { state, searchText, pokeList, filteredList, pokeInfo };
  },
});
</script>
<style>
input {
  width: 30px;
}
</style>
