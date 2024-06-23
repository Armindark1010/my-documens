# how to us css in index.js
## first  we should make a file named index.css
## and after make this file we should import this file in `index.js` with this code

```js
import "./index.css"
```
# how to use components in react
## first we make a folder named `components`
## than we make a file and make a function on that

```js
export const Header = () => {
  return (
    <div>Header</div>
  )
}
```
## also we can use shortcut keys like this

> **rafc**
## after creating the file , we can add it in the file we need like this
```js
import {Footer} from './components/Footer'
```
# useState
>when we wanna update the value in site without reloading
## first we should add it in my file
```js
import { useState } from "react";
```
## after adding we can make a Variable
### Structure
```js
    const [variable_name ,  function_name] = useState(value);
```
### example
```js
    const [ armin_age , armin] = useState(17)
```
## if we wanna change the value we should use this structure
### structure
```js
function_name(new value)
```
### example
```js
armin_age(18)
```