<template>
  <nav class="navbar">
    <router-link to="/" class="logo">
      <span class="logo-main">MeliWear</span>
      <span class="logo-tagline">Wear Your Style</span>
    </router-link>

    <ul class="nav-links">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/shop">Shop <span class="caret">⌄</span></router-link></li>
      <li><router-link to="/categories">Categories <span class="caret">⌄</span></router-link></li>
      <li><router-link to="/shop?filter=new">New Arrivals</router-link></li>
      <li><router-link to="/shop?filter=sale">Sale</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>

    <div class="nav-icons">
      <button class="icon-btn" aria-label="Search">🔍</button>
      <router-link to="/account" class="icon-btn" aria-label="Account">👤</router-link>
      <router-link to="/wishlist" class="icon-btn" aria-label="Wishlist">
        ♡
        <span v-if="wishlistCount > 0" class="icon-badge badge-accent">{{ wishlistCount }}</span>
      </router-link>
      <router-link to="/cart" class="icon-btn" aria-label="Cart">
        🛒
        <span v-if="cartCount > 0" class="icon-badge badge-dark">{{ cartCount }}</span>
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      cartCount: 3,
      wishlistCount: 2,
    };
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px var(--spacing-lg);
  border-bottom: 1px solid var(--color-border);
}

.logo {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
}

.logo-main {
  font-family: var(--font-heading);
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 1px;
  color: var(--color-primary);
}

.logo-tagline {
  font-size: 0.6rem;
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
  display: flex;
  align-items: center;
  gap: 4px;
  font-weight: 500;
  font-size: 0.9rem;
  color: var(--color-text);
  padding-bottom: 4px;
  border-bottom: 2px solid transparent;
}

.caret {
  font-size: 0.7rem;
  color: var(--color-text-muted);
}

.nav-links a.router-link-exact-active {
  color: var(--color-accent);
  border-bottom-color: var(--color-accent);
}

.nav-icons {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}

.icon-btn {
  position: relative;
  font-size: 1.05rem;
  background: none;
  color: var(--color-text);
}

.icon-badge {
  position: absolute;
  top: -8px;
  right: -10px;
  color: white;
  font-size: 0.6rem;
  padding: 1px 5px;
  border-radius: 50%;
}

.badge-accent {
  background-color: var(--color-accent);
}

.badge-dark {
  background-color: var(--color-primary);
}
</style>
