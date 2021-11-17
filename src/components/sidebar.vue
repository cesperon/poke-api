<template>
  <div class="wrapper">
    <!-- Sidebar -->
    <nav id="sidebar">
      <div class="sidebar-header mt-4">
        <h3>Poke-Search</h3>
        <img src="../assets/dex.jpg" class="mb-4" />
      </div>

      <ul class="list-unstyled components">
        <h4>Regions</h4>
        <li class="active">
          <a @click="customChange(RegionId[2])" href="#">Kanto</a>
        </li>
        <li>
          <a @click="customChange(RegionId[3])" href="#">Original Johto</a>
        </li>
        <li>
          <a @click="customChange(RegionId[7])" href="#">Updated Johto</a>
        </li>
        <li>
          <a @click="customChange(RegionId[4])" href="#">Hoenn</a>
        </li>
        <li>
          <a @click="customChange(RegionId[5])" href="#">Original Sinnoh</a>
        </li>
        <li>
          <a @click="customChange(RegionId[6])" href="#">Extended Sinnoh</a>
        </li>
        <li>
          <a @click="customChange(RegionId[8])" href="#">Original Unova</a>
        </li>
        <li>
          <a @click="customChange(RegionId[9])" href="#">Updated Unova</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts" scoped>
import { defineComponent } from "vue";
import { RegionId } from "@/types/pokeRegion.interface";

export default defineComponent({
  name: "Sidebar",
  components: {},
  setup(props, context) {
    // emit event to parent
    const customChange = (region: string) => {
      context.emit("click", region);
    };

    return { customChange, RegionId };
  },
});
</script>

<style scoped>
.wrapper {
  display: flex;
  width: 100%;
}

#sidebar {
  width: 250px;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 999;
  background: #4071cc;
  color: #fff;
  transition: all 0.3s;
}
a {
  color: white;
}
#sidebar {
  box-shadow: 8px 8px 6px #888888;
}
img {
  border-radius: 40px;
  height: 60px;
  width: 70px;
}
</style>
