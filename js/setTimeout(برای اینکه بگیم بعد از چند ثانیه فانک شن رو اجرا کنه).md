# setTimeout
## code
```js
const myTimeout = setTimeout(myGreeting, 5000);
```
## example
```html
<!DOCTYPE html>
<html>
<body>

<h1>The Window Object</h1>
<h2>The setTimeout() Method</h2>

<p>Wait 5 seconds for the greeting:</p>

<h2 id="demo"></h2>

<script>
const myTimeout = setTimeout(myGreeting, 5000);

function myGreeting() {
  document.getElementById("demo").innerHTML = "Happy Birthday!"
}
</script>

</body>
</html>

```