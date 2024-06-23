# github pages 
> test
# حطما فراموش نشه که توی فایل .gitignore پوشه dist انتقالش جلو گیری شه وگرنه انتقال داده نمیشه اتوماتیک
## vue
### first make a repositories
### than install gh-pages with this code
```cmd
npm install gh-pages --save-dev
```
### after installing we should edit scripte in `package.json`
#### and add this code 
```json
"deploy" : "gh-pages -d dist"
```
#### like this
```json
    "scripts": {
        "serve": "vue-cli-service serve",
        "build": "vue-cli-service build",
        "deploy" : "gh-pages -d dist"
    },
```
### than we should edit vue.config.js and add this code
```js
const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/gaming-site-vue/' // به جای 'repository-name'، نام مخزن خودت رو بگذار
    : '/'
});
```
### after that we should edit .gitignore and delete /dist on .gitignore
### than deploy project and build that 
## html and css
### first make a repositories
### than add files in that
### after adding go to setting and go to pages