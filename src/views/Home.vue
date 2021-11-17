<template>
  <div class="home">
    <sidebar @click="changeRegion"></sidebar>
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
      <h2>{{ regionData.region_name }} pokemon</h2>
      <pokemonCard></pokemonCard>
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
import { onMounted } from "vue";
import { RegionId, PokemonEntry } from "@/types/pokeRegion.interface";
import { pokemonInfo } from "@/types/pokeApi.interface";
import sidebar from "@/components/sidebar.vue";
import { useStore } from "vuex";
import pokemonCard from "@/components/pokemonCard.vue";

export default defineComponent({
  name: "Home",
  components: { sidebar, pokemonCard },
  setup() {
    const store = useStore();
    let searchText = ref("");

    const filteredList = computed(() => {
      return pokemonData.value.filter((pokemon: pokemonInfo) => {
        return (
          pokemon.name.includes(searchText.value) ||
          pokemon.id == parseInt(searchText.value)
        );
      });
    });

    //mounted hook
    onMounted(() => {
      getPokemon();
      console.log("poke", store.getters.getRegionData);
    });

    //get pokemondata from api by region
    const getPokemon = async (): Promise<void> => {
      try {
        const init_region = RegionId.original_johto;
        await store.dispatch("getRegionData", init_region.toString());

        regionData.value.region_pokemon.forEach((pokemon: PokemonEntry) => {
          let name: string = pokemon.pokemon_species.name;
          getPokemonInfo(name);
        });
      } catch (err) {
        console.log(err);
      }
    };
    //Uses pokemon in region result and makes different call to api for each pokemon to get info
    const getPokemonInfo = async (name: string): Promise<void> => {
      try {
        await store.dispatch("getRegionPokemon", name);
      } catch (err) {
        console.log(err);
      }
    };
    const pokemonData = computed(() => {
      console.log("pokeComp", store.getters.getPokemon);
      return store.getters.getPokemon;
    });
    //region
    const changeRegion = async (
      region: keyof typeof RegionId
    ): Promise<void> => {
      try {
        await store.dispatch(
          "getRegionData",
          RegionId[region as keyof typeof RegionId]
        );
        store.dispatch("clearRegionPokemon");
        regionData.value.region_pokemon.forEach((pokemon: PokemonEntry) => {
          let name: string = pokemon.pokemon_species.name;
          getPokemonInfo(name);
        });
        console.log("pokeDatas", store.getters.getPokemon);
      } catch (err) {
        console.log(err);
      }
    };
    const regionData = computed(() => {
      return store.getters.getRegionData;
    });
    return { searchText, filteredList, regionData, changeRegion };
  },
});
</script>
<style>
input {
  width: 30px;
}
</style>
