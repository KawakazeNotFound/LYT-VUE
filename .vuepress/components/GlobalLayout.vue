<template>
  <slot />
  <div id="waifu"></div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const script = document.createElement('script')
  script.src = 'https://fastly.jsdelivr.net/npm/live2d-widget@3.1.4/lib/L2Dwidget.min.js'
  script.onload = () => {
    window.L2Dwidget.init({
      model: {
        jsonPath: 'http://localhost:8080/l2d/shizuku.model.json', // 本地模型路径
      },
      display: {
        position: 'left',
        width: 160,
        height: 320,
        hOffset: 0,
        vOffset: -20,
      },
      mobile: {
        show: true,
        scale: 0.5
      },
      dialog: {
        enable: true
      }
    })
  }
  document.body.appendChild(script)
})
</script>

<style scoped>
#waifu {
  z-index: 9999;
}
</style>
