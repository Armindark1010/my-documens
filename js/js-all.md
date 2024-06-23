# select
## انتخاب با ادی 
### code
```js
document.getElementById
```
### example
```js
const serchforme = document.getElementById("serchform")
```
## انتخاب با کلاس 
###
```js
document.getElementsByClassName
```
###
```js
const collection = document.getElementsByClassName("example")
```
## انتخاب با اسم تگ 
### code
```js
document.getElementsByTagName
```
### example
```js
const collection = document.getElementsByTagName("li");
```
## انتخاب با اسم اینپوت
### code
```js
document.getElementsByName
```
### example
```html
<p>First Name: <input name="fname" type="text" value="Michael"></p>
```

```js
let elements = document.getElementsByName("fname");
```

# گرفتن value از اینپوت
## code
```js
document.getElementById("myText").value
```
## example
```js
  document.getElementById("myText").value = "Johnny Bravo";
```

# fetch یچیز شبیه axios وajax که مال خود js هست
## code
```js
fetch()
```
## example
```js
const url = `https://api.unsplash.com/search/photos?page=${page}&query=${

        keybord}&client_id=${accesskey}&per_page=12`

        const response = await fetch(url)
```
# innerHTML برای تغیر یا گرفتن متن ی علمنت
## get
### code
```js
document.getElementById("myP").innerHTML
```
### example
```js
let html = document.getElementById("myP").innerHTML;
```
## edite
### code
```js
document.getElementById("demo").innerHTML
```
### example
```js
document.getElementById("demo").innerHTML = "html";
```
# createElement
## code
```js
document.createElement
```
## example
```js
const para = document.createElement("p")
```
# برای ادیت اجزای مختلف ی المنت
## src
```js
 image.src = "TEST"
```
## id
```JS
image.id = "armin"
```
## href
```JS
imagelink.href
```
## target
```js
imagelink.target = "_blank"
```
# appendChild اضافه کردن ی المنت تو ی المنت تو ی المنت دیگه
## code
```js
document.getElementById("myList").appendChild
```
## example
```js
document.getElementById("myList").appendChild(node)
```
# style تغیر استایل ی المنت
## code
```js
document.getElementById("myH1").style
```
## example
```js
document.getElementById("myH1").style.color = "red";
```
# addEventListener برای اینکه بگیم اگه ی اتفاقی ر المنت افداد تو چیکار کن
## click  
### code
```js
addEventListener("submit")
```
### example
```js
serchforme.addEventListener("submit",(e) =>{

    e.preventDefault()

    page = 1;

    serchimg()

})
```
## submit
### code
```js
addEventListener("click")
```
### example
```js
showmorebtn.addEventListener("click",() =>{

    page++

    serchimg()

})
```

# گرفتن ساعت و اجزای ان
## خود ساعت
```js
var d = new Date()
```
## اجزای ان
```js
    var Hours = d.getHours()

    var Minutes = d.getMinutes()

    var Seconds = d.getSeconds()
```
