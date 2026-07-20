<template>
  <nav class="navbar">
    <router-link to="/" class="logo">
      <span class="logo-main">MeliWear</span>
      <span class="logo-tagline">Wear Your Style</span>
    </router-link>

    <ul class="nav-links">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/shop">Shop</router-link></li>
      <li><router-link to="/categories">Categories</router-link></li>
      <li><router-link to="/shop?filter=new">New Arrivals</router-link></li>
      <li><router-link to="/shop?filter=sale">Sale</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>

    <div class="nav-icons">
      <button class="icon-btn" aria-label="Search">🔍</button>
      <router-link to="/account" class="icon-btn" aria-label="Account">👤</router-link>
      <router-link to="/wishlist" class="icon-btn" aria-label="Wishlist">
        ♡
        <span v-if="wishlistCount > 0" class="icon-badge">{{ wishlistCount }}</span>
      </router-link>
      <router-link to="/cart" class="icon-btn" aria-label="Cart">
        🛒
        <span v-if="cartCount > 0" class="icon-badge">{{ cartCount }}</span>
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      cartCount: 0,
      wishlistCount: 0,
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
}

.logo {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
}

.logo-main {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 1px;
  color: var(--color-primary);
}

.logo-tagline {
  font-size: 0.65rem;
  color: var(--color-accent);
  letter-spacing: 2px;
  text-transform: uppercase;
}

.nav-links {
  display: flex;
  gap: var(--spacing-lg);
  list-style: none;
}

.nav-links a {
  font-weight: 500;
  font-size: 0.9rem;
  color: var(--color-text);
}

.nav-links a.router-link-active {
  color: var(--color-accent);
}

.nav-icons {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}

.icon-btn {
  position: relative;
  font-size: 1.1rem;
  background: none;
  color: var(--color-text);
}

.icon-badge {
  position: absolute;
  top: -8px;
  right: -10px;
  background-color: var(--color-accent);
  color: white;
  font-size: 0.65rem;
  padding: 1px 5px;
  border-radius: 50%;
}
</style>
