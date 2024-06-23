# install
## cdn code
```html
    <script src="https://cdn.tailwindcss.com"></script>
```
## npm code
### اول تو cmd با این کد نصب رو انجام میدیم 
```cmd
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
```
### بعد این کد رو میزنیم که فایل ها رو ایجاد کنه 
```cmd
npx tailwindcss init -p
```
### بعد توی فایل tailwind.config.js باید جای این کد 
```js
module.exports = {
  content: [
  ],
  darkMode: false,
  theme: {
    extend: {},
  },
  plugins: [],
}
```
### این باشه
```js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: false,
  theme: {
    extend: {},
  },
  plugins: [],
}
```
### بعد ی فایل با اسم tailwind.css میسازیم و توش این کد رو میندازیم
```css
@tailwind base;

@tailwind components;

@tailwind utilities;
```
### یعد اون رو ایمپورت میکنیم و تمام استفاده میکنیم ازش 
```js
import './assets/tailwind.css'
```

# install in nuxt  
# hover active focus

## hover
### code
```html
hover:bg-red
```
### example
```html
<div class="bg-blue-800 hover:bg-blue-950">
        armin
</div>
```
## active
### code
```html
active:
```
### example
```html
    <div class="bg-green-500 hover:bg-green-700 active:bg-red-400 text-center">
   
   armin2
    </div>
```

## focus
### code
```html
focus:
```
### example
```html
    <div class="bg-sky-400 text-center">
        <button class="bg-fuchsia-800 hover:bg-slate-600 focus:bg-red-800 text-center">armin</button>
    </div>
```