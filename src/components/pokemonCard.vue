<template>
  <div
    @mouseover="hover = true"
    @mouseleave="hover = false"
    :class="{ active: hover }"
    class="card row mx-auto mb-3"
    style="width: 15rem"
  >
    <img class="card-img-top" :src="pokemonImg" alt="Card image cap" />
    <div class="card-body">
      {{ pokemonName }}
      <br />
      #{{ pokemonID }}
      <br />
      type:
      <div class="pokeTypes" v-for="type in pokemonTypes" :key="type.slot">
        {{ type.type.name }}
      </div>
      <br />
      weight:{{ pokemonWeight }}
      <br />
      height: {{ pokemonHeight }}
      <br />
    </div>
  </div>
</template>

<script lang="ts" scoped>
import { defineComponent, PropType, ref } from "vue";
import { RegionId } from "@/types/pokeRegion.interface";
import { Type } from "@/types/pokeApi.interface";
//next part accept props for data to populate pokemon card
export default defineComponent({
  name: "pokemonCard",
  props: {
    pokemonName: { type: String, default: "N/A" },
    pokemonID: { type: Number, default: 0 },
    pokemonImg: { type: String, default: "N/A" },
    pokemonWeight: { type: Number, default: 0 },
    pokemonHeight: { type: Number, default: 0 },
    pokemonTypes: { type: Object },
  },
  components: {},
  setup(props, context) {
    let hover = ref(false);
    const customChange = (region: string) => {
      context.emit("click", region);
    };
    return { customChange, RegionId, hover };
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
