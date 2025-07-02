import { defineClientConfig } from 'vuepress/client'
import FloatingButton from './components/FloatingButton.vue'

export default defineClientConfig({
  enhance({ app }) {
    app.component('FloatingButton', FloatingButton)
  },
  rootComponents: [
    FloatingButton,
  ]
})
