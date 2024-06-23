# get data
```js
const settings = {
  "async": true,
  "crossDomain": true,
  "url": "text.json",
  "method": "GET",
  "headers": {
    "Accept": "*/*",
    "User-Agent": "Thunder Client (text.json)"
  }
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
```