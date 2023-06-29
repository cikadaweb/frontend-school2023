import Vue from 'vue'

// глобальная регистрация ui-элементов
const requireComponent = require.context(
  '@/components/ui-elements',
  true,
  /\.vue$/
)

requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName)
  const componentName = fileName
    .split('/')
    .pop()
    .replace(/\.\w+$/, '')
  Vue.component(componentName, componentConfig.default || componentConfig)
})
