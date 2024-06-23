# install nuxt
## first copy this code in cmd
```cmd
npx nuxi@latest init <project-name>
```
## secend copy this code in made project
```cmd
npx install
```

# roter in nuxt
## first we should make a folder named `pages`
## second we make a `index.vue` and this is a main page
## third we make a other pages in this folder

>if we want to access this page in site we can write this file name in site URL like this

```
http://localhost:3001/work
```
## make a link to page
### if we wanna us a page in other page we can use a nuxtlink like this
#### structure
```vue
        <nuxt-link to="/"></nuxt-link>
```
#### example
```vue
<nuxt-link :to="`/products">
```
## make a dynamic page 
### first we make a folder named [test].vue
### second we use a test in page like this
```vue
<h1>
        user:{{ $route.params.test }} 
</h1>
        
```
### and use it like this in other pages
```vue
<nuxt-link :to="`/products/product-${test}`">
```
## make a fix page in nuxt
### first we should make a folder named `layouts` and in this folder make a file named `default.vue`
### second in `default.vue` write this code 
```vue
<template>
    <div>
        first element
        <!-- chenged layout -->
        <slot />
        end element
    </div>
</template>
```
### finly we should write this code in `app.vue`
```vue
<template>
   <NuxtLayout>
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>

```

# components
## if we want use components first should make folder named `components`
## second make file example `test.vue` 
## if we wanna use it in file type component name in page
```vue
<test />
```
## if my components been a folder example testscomponents we should use like this
```vue
<TestscomponentsTest />
```
## or
```vue
<testscomponents-test />
```
## if we wanna use proops we can send data like this
```vue
<TestscomponentsTest name="test" />
```
### and in component we get proop like this
```vue
<div>{{name}}</div>
```
# composables

>use a function in nuxt 
## make a folder named `composables`
## make a script named we want
```js
export default function(){
    console.log("test")
}
```
## for use in vue file we write file name like this 
```vue
test()
```
# click outside in nuxt
## first Install the library `click-outside-vue3`
```cmd
npm i "click-outside-vue3"
```
## Create a folder `plugins` at the root level. And create a new file `clickOutside.ts`
## Paste this code into that file
>This will register the plugin into the Nuxt project.
```ts
import vClickOutside from "click-outside-vue3";
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(vClickOutside);
});
```
##  That’s all. Now you can use it directly in your component like this:
```html
<div class="parent" v-click-outside="function we wanna play when click outside">
```