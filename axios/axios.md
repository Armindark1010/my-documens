# axios in vue 
## install axios
```cmd
npm i vue-axios
```

## import
```js
import axios from 'axios'
```
## axios.get
## برای گرفتن مقدار از api
```js
axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
```
##  catch برای اینکه اگر ارور خورد چه کاری رو انجام بده
```js
.catch(error => console.log(error))
```
## finally برای وقتی که همه چیز اوکی شد و جواب دریافت شد
```js
.finally(() => this.loading)
```
## برای فیلتر کردن 
```js
then(response => {

          this.info = Object.values(response.data.bpi).filter(item => item.code === "USD");

        })
```
# برای اینکه بندازیم تو ی متغیر نکته این روش وقتی کل فانگشن انجام بشه میندازه تو متغیر 
```js
axios.get("http://moviesapi.ir/api/v1/movies").then(

          film_list => {

            this.film_list = film_list

            console.log(this.film_list)

          })
```

# await
# برای اینکه بگیم قبل از انجام کاری داده رو بگیر از سرور بعد کار انجام بده روش
# undifind
## اول به ون فانگشن async میدیم
```js
async find()
```
## بعد به قبل axios await میدیم
```js
await axios.get
```
## example
```js
,
    mounted() {
    this.getGames();
  },
  methods: {
    async getGames() {
      try {
        const response = await axios.get("https://api.rawg.io/api/games?key=78019d6b3e5a4c02aa7dc916416a0afc");
        this.games = response.data; // مقدار response.data را به this.games منتقل می‌کنیم
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }
```