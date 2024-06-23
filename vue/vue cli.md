                                                                                                                                                                                # نکته حتما در هنگام نصب بابل هم نصب کنید
# ساخت پروژه جدید 
##  اول در CMD به مکانی که مخواهیم نصب انجام بشه میریم 
## بعد عبارت VUE create NAME FOLDER

# install bootstarp jquery and poperjs
```cmd
npm i bootstrap jquery popper.js
```
## و بعد ابزار هایی که میخوایم رو انتخاب میکنیم و بعد نصب میشه

# برای اضافه کردن کامپوننت به vue
```js

import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
```

# ساخت کامپوننتC
## کامپوننت های خو رو باید در پوشه کامپوننت با پس وند ویو درست کنیم
## برای ایمپورت کردن باید همچین کدی درست کرده  و داخل تگ اسکریبت بندازیم
```js
import "name component " from './components/Alert'
```
## یعد از این در کد های ویو ی همچین کدی ساخته تا از ان بتوان در پروژه استفاده کرد
```js
  components:{Alert},
```
## بعد در تمپلیت با تگی با نام کامپوننت از اون کامپوننت استفاده میکنیم
```html
 <Alert/>
```
## full example
```html
<template>

 <h1>

  {{ titel }}

 </h1>

 <Alert/>

 <Alert/>

 <Alert/>

 <Alert/>

 <Alert/>

 <Alert/>

</template>

<script>

import Alert from './components/Alert'

  
  

export default{

  name:'app',

  components:{Alert},

  data(){

    return{

      titel :'hello'

    }

  }

}

</script>
```
# برای اینکه در کامپوننت استایل هایی که میدیم فقط به اون کامپوننت اعمال بشه
```html
<style scoped><style/>
```
# برای اینکه به کامپوننت اطلاعات ارسال کنیم
## روش اول به صورت متغیر
### اول میایم در کامپوننت یک تگی به نام  props میسازیم
```js
<script>

export default{

    name:'alert',

    props:["msg"]

}

</script>
```
## بعد به صورت متغیر در متود اضافه میکنیم
```html
<template>

    <div>{{msg}}</div>

</template>
```
### بعد در جایی که کامپوننت رو اضاغه میکنیم به اون مقدار میدیم
```html
 <Alert msg="armin"/>
```
## روش دوم با slate
### اولین کاری که میکنیم میایم در کامپوننت ی فضا میزاریم برای داده ها
#### میتونیم به اون فضا اسم هم بدیم که بتونیم چند تا چیز اضافه کنیم
```html
<slot  name="box">
</slot>
```
### بعد میایم در پروژ به اون فضا با همون اسم داده میدیم 
#### نکته تگ باید باز و  بسته باشه
```html
 <template v-slot:box>

  <alert_box msg="home"/>

   <alert_box msg="card"/>

    <alert_box msg="boxig"/>

    <button type="button" class="btn btn-danger my-2">serch</button>

 </template>
```
### example
```html
<template>

 <h1>

  {{ titel }}

 </h1>

 <alert_box msg="ger"/>

 <alert_box msg="aryan"/>

 <card_box_1 msg_btn="armin" :url_img="url">

 <template v-slot:box>

  <alert_box msg="home"/>

   <alert_box msg="card"/>

    <alert_box msg="boxig"/>

    <button type="button" class="btn btn-danger my-2">serch</button>

 </template>

 </card_box_1>

</template>
```
# router-link برای اینکه بدون رفرش یو ار ال مون عو بشه
```HTML
 <router-link to="">home</router-link>
```
## بعد در جایی که میخوایم اون صفحه ها نمایش پیدا کنه بهش این تگ رو میدیم
```HTML
<router-view/>
```
# $route() وقتی میان صفحه ها ها جابجا میشه یه کاری انجام یده
```html
  watch:{

    $route(){

      this.$store.commit("onstart")

    }

  }
```

