# install vuex
```cmd
npm install vuex
```
## import 
```js
import store from './store'
```
```js
Vue.use(Vuex);
```

```js
import { createStore } from 'vuex'

  

export default createStore({

  state: { 
  },

  getters: {
  },
  mutations: {

  },

  actions: {

  },

  modules: {

  }

})
```
# make object in vuex
## code
```js
  state: {
    Number:[1,2,3,4,5,6,7]
  },
```
## example
```js
import { createStore } from 'vuex'

  

export default createStore({

  state: {

    Number:[1,2,3,4,5,6,7,8],
  },

  getters: {
  },

  mutations: {

  },

  actions: {

  },

  modules: {

  }

})
```
# getters
## برای اینکه روی متغیر ها ی تغیراتی ایجاد کنیم و داده بگیریم
### code
```js
  getters: {

    od:(state) => {return state.Number.filter((Number) => Number % 2 === 0)}}
  },
```
### example
```js
import { createStore } from 'vuex'

  

export default createStore({

  state: {

    Number:[

      1,2,3,4,5,6,7,8

    ],

    o:'',

    v:''  

  },

  getters: {
    od:(state) => {return state.Number.filter((Number) => Number % 2 === 0)
    }},
  mutations: {

  },

  actions: {

  },

  modules: {

  }

})
```
# store خوندن اطلاعات از استور تو کل پرژه
## code
```js
$store.parametrname.variable
$store.getters.od
```
## example
```js
<template>

  <div class="home">

    armin

    {{$store.getters.od}}

  </div>

</template>
 
```

# برای استفاده از داده های store در یه فایل js
```js
import store from '../store/index'
export async function startLoading() {
console.log(store.state.loadingPercentage)
}
```