#   background
##   برای اینکه وقتی از بکگراند ایمیج استفاده میشه کل سطر رو بپوشونه 
### code
```css
background-size: cover;
```
### example
```css
<!DOCTYPE html>
<html>
<head>
<style>
#example1 {
  border: 2px solid black;
  padding: 25px;
  background: url(mountain.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
</head>
<body>

<h2>background-size: cover:</h2>
<div id="example1">
  <h2>Hello World</h2>
  <p>The background image is resized to cover the entire container, even if it has to stretch the image or cut a little bit off one of the edges.</p>
</div>

</body>
</html>
```
## برای انداختن سایه روی بکگراند
### code
```css
background: linear-gradient(
    to right,rgb(0 0 0 / 0.5),
    rgb(0 0 0/0)),
    url(../img/9VWQiO.png)
```
### example
```css
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
    div{
        width: 30%;
background: linear-gradient(
    to right,rgb(0 0 0 / 0.5),
    rgb(0 0 0/0)),
    url(../img/9VWQiO.png)
    }
    </style>
</head>
<body>
    <div>
        <h1>hello
             word</h1>
    </div>
</body>
</html>
```
## مات کردن بک گراند
### code
```css
backdrop-filter: blur(30px);
```
### example
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div{
            background-color: rgba(0, 255, 255, 0.361);
            backdrop-filter: blur(30px);
        }
    </style>
</head>
<body>
    <div>armin</div>
</body>
</html>
```
#   TEXT
## برای اینکه  به اوین خط از نوشته یا اولین حرف استایل بدیم 
### code
```css
::first-letter
```
### example
```css
<!DOCTYPE html>
<html>
<head>
<style>
p::first-letter {
  font-size: 200%;
  color: #8A2BE2;
}
</style>a
</head>
<body>

<h1>Demo of the ::first-letter selector</h1>

<p>My name is Donald.</p>
<p>I live in Duckburg.</p>
<p>My best friend is Mickey.</p>

</body>
</html>
```
## برای اینکه به اولین خط استایل بدیم
### code
```css
::first-line
```
### example
```css
<!DOCTYPE html>
<html>
<head>
<style>
p::first-line {
  background-color: yellow;
}
</style>
</head>
<body>

<h1>Demo of the ::first-line selector</h1>

<h2>WWF's Mission Statement</h2>
<p>To stop the degradation of the planet's natural environment and to build a future in which humans live in harmony with nature, by; conserving the world's biological diversity, ensuring that the use of renewable natural resources is sustainable, and promoting the reduction of pollution and wasteful consumption.</p>

</body>
</html>
```
## برای پاک کردن علامت های ال ای
### code
```css
list-style-type:none;
```
### example
```css
<!DOCTYPE html>
<html>
<body>

<h2>Unordered List without Bullets</h2>

<ul style="list-style-type:none;">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>  