# onstart in storg میاد ببینه در لوکال استورج کاربر عو شده یا نه
```js
  state: {

    isAuthen:false,

    token:''

  },

  mutations: {

    onstart(state){

      let token = localStorage.getItem('token')

      if(token){

        state.isAuthen = true

        state.token = token

  

      }else{

        state.isAuthen = false

        state.token = ''

      }

    }

  }
```
# $router.push انتقال به یک صفحه داخلی
```js
$router.push("/profile")
```
# برای اینکه یک فانگشن رو در store اجرا کنیم
```js
this.$store.commit("login_page","abc")
```
# برای اینکه در صفحه اصلی از استورج یک داده ای رو بخونیم
```js
{{$store.state.is}}
```
# برای اینکه ما یک مغاله داریم و نمیخوایم برای هر مغاله یک صفحه درست کنیم
## اول میایم یک ویو جدید درست میکنیم 
## بعد اون رو در ruter اضافه میکنیم
## بعد با پارامتر بهش میگیم که رو هر اسلاگ کلیک شده بود اون یو ار ال رو بده 
### نکته باید به اون تگ مغالمون بگیم که در صورت کلیک شدن به این صفحه بیاد
```html
<router-link :to="`/article/${articel.slug}`">{{ articel.titel }}</router-link>
```
```html
  {

    path: '/article/:slug',

    name: 'detale',

    component: detale

  },
```
## بعد در همون صفحه مغاله ای که ساختیم از پرا پرتی find استفاده میکنیم تا نوشته های همون مغاله رو بگیریم
```js
      let articel = articles.find(

        articel => articel.slug == this.$route.params.slug
      )
```
# برای اینکه بگیم وقتی submit زده شد بیاد ی متود رو اجرا  کنه
# submit
## باید به from داد

```js
@submit.prevent

@submit.prevent="searchf"
```


# استفاده از img
```html
<img  class="rounded" :src="require(`../assets/images/${box.url}`)" alt="">
```

# برای اینکه دوتا ویو داشته باشیم یا دوتا جای ثابت
## children
### اول میایم اون صفحه ها رو اد میکنیم تو روتیت فقط ایمپورت 
```js
import add_page from '../views/add_page.vue'
```
### بعد میایم اون صفحه اصلی که میخوایم چندتا توش داشته باشیم متود children رو میدیم
```js
{

    path: '/login_page',

    name: 'login_page',

    component: login_page,

    children:[{

    }]

  },
```
### بعد توش اون صفحه هارو اضافه میکنیم 
```js 
  {

    path: '/login_page',

    name: 'login_page',

    component: login_page,

    children:[{

      name:"login_form",

      path:"login",

      component:login

    },

    {

      name:"regester_form",

      path:"regester",

      component:regester

    }

  ]

  },
```
### یعد میایم روتیت لینک میدیم و از اون ها استفاده میکنیم
```html
<router-link class="router-link" :to="{name:'login_form'}" >login</router-link>|
```
### و اون مکانی که میخوایم استفاده کنیم از روتر ویو معمولی استفاده میکنیم
```html
<router-view></router-view>
```
### برای این که بگیم اول که اجرا میشه دیفالت دونه از صفحه ها باز باشه
```js
  {
    path: '/CONFIGURE-YOUR-ROLEX',
    name: 'CONFIGURE_YOUR_ROLEX',
    component: CONFIGURE_YOUR_ROLEX,
    redirect: { name: 'COMPARE-YOUR-ROLEX-STEP-1' }, // اضافه کردن redirect
    children: [
        {
            path: '/CONFIGURE-YOUR-ROLEX',
            name: 'COMPARE-YOUR-ROLEX-STEP-1',
            component: COMPARE_YOUR_ROLEX_STEP_1
        },
        {
            path: '/CONFIGURE-YOUR-ROLEX/STEP-2',
            name: 'COMPARE-YOUR-ROLEX-STEP-2',
            component: COMPARE_YOUR_ROLEX_STEP_2
        },
    ]
}
```
# jquery
## استفاده از jquery
## اول نصب میکنیم 
### کد نصب در cmd
``` js
npm install jquery --save
```
## بعد به پروژه ویو اضافه میکنیم
```js
import 'jquery/src/jquery.js'
```
## برای این که هر سری اون رو ایمپورت نکنیم میتونیم با کد زیر به همه صفحه ها اون رو اافه کنیم
```js
import $ from "jquery";
.use($)
```
## بعد به اون صفحه اضافه میکنیم
```js
import $ from "jquery";
```
## برای ایستفاده دو راه هست

