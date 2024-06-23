# meta برای اینکه اگر کابر لاگین نکرده بود نتونه صفحه پروفایل رو ببینه
# !store import 
## اول این کد رو به اون صفحه میدیدم در روتیت
### CODE
```JS
meta: { requiresAuth: false }
```
### EXAMPLE
```
{

    path: '/logut',

    name: 'logut',

    component: logut,

    meta: { requiresAuth: false }

  },
```
## بعد در اون صفحه میایم شرط رو میزاریم
### CODE
```
router.beforeEach((to, from, next) => {

  if (to.matched.some(record => record.meta.requiresAuth)) {

    if (store.state.isAuthen) {

      next()

    } else {

      next("/login")

    }

  }else if ((to.matched.some(record => record.meta.loginrequiresAuth))){

    if (!store.state.isAuthen) {

       next()

    }

   else{

    next("/profile")

  }

  }

  else {

    next()

  }

})
```
### EXAMPLE
```
import { createRouter, createWebHistory } from 'vue-router'

import store from '../store'

import HomeView from '../views/HomeView.vue'

import about from '../views/AboutView.vue'

import profile from '../views/profile.vue'

import login from '../views/login.vue'

import logut from '../views/logut.vue'

  

const routes = [

  {

    path: '/',

    name: 'home',

    component: HomeView

  },

  {

    path: '/about',

    name: 'about',

    component: about

  },

  {

    path: '/profile',

    name: 'profile',

    component: profile,

    meta: { requiresAuth: true }

  },

  {

    path: '/login',

    name: 'login',

    component: login,
     meta: { loginrequiresAuth: true }

  },

  {

    path: '/logut',

    name: 'logut',

    component: logut,

    meta: { requiresAuth: true }

  },

]

  

const router = createRouter({

  history: createWebHistory(process.env.BASE_URL),

  routes

})


router.beforeEach((to, from, next) => {

  if (to.matched.some(record => record.meta.requiresAuth)) {

    if (store.state.isAuthen) {

      next()

    } else {

      next("/login")

    }

  }else if ((to.matched.some(record => record.meta.loginrequiresAuth))){

    if (!store.state.isAuthen) {

       next()

    }

   else{

    next("/profile")

  }

  }

  else {

    next()

  }

})

export default router
```
