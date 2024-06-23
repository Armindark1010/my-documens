# جای گزاری برای اینکه بگیم تو اون متغیر اگه یک استرینگ بود اون رو با ی استرینگ دیگه جای گزاری کن
```js
text.replace("Microsoft", "W3Schools")
```
## برای اینکه بگیم تو اون متغیر هرچی از این داده بود  بیا عو کن با داده جدید
```js
titel.replaceAll(" ","-")
```
# برای اینکه بگیم تمام کلمات رو با حروف کوچیک بنویسه
```js
text.toLowerCase()
```
# برای اینکه همه حروف رو با حرف بزرگ بنویسه
```js
text.toLocaleUpperCase()
```
# برای اینکه بگیم بعد از اخرین علامتی که هست رو حذف کن 
```js
.split("-").slice(0, -1).join("-")
```
# برای اینکه بگیم اخری بعد از اون علامت رو فقط نگه دار 
```js
    let lastIndex = name_title.lastIndexOf("-");

    let trimmedData = name_title.substring(lastIndex + 1);
```
# جمع دو ارایه
```js
let all = [...item1,...item2]
```