</body>
</html>
```
## text-gradint
### code
```css
  background: -webkit-linear-gradient(#eee, #333);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
```
### example
## تارگت برای اینکه بگیم اگه روی لینک زد روی یه تگ دیگه با همن ایدی تغییر ایجاد کنه
### code
```css
:target
```
### example
```css
```html
<!DOCTYPE html>
<html>
<head>
<style>
:target {
  border: 2px solid #D4D4D4;
  background-color: #e5eecc;
}
</style>
</head>
<body>

<h1>This is a heading</h1>

<p><a href="#news1">Jump to New content 1</a></p>
<p><a href="#news2">Jump to New content 2</a></p>

<p>Click on the links above and the :target selector highlight the current active HTML anchor.</p>

<p id="news1"><b>New content 1...</b></p>
<p id="news2"><b>New content 2...</b></p>

</body>
</html>
```
## پاک کردن خط زیر لینک
```css
text-decoration: none;
```


## برای زمانی که از دیو میزنه بیرون و میخوایم اتو ماتیک اوکی شه
### ```
```css
word-wrap: break-word;
```


# with height
## برای اینکه بگیم چه مقدار از صفحه رو بگیره ا.ن المنت
### code
```css
inset: 0;
    /* برای اینکه تمام عرض صفحه رو بگیره */
```
### example
## calc(برای اینکه بگیم طول  عرض هرچقدر بود به علاوه ی عددی کم)
### code
```css
height: calc(100% + 50px);
```
### example
## media(تغیر در سایز های مخطلف)
### code
```css
@media  screen and (max-width: 600px) 
```
### example
```html
<!DOCTYPE html>
<html>
<head>
    <title>armin</title>
    <script src="https://kit.fontawesome.com/b035bb9973.js" crossorigin="anonymous"></script>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<style>
body {
  background-color: yellow;
}
i{
    color: rgb(0, 0, 0);
}

@media  screen and (max-width: 600px) {
  body {
    background-color: lightblue;
  }
  i{
    color: rgb(255, 0, 0);
  }
}


</style>
</head>
<body>

<h1>The @media Rule</h1>

<p>Resize the browser window. When the width of this document is 600 pixels or less, the background-color is "lightblue", otherwise it is "yellow".</p>
<i class="fa-solid fa-4"></i>
</body>
</html>
```
## برای اینکه وقتی اندازه عکس رو عوض میکنی به صورت صحیح تغیر کنه 
### code
```css
object-fit: cover;
```
### example
```css
.cover-image{

    width: 100%;

    height: 100%;

    object-fit: cover;

}
```
# animate
##  برای اینکه یه افکت حرکتی به لاین نوبار بدیم
```
<template>

        <nav style="right: 0;left:0;" class="position-fixed navbar   justify-content-between pl-md-3 pr-md-3 p-1 ">

        <div>

        <a class="navbar-brand text-white">Navbar</a>

        <router-link class="router-link" to="/login_page" v-if="!$store.state.isAuthen">login</router-link>

        <router-link class="router-link" to="/profile" v-if="$store.state.isAuthen"><img style="height: 25px;width: 25px;border-radius: 50%;" src="../assets/istockphoto-1300845620-612x612.jpg" alt=""></router-link>

        </div>

        <div class="d-flex nav-item ">

            <div>

                <ul class="ul">

                    <li class="active"><router-link class="router-link" to="/">Home</router-link></li>

                    <li><router-link class="router-link" to="/url">About</router-link></li>

                    <li>tournamnets</li>

                    <li>test</li>

                    <div class="line">

  

                    </div>

                </ul>

        </div>

    </div>

    </nav>

</template>

  

<script>

  

import $ from "jquery";

  

export default {

    ready (){

        // $(document).ready(function ($) {

        //     $("#btn").click(function(){

        //     })

        // })

    },  

    mounted() {

        $("li").click(function(){

            $(".active").removeClass("active")

            $(this).addClass("active")

        })

   },

  

 }

</script>

  

<style scoped>

.nav-item{

    place-items: center;

}

.navbar{

    background-color: rgba(0, 0, 0, 0);

    backdrop-filter: blur(100px);

    color: white;

    position: sticky;

    top: 0;

z-index: 999;

}

.nav-item ul{

    list-style-type:none;

    display: flex;

    margin: 0;

    padding: 0;

    width: 400px;

    position: relative;

}

.nav-item ul li{

   width: 100px;

   text-align: center;

}

.line{

    position: absolute;

    width: 90px;

    left: 5px;

    right: 5px;

    bottom: 0;

    background-color: red;

    height: 1px;

    transition: transform 2s ;

}

.active{

}

.nav-item ul li:nth-child(1).active ~ .line{

    transform: translateX(calc(100px*0));

}

.nav-item ul li:nth-child(2).active ~ .line{

    transform: translateX(calc(100px*1));

}

.nav-item ul li:nth-child(3).active ~ .line{

    transform: translateX(calc(100px*2));

}

.nav-item ul li:nth-child(4).active ~ .line{

    transform: translateX(calc(100px*3));

}

  

.nav-click{

    border-bottom: red 2px solid;

    animation: border 2s infinite;

}

@keyframes border {

    0%   {border-bottom: 2px red solid;}

    25%  {border-bottom: 1px red solid;}

    75%  {border-bottom: 0px red solid;}

    100% {border-bottom: 2px red solid;}

  }

  

  @media only screen and (max-width: 600px) {

    .nav-item ul li{

        margin-right: 10px;

        margin-left: 0px;

        font-size: 10px;

    }

}

  

</style>
```


## keyframes برای ساخت انیمیشن
### برای اینکه بگیم از یه جایی به ی جای دیگه بره 
#### code
```css
@keyframes mymove {
  from {top: 0px;}
  to {top: 200px;}
}
```
#### example
```html
<!DOCTYPE html>
<html>
<head>
<style> 
div {
  width: 100px;
  height: 100px;
  background: red;
  position: relative;
  animation: mymove 5s infinite;
}

@keyframes mymove {
  from {top: 0px;}
  to {top: 200px;}
}
</style>
</head>
<body>

<h1>The @keyframes Rule</h1>

<div></div>

</body>
</html>
```
### برای اینکه بگیم در هر درصد چه تغییری کنه
#### code
```css
@keyframes mymove {
  0%   {top: 0px;}
  25%  {top: 200px;}
  75%  {top: 50px}
  100% {top: 100px;}
}
```
#### example
```html
<!DOCTYPE html>
<html>
<head>
<style> 
div {
  width: 100px;
  height: 100px;
  background: red;
  position: relative;
  animation: mymove 5s infinite;
}

@keyframes mymove {
  0%   {top: 0px;}
  25%  {top: 200px;}
  75%  {top: 50px}
  100% {top: 100px;}
}
</style>
</head>
<body>

<h1>The @keyframes Rule</h1>

<div></div>

</body>
</html>
```
## transfrom(چرخوندن شکل)
### code
```css
transform: rotate(20deg);
```
### example
```html
<!DOCTYPE html>
<html>
<head>
<style> 
div.a {
  width: 150px;
  height: 80px;
  background-color: yellow;
  -ms-transform: rotate(20deg); /* IE 9 */
  transform: rotate(20deg);
}

div.b {
  width: 150px;
  height: 80px;
  background-color: yellow;
  -ms-transform: skewY(20deg); /* IE 9 */
  transform: skewY(20deg);
}

div.c {
  width: 150px;
  height: 80px;
  background-color: yellow;
  -ms-transform: scaleY(1.5); /* IE 9 */
  transform: scaleY(1.5);
}
</style>
</head>
<body>

<h1>The transform Property</h1>

<h2>transform: rotate(20deg):</h2>
<div class="a">Hello World!</div>
<br>

<h2>transform: skewY(20deg):</h2>
<div class="b">Hello World!</div>
<br>

<h2>transform: scaleY(1.5):</h2>
<div class="c">Hello World!</div>

</body>
</html>
```
### برای تکون دادن شکل به بالا و پایین
```CSS
transform:translateY(-10px);
```
### تکون دادن شکل به بغل
```css
transform:translateX(-10px);
```
## transition(برای اینکه به یک عمل کرد زمان بدیم)
### code
```css
transition: width 2s;
```
### example
```html
<!DOCTYPE html>
<html>
<head>
<style> 
div {
  width: 100px;
  height: 100px;
  background: red;
  transition: width 2s;
}

#div1 {transition-timing-function: linear;}
#div2 {transition-timing-function: ease;}
#div3 {transition-timing-function: ease-in;}
#div4 {transition-timing-function: ease-out;}
#div5 {transition-timing-function: ease-in-out;}

div:hover {
  width: 300px;
}
</style>
</head>
<body>

<h1>The transition-timing-function Property</h1>

<p>Hover over the div elements below, to see the different speed curves:</p>

<div id="div1">linear</div><br>
<div id="div2">ease</div><br>
<div id="div3">ease-in</div><br>
<div id="div4">ease-out</div><br>
<div id="div5">ease-in-out</div><br>

</body>
</html>

```
## برای اینکه بعد از اینکه عملیات انجام شد دوباره بر نگرده
### code
```css
  animation-fill-mode: both;
```
## برای اینکه شکل به صورت مورب تغیر درجه بده برای دقیق تر فهمیدن وارد لینک زیر شود
[perspective](https://www.w3schools.com/cssref/tryit.php?filename=trycss3_perspective1)
## اول به کانتینر ی تگ میدیم  که بگیم چقدر ارتفاع چرخش داشته باشه 
```CSS
 perspective: 100px;
```
## بعد به اون شیع یه درجه x میدیم
```CSS
  transform: rotateX(45deg);

```
## نمونه در لینک بالا هست
## بجای اینکه از سه جا بجایی استفاده کنیم از این کد استفاده میشه
### translate3d
#### code
```css
transform: translate3d(0%, -50px, 100px);
transform: translate3d(x, y, z);
```
#### example
```css
<!DOCTYPE html>
<html>
<head>
  <style>
    .translated-element {
      transform: translate3d(0%, -50px, 100px);
    }
  </style>
</head>
<body>
  <div class="translated-element">
    <!-- محتوای شما در اینجا قرار می‌گیرد -->
  </div>
</body>
</html>

```
# border
## outline-offset(ساخت بردر فاصله دار )
### code
```css
    outline: 4px solid rgb(87, 87, 87);
    outline-offset: 3px;
```
### example
## outline(پاک کردن بردر پیش ورز اینپوت)
### code
```css
style="outline: none;"
```
### example
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <input style="outline: none;"  type="text">
</body>
</html>
```
## وقتی از شکل زد بیرون بریده بشه
### code
```css
        /* -webkit-clip-path: inset(0 0 0 0);
    clip-path: inset(0 0 0 0); */
```
#### برای اینکه اگر کد بالا درست پاک نکرد این کد کامل پای کنه 
#### !بهتره زمانی که بالایی رو استفاده میکینم از این هم استفاده کنیم
```css
overflow: hidden;
```
### example

## border gradint radius
### code
```css
background: linear-gradient(red,yellow)padding-box,linear-gradient(to right, darkblue, darkorchid) border-box;;
border-radius: 50em;
border: 4px solid transparent;
```
### example
# more
## برای اینکه بگیم اگر کاربر کلمه اشتباه وترد کرد چه تغییری کنه
### code
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        input{
            outline: none;
        }
        input:invalid{
            border: 2px solid red;
            animation: shake 0.2s 2;
        }
        @keyframes shake{
            25%{
                translate: 6px 0;
            }
            50%{
                translate: -6px 0;
            }
            75%{
                translate: 6px 0;
            }
        }
    </style>
</head>
<body>
    <form action="">
            <input type="text" placeholder="enter name"
    pattern="[a-z]*"><br>
    <input type="submit" value="a">
    </form>

</body>
</html>
```
## برای اینکه اگه عکس svg بود به اون بردر داخل شدو بده
### CODE
```CSS
filter: drop-shadow(0px 15px 13px rgb(0, 0, 0));
```
## برای اینکه بگیم در صورت انتخاب چه استایلی داشته باشه
### code
```html
<!DOCTYPE html>
<html>
<head>
<style>
::selection {
  color: red;
  background: yellow;
}
</style>
</head>
<body>

<h1>Select some text on this page:</h1>

<p>This is a paragraph.</p>
<div>This is some text in a div element.</div>

</body>
</html>
```
```css
::selection {
  color: red;
  background: yellow;
}
```

## پاک کردن بالا پایین کننده اینپوت عدد
### code
```css
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
```
### example
```html
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>
</head>
<body>

<h2>Hide Input Number Arrows</h2>
<p><strong>Note:</strong> It is still possible to increment the number when you scroll inside the number input.</p>

<input type="number" value="5">

</body>
</html>

```
## وقتی از پر کردن خود کار استفاده شد رنگ اینپوت چه تغیری کند
### code
```
  
input:-webkit-autofill,  
input:-webkit-autofill:hover,  
input:-webkit-autofill:focus,  
textarea:-webkit-autofill,  
textarea:-webkit-autofill:hover,  
textarea:-webkit-autofill:focus,  
select:-webkit-autofill,  
select:-webkit-autofill:hover,  
select:-webkit-autofill:focus {  
    border: 1px solid green;  
    -webkit-text-fill-color: green;  
    -webkit-box-shadow: 0 0 0px 1000px #000 inset;  
    transition: background-color 5000s ease-in-out 0s;  
  }
```
## mask(برای اینکه عکس خود را به داخل لگو انداخته و شبیه لوگو کنیم)
### code
```html
<!DOCTYPE html>
<html>
<head>
<style>
.mask1 {
  -webkit-mask-image: url(w3logo.png);
  mask-image: url(w3logo.png);
  -webkit-mask-size: 70%;
  mask-size: 70%;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;    
}
</style>
</head>
<body>

<h1>The mask-size Property</h1>

<h3>Set the size of the mask layer image to 70%:</h3>
<div class="mask1">
<img src="img_5terre.jpg" alt="Cinque Terre" width="600" height="400">
</div>

<h3>Original image:</h3>
<img src="img_5terre.jpg" alt="Cinque Terre" width="600" height="400">

</body>
</html>
```
## scroll-snap(برای ساخت اسلاید با ویشگی همیشه وسط بودن عنصر)
### code
```css
scroll-snap-type: x mandatory; "کد برای کانتینر"
scroll-snap-align: center; "کد برای عنصر ها"
```
### example
```html 
<!DOCTYPE html>
<html>
<head>
<style>
    body{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 90vh;
    }
    .container{
        padding: 0;
        height: 300px;
        display: flex;
        border: solid 2px black;
        width: 300px;
        overflow: scroll;
        overflow-y: hidden;
        scroll-snap-type: x mandatory;
    }
    .container div img{
        width: 300px;
        height: 250px;
        padding: 0;
        scroll-snap-align: center;
    }
    .container div{
        padding: 0;
    }
</style>
</head>
<body>
    <div class="container">
        <div><img style="" src="../proje/instagram_S.png" alt=""></div>
        <div><img  style=""src="../proje/16438240836732.jpg" alt=""></div>
        <div><img  style=""src="../proje/16438240836732.jpg" alt=""></div>
    </div>
</body>
</html>
```
## برای اینکه به متن input استایل بدیم
### code
```css
::placeholder
```
### example
```css
::placeholder{

    color: #fff;

    font-size: 18px;

}
```
# positing
## positing center(برای بردن شکل به وسط با پوزیشن)
### code
```css
transform: translate(-50%, -50%);
```
### example
```html
<!DOCTYPE html>
<html>
<head>
<style>
.center { 
  height: 200px;
  position: relative;
  border: 3px solid green; 
}

.center p {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
</style>
</head>
<body>

<h2>Center with position and transform</h2>

<p>In this example, we use positioning and the transform property to vertically and horizontally center the div element:</p>

<div class="center">
  <p>I am vertically and horizontally centered.</p>
</div>

</body>
</html>
```
## برای اینکه بگیم چه مقدار از صفحه رو بگیره ا.ن المنت
### code
```css
inset: 0;
    /* برای اینکه تمام عرض صفحه رو بگیره */
```
### example

# attr برای اینکه به css مقدار ارسال کنیم

```css
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <title></title>
    <style>
      .test{
        background-color: red;
        color: black;
      }
      .test:before{
        content: attr(text);
      }
    </style>
  </head>
  <body>
    <div class="test" text="armop">
      armin
    </div>
  </body>
</html>
```


# text
## border text برای این که به صورت بردر دار باشه تکستمون
```css
.myText {
    color: transparent;
    -webkit-text-stroke: 1px rgb(233, 121, 0);
}
```


# flex-box
## justify-content
## تنطیم به صورت چپ به راست
### دیفالت از راست به چپ
```css
justify-content:flex-start;
```
### برای ایکه بره اخر صفحه
```css
justify-content: flex-end;
```
### برای اینکه یه میزان جای اضافه رو بین اون ها تغسیم کنه
```css
justify-content:space-between
```
### برای اینکه همون فاصله رو به خود اون ها هم بدی یعنی دور اونها هم فاصله بده
```css
justify-content: space-around;
```
### این همون همون کار رو میکنه ولی دقیق تر 
```css
justify-content: space-evenly;
```
## align-items
## تنظیم به صورت بالا به پایین
### دیفالت
```CSS
align-items: flex-start;
```
### بچسبه به پابیین
```css
align-items: flex-end;
```
### برای اینکه وسط قرار بگیره
```css
align-items: flex-center;
```

# برای اینکه از بالا پایین تراز باشن
```css
align-items: center
```