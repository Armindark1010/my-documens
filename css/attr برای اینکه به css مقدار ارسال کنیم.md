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