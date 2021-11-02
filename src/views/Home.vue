<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <img :src="state.pokeImage" alt="" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import axios from "axios";
import { onMounted } from "vue";
import { PokeAPI } from "@/types/pokeApi.interface";

export default defineComponent({
  name: "Home",
  components: {
    HelloWorld,
  },
  setup() {
    const hello = "hello";
    //reactive components

    interface myState {
      poke: PokeAPI | null;
      pokemon: string | null;
      pokeImage: string | null;
    }
    const state: myState = reactive({
      poke: null,
      pokemon: null,
      pokeImage: null,
    });

    //mounted hook
    onMounted(() => {
      getPokemon();
    });

    //mehtods
    const getPokemon = async (): Promise<void> => {
      const res = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto");
      state.poke = res.data;
      // console.log(res.data);
      state.pokeImage = res.data.sprites.front_shiny;
      // console.log(state.pokeImage);
      state.pokemon = res.data.name;
    };

    return { hello, state };
  },
});
</script>
