<template>
  <div>
    <div v-show="isOpenDetail">
      <pokemonDetail
        class="pokeDetail mx-auto"
        @closeModal="openDetail"
        :pokemonName="pokemonName"
        :pokemonID="pokemonID"
        :pokemonImg="pokemonImg"
        :pokemonWeight="pokemonWeight"
        :pokemonHeight="pokemonHeight"
        :pokemonTypes="pokemonTypes"
        :frontImg="frontImg"
        :backImg="backImg"
        :frontShinyImg="frontShinyImg"
        :backShinyImg="backShinyImg"
        :abilities="abilities"
        :game_index="game_index"
        :stats="stats"
      ></pokemonDetail>
    </div>
    <div
      @mouseover="hover = true"
      @mouseleave="hover = false"
      :class="{ active: hover }"
      class="card row mx-auto mb-3"
      style="width: 15rem"
      @click="openDetail"
    >
      <img class="card-img-top" :src="frontImg" alt="Card image cap" />
      <div class="card-body">
        {{ pokemonName }}
        <br />
        #{{ pokemonID }}
        <br />
        <!-- type:
        <div class="pokeTypes" v-for="type in pokemonTypes" :key="type.slot">
          {{ type.type.name }}
        </div> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts" scoped>
import { defineComponent, ref, PropType } from "vue";
import { RegionId } from "@/types/pokeRegion.interface";
import { Move, pokeStat } from "@/types/pokeApi.interface";
import pokemonDetail from "@/components/pokemonDetail.vue";
//next part accept props for data to populate pokemon card
export default defineComponent({
  name: "pokemonCard",
  props: {
    pokemonName: { type: String, default: "N/A" },
    pokemonID: { type: Number, default: 0 },
    pokemonImgs: { type: String, default: "N/A" },
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
  components: { pokemonDetail },
  setup(props, context) {
    let hover = ref(false);
    let isOpenDetail = ref(false);
    const customChange = (region: string) => {
      context.emit("click", region);
    };
    const openDetail = () => {
      isOpenDetail.value = !isOpenDetail.value;
      console.log(isOpenDetail.value);
    };
    return { customChange, RegionId, hover, openDetail, isOpenDetail };
  },
});
</script>

<style scoped>
.card {
  /* box-shadow: 4px 8px 8px 6px #888888; */
  border-radius: 10px;
  border: 1px solid black;
}

.card-body {
  background: #4071cc;
  color: white;
}
.pokeTypes {
  display: inline-block;
  padding-right: 4px;
  padding-bottom: 0px;
}
.active {
  box-shadow: 8px 8px 6px #888888;
}
</style>
