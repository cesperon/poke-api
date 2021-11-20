<template>
  <div class="popup me-auto">
    <div class="popup-inner form">
      <div class="pokemonImages">
        <div>
          <img :src="frontImg" alt="" />
          <img :src="backImg" alt="" />
          Original
        </div>
        <div>
          <img :src="frontShinyImg" alt="" />
          <img :src="backShinyImg" alt="" />
          Shiny
        </div>
      </div>
      <div class="body-content">
        <div class="field"><em>name: </em>{{ pokemonName }}</div>
        <div class="field"><em># </em>{{ pokemonID }}</div>
        <div class="field">
          <em>Type: /</em>
          <div class="pokeTypes" v-for="type in pokemonTypes" :key="type.slot">
            {{ type }}/
          </div>
        </div>

        <div class="field"><em>height: </em>{{ pokemonHeight }}</div>
        <div class="field"><em>weight: </em>{{ pokemonWeight }}</div>
        <div class="field">
          <em>Abilities: /</em>
          <div class="abilities" v-for="ability in abilities" :key="ability">
            {{ ability }}/
          </div>
        </div>
        <div class="field">
          <em>Game Index: /</em>
          <div class="game_index" v-for="game in game_index" :key="game.index">
            {{ game }}/
          </div>
        </div>
        <div class="field">
          <em>Stats: </em>
          <br />
          <div v-for="stat in stats" :key="stat">
            {{ stat.stat }}:/base stat: {{ stat.base_stat }} effort:
            {{ stat.effort }}
          </div>
        </div>

        <button class="mt-4" @click="closeModal">Close</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" scoped>
import { defineComponent, ref, PropType } from "vue";
import { RegionId } from "@/types/pokeRegion.interface";
import { Move, Sprites, pokeStat } from "@/types/pokeApi.interface";
//next part accept props for data to populate pokemon card
export default defineComponent({
  name: "pokemonDetail",
  props: {
    pokemonName: { type: String, default: "N/A" },
    pokemonID: { type: Number, default: 0 },
    pokemonImg: { type: Array },
    pokemonWeight: { type: Number, default: 0 },
    pokemonHeight: { type: Number, default: 0 },
    pokemonTypes: { type: Array as PropType<string[]> },
    frontImg: { type: String },
    backImg: { type: String },
    frontShinyImg: { type: String },
    backShinyImg: { type: String },
    abilities: { type: Array as PropType<string[]> },
    game_index: { type: Array as PropType<string[]> },
    stats: { type: Array as PropType<pokeStat[]> },
  },
  components: {},
  setup(props, context) {
    let hover = ref(false);
    const closeModal = () => {
      context.emit("closeModal");
    };
    return { RegionId, hover, closeModal };
  },
});
</script>

<style scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
}
.popup-inner {
  background: rgb(253, 252, 252);
  padding: 32px;
  width: 500px;
  border-radius: 10px;
  padding-top: 0;
}
.pokeTypes {
  display: inline-block;
}
.pokemonImages {
  display: inline-block;
}
img {
  width: 150px;
}
.abilities {
  display: inline-block;
}
.game_index {
  display: inline-block;
}
</style>