### راه اول به صورت redy که زمانی که صفحه شروع میشه کار میکنه

```js
    mounted() {

        $("li").click(function(){

        })

   },

```
# script setup برای این که از js خام استفاده کنیم در صصفحه
```js
<script setup></script>
```

### راه دوم با کلیک یا همون فانگشن

#### این متود رو به اون عنصر میدیم
```js
    methods:{

        changecolor(){

            $(".line").css("background-color","blue")

            $(".line").click(function(){

                $(".line").css("background-color","green")

            })

        }

    }
```
# fontawesome 
## نصب روی ویو
```js
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-regular-svg-icons
npm i --save @fortawesome/free-brands-svg-icons

npm i --save @fortawesome/vue-fontawesome@latest-3

```
## بالا اوردن در vue 
```js
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { library }
from "@fortawesome/fontawesome-svg-core";
```
## بالا اوردن اون ایکن که میخوای
```js
import { name icon } from "@fortawesome/free-solid-svg-icons";

## example

import { faHeart } from "@fortawesome/free-solid-svg-icons";
```
## نکته زمان نوشتن اسم ایکن باید اونجایی که فاصله داره بزرگ نوشته بشه
```js
icone <font-awesome-icon icon="fa-solid fa-circle-user" />

import icone 
import { fa-circle-user } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

```
## اضافه کردن اون به کل صفحات 
```js
library.add(faPhone,faHeart);
```
## اضافه کردن به صفحه مورد نظر
```html
<font-awesome-icon :icon="['fas', 'heart']" />
```
# mounted برای اینکه بگیم هر وقت صفحه شروع به کار کرد ی عملیاتی انجام بشه
## filters برای اینکه داده ها رو به دلخواه فیلتر کنیم 
```html
<template>
  <div>
    <p>{{ message | uppercase }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello Vue.js',
    };
  },
  filters: {
    uppercase(value) {
      if (!value) return '';
      return value.toUpperCase();
    },
  },
};
</script>

```
# برای اینکه بگیم متن تو url رو بهمون بده
```js
this.$route.params.title
```
# برای ایتکه هر تغیری تو اینپوت ایجاد شد این فانگشن رو اجرا کنه 
```html
@input="search"
```
# برای اینکه بگیم فقط 4 تا رو بهمون بده
```js
        created() {

    this.articel = this.box.slice(0, 4); // تعداد موردهای مورد نظر را انتخاب کنید

}
```

# برای این که بگیم اون ارایه رو سه تا سه تا تغسیم کن
```
computed: {
    groupedProfiles() {
      const result = [];
      for (let i = 0; i < this.profile.length; i += 3) {
        result.push(this.profile.slice(i, i + 3));
      }
      return result;
    }
  }
```
# استفاده از ی تابعد در همه صفحه ها
## ساخت ی فایل با پسوند js برای نوشتن فانگشن
### نوشتن فانگشن به صورت زیر 
```js
export function myFunction() {
    // اجرای کد تابع
    console.log('تابع در دسترس است!');
  }
```
## فراخونی در صفحه مورد نظر
### به صورت زیر است 
```js
import {myFunction} from '../functions/test'
```
## استفاده 
```js
mounted() {
    // فراخوانی تابع از ماژول
    myFunction();
  }
```

# استفاده از داده در همه صفحه ها با استفاده از vuex است و در قایل vuex در کنار همین فایل موجود است

# برای این که ی المنتی رو تو vue fix کنیم
## اول میایم به #app هیت 100vhمیدیم
## بعد میایم دوتا باکس درست میکنیم باکس اونایی که میخوایم فیکس باشن و اونایی که میخوایم اسکرول شن 
### این جوری و فیکس میشه
```html
<div class="box1 z-50">
  <div class="loadline h-0.5 bg-orange-500 fixed top-0"></div>
  <nav_bar/>
</div>
<div class="box2 h-screen overflow-y-scroll" id="box2">
  <router-view/>
  <foo_ter></foo_ter>
</div>

```
# برای اینکه بگیم وقتی بین صفحه ها هرکت کرد یه کاری بکن 
## این کد رو میزنیم
```js
  watch: {
    '$route' (to, from) {
      $('#box2').animate({ scrollTop: 0 }, 'smooth');
    },
  },
```