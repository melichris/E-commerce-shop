<template>
  <div class="shop-layout">
    <TopBar />
    <NavBar />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import TopBar from '../components/common/TopBar.vue';
import NavBar from '../components/common/NavBar.vue';

export default {
  name: 'ShopLayout',
  components: { TopBar, NavBar },
};
</script>
