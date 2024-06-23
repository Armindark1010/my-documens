# اگر در vue دکمه ای چیزی کار نکرد از این کد استفاده شه
```vue
<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})
</script>
```
# install flowbite in vue
## first we install flowbite with this code 
```cmd
npm install flowbite
```
## than we replace this code in tailwind.config.js
```js
content: [
        "./node_modules/flowbite/**/*.js"
    ]
plugins: [
        require('flowbite/plugin')
    ]
```
## than copy this code in end html
```html
<script src="../path/to/flowbite/dist/flowbite.min.js"></script>
```


# install apexchart for chart in this component
## install apexchart with this code 
```cmd
npm install apexcharts --save
```
## than replace this code 
```js
plugins: [
  require('flowbite/plugin')({
      charts: true,
  }),
  // ... other plugins
]
```
## import apexchart in page 
```js
import ApexCharts from 'apexcharts'
```