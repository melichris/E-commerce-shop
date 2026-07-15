<template>
  <nav class="navbar">
    <router-link to="/" class="logo">
      <span class="logo-text">MeliWear</span>
    </router-link>

    <ul class="nav-links">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/shop">Shop</router-link></li>
      <li><router-link to="/shop?category=men">Men</router-link></li>
      <li><router-link to="/shop?category=women">Women</router-link></li>
    </ul>

    <div class="nav-icons">
      <router-link to="/cart" class="cart-icon">
        🛒
        <span v-if="cartCount > 0" class="cart-badge">{{ cartCount }}</span>
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      cartCount: 0, // will connect to Pinia cart store next phase
    };
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-md) var(--spacing-lg);
  border-bottom: 1px solid var(--color-border);
}

.logo-text {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-primary);
}

.nav-links {
  display: flex;
  gap: var(--spacing-lg);
  list-style: none;
}

.nav-links a {
  font-weight: 500;
  color: var(--color-text);
}

.nav-links a.router-link-active {
  color: var(--color-accent);
}

.cart-icon {
  position: relative;
  font-size: 1.3rem;
}

.cart-badge {
  position: absolute;
  top: -6px;
  right: -8px;
  background-color: var(--color-accent);
  color: white;
  font-size: 0.7rem;
  padding: 2px 6px;
  border-radius: 50%;
}
</style>
