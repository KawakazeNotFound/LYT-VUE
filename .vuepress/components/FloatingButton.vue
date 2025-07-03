<!-- docs/.vuepress/components/FloatingButton.vue -->
<template>
  <div class="floating-btn" @click="handleClick">
    <img src="/logo.jpg" alt="DeepSeek" />
    <div class="tooltip">Hi～我是你的体验向导苏小坡，接下来由我带领你来沉浸体验吧！</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'FloatingButton',
  methods: {
    handleClick() {
      window.location.href = 'https://doubao.com/bot/qJ7VwfB6'
    }
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
  transition: transform .2s;
}

.tooltip {
  position: absolute;
  bottom: 110%; /* 上方显示 */
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.75);
  color: #fff;
  padding: 6px 12px;
  border-radius: 6px;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  pointer-events: none;
  font-size: 14px;
}

/* 箭头 */
.tooltip::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 6px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.75) transparent transparent transparent;
}

/* 悬停时显示 */
.floating-btn:hover .tooltip {
  opacity: 1;
}
</style>
