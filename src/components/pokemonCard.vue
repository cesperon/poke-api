<template>
  <div class="card" style="width: 18rem">
    <img class="card-img-top" src="../assets/dex.jpg" alt="Card image cap" />
    <div class="card-body">
      <p class="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
    </div>
    hello
  </div>
</template>

<script lang="ts" scoped>
import { defineComponent } from "vue";
import { RegionId } from "@/types/pokeRegion.interface";
//next part accept props for data to populate pokemon card
export default defineComponent({
  name: "pokemonCard",
  components: {},
  setup(props, context) {
    const customChange = (region: string) => {
      context.emit("click", region);
    };

    return { customChange, RegionId };
  },
});
</script>

<style scoped></style>
