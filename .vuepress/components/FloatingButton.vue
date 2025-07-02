<!-- docs/.vuepress/components/FloatingButton.vue -->
<template>
  <div v-if="route.path === '/'" class="floating-btn" @click="handleClick">
    <img src="/logo.jpg" alt="DeepSeek" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'FloatingButton',
  setup() {
    const route = useRoute()
    const handleClick = () => {
      window.location.href = 'https://chat.deepseek.com'
    }
    return { route, handleClick }
  }
})
</script>

<style scoped>
.floating-btn {
  position: fixed;
  top: 35%;
  right: 30%;
  width: 300px;
  height: 300px;
  z-index: 9999;
  cursor: pointer;
  background-color: transparent;
  border: none;
  padding: 0;
  transition: transform 0.2s ease-in-out;
}

.floating-btn img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.floating-btn:hover img {
  transform: scale(1.05);
  transition: transform 0.2s;
}
</style>
