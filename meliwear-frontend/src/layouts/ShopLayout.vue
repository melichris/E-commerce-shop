<template>
  <div class="shop-layout">
    <!-- NavBar and TopBar will go here once built -->
    <main>
      <router-view />
    </main>
    <!-- Footer will go here once built -->
  </div>
</template>

<script>
export default {
  name: 'ShopLayout',
};
</script>

<style scoped>
.shop-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
