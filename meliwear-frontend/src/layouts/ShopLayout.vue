<template>
  <div class="shop-layout">
    <NavBar />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import NavBar from '../components/common/NavBar.vue';

export default {
  name: 'ShopLayout',
  components: { NavBar },
};
</script>

<style scoped>
.shop-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
