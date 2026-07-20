<template>
  <li class="nav-item" @mouseenter="open = true" @mouseleave="open = false">
    <router-link :to="to" class="nav-link">
      {{ label }} <span class="caret" :class="{ 'caret-open': open }">⌄</span>
    </router-link>

    <transition name="fade">
      <ul v-if="open" class="dropdown-menu">
        <li v-for="item in items" :key="item.to">
          <router-link :to="item.to">{{ item.label }}</router-link>
        </li>
      </ul>
    </transition>
  </li>
</template>

<script>
export default {
  name: 'NavDropdown',
  props: {
    label: { type: String, required: true },
    to: { type: String, required: true },
    items: { type: Array, required: true }, // [{ label, to }]
  },
  data() {
    return { open: false };
  },
};
</script>

<style scoped>
.nav-item {
  position: relative;
}

.caret {
  font-size: 0.7rem;
  color: var(--color-text-muted);
  display: inline-block;
  transition: transform 0.2s ease;
}

.caret-open {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: 4px;
  min-width: 160px;
  padding: var(--spacing-sm) 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  z-index: 20;
}

.dropdown-menu li a {
  display: block;
  padding: 8px 16px;
  font-size: 0.85rem;
  color: var(--color-text);
}

.dropdown-menu li a:hover {
  background-color: var(--color-secondary);
  color: var(--color-accent);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
