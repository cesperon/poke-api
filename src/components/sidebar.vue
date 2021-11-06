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
          <a href="#">Kanto</a>
        </li>
        <li>
          <a href="#">Original Johto</a>
        </li>
        <li>
          <a href="#">Updated Johto</a>
        </li>
        <li>
          <a href="#">Hoenn</a>
        </li>
        <li>
          <a href="#">Original Sinnoh</a>
        </li>
        <li>
          <a href="#">Extended Sinnoh</a>
        </li>
        <li>
          <a href="#">Original Unova</a>
        </li>
        <li>
          <a href="#">Updated Unova</a>
        </li>
      </ul>
    </nav>
    <!-- Page Content -->
    <!-- <div id="content">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <button type="button" id="sidebarCollapse" class="btn btn-info">
            <i class="fas fa-align-left"></i>
            <span>Toggle Sidebar</span>
          </button>
        </div>
      </nav>
    </div> -->
  </div>
</template>

<script lang="ts" scoped>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Sidebar",
  components: {},
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
