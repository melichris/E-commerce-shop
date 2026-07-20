<template>
  <nav class="navbar" :class="{ scrolled: isScrolled }">
    <router-link to="/" class="logo">
      <span class="logo-main">MeliWear</span>
      <span class="logo-tagline">Wear Your Style</span>
    </router-link>

    <ul class="nav-links">
      <li>
        <router-link to="/" class="nav-link">Home</router-link>
      </li>

      <NavDropdown label="Shop" to="/shop" :items="shopLinks" />
      <NavDropdown label="Categories" to="/categories" :items="categoryLinks" />

      <li v-for="link in simpleLinks" :key="link.to">
        <router-link :to="link.to" class="nav-link">{{ link.label }}</router-link>
      </li>
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
import NavDropdown from './NavDropdown.vue';

export default {
  name: 'NavBar',
  components: { NavDropdown },
  data() {
    return {
      cartCount: 3,
      wishlistCount: 2,
      isScrolled: false,
      shopLinks: [
        { label: 'All Products', to: '/shop' },
        { label: 'New Arrivals', to: '/shop?filter=new' },
        { label: 'Best Sellers', to: '/shop?filter=bestsellers' },
        { label: 'Sale', to: '/shop?filter=sale' },
      ],
      categoryLinks: [
        { label: 'Men Wear', to: '/shop?category=men-wear' },
        { label: 'Women Wear', to: '/shop?category=women-wear' },
        { label: 'Shoes', to: '/shop?category=shoes' },
        { label: 'Accessories', to: '/shop?category=accessories' },
      ],
      simpleLinks: [
        { label: 'New Arrivals', to: '/shop?filter=new' },
        { label: 'Sale', to: '/shop?filter=sale' },
        { label: 'Contact', to: '/contact' },
      ],
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 60;
    },
  },
};
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px var(--spacing-lg);
  background-color: transparent;
  border-bottom: 1px solid transparent;
  transition: background-color 0.25s ease, border-color 0.25s ease;
}

.navbar.scrolled {
  background-color: var(--color-background);
  border-bottom: 1px solid var(--color-border);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
}

/* Default state: assumes navbar overlays a dark hero image — light text */
.logo-main,
.nav-link,
.icon-btn {
  color: white;
}

.logo-tagline {
  color: var(--color-secondary);
}

.caret {
  color: rgba(255, 255, 255, 0.7);
}

/* Scrolled state: inverted — dark text on solid light background */
.navbar.scrolled .logo-main,
.navbar.scrolled .nav-link,
.navbar.scrolled .icon-btn {
  color: var(--color-text);
}

.navbar.scrolled .logo-tagline {
  color: var(--color-accent);
}

.navbar.scrolled .caret {
  color: var(--color-text-muted);
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
  transition: color 0.25s ease;
}

.logo-tagline {
  font-size: 0.6rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  transition: color 0.25s ease;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
  list-style: none;
}

.nav-link {
  font-weight: 500;
  font-size: 0.9rem;
  padding-bottom: 4px;
  border-bottom: 2px solid transparent;
  transition: color 0.15s ease, border-color 0.15s ease;
}

.nav-link:hover,
.nav-link.router-link-exact-active {
  color: var(--color-accent) !important;
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
  transition: color 0.25s ease;
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
