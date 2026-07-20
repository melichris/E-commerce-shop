<template>
  <div class="top-bar">
    <span class="shipping-note">Free shipping on all orders over $100</span>
    <ul class="top-links">
      <li><router-link to="/about">About Us</router-link></li>
      <li><router-link to="/track-order">Track Order</router-link></li>
      <li><router-link to="/help">Help & FAQs</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TopBar',
};
</script>

<style scoped>
.top-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px var(--spacing-lg);
  background-color: var(--color-secondary);
  font-size: 0.8rem;
  color: var(--color-text-muted);
}

.top-links {
  display: flex;
  gap: var(--spacing-md);
  list-style: none;
}

.top-links a:hover {
  color: var(--color-primary);
}
</style>
