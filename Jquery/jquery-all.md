# install
## npm
### npm code
```cmd
npm install jquery --save
```
### after install import jquery in all proje with main.js file
```js
import 'jquery/src/jquery.js'
```
### import on special page
```js
import $ from "jquery";
```
### import on all project
```js
import $ from "jquery";
.use($)
```
## cdn
# codes
## add class اضافه کردن کلاس به المنت
```js
.addClass("classname")
```
## .animate
### code
```js
.animate({style:'NUMBER'},time)
```
### example
```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="jquery.main.js"></script>
    <script src="https://cdn.lordicon.com/qjzruarw.js"></script>
    <style>
        .sdy{
            width:50px;height:50px ;
            background-color: rgb(195, 143, 0);
            padding-bottom: 9px;
            top: 5px;
            z-index: 10;
        }
        .input{
            font-size: 20px;
            padding-top: 15px;
            padding-bottom: 15px;
            outline: none;
            width: 0;
            border:rgb(195, 143, 0) solid 2px;
            position: absolute;
            top: 5px;
        }
    </style>
    <script>
        $(document).ready(function(){
            $("#input").fadeOut()
            $("#serch").click(function(){
                $("#input").fadeIn(1000)
                $("#input").animate({width:'250px'},2000)

            })
        })

    </script>


</head>
<body>
    
    <div style="position:relative ;width: 50px;">
        <button id="serch" style="border:none ; padding:0;"><lord-icon
        src="https://cdn.lordicon.com/xfftupfv.json"
        trigger="hover" class="sdy" id="serch">
    </lord-icon></button>
    <input class="input" type="text" id="input"></div>
</body>
</html>
```


## make new tag
### first way append
#### code
```js
.append("<metod>text</metod>")
```
#### example
```js
<!DOCTYPE html>
<html>
<head>
<script src="jquery.main.js"></script>
<script>
$(document).ready(function(){
  $("#btn1").click(function(){
    $("p").append(" <b>Appended text</b>.");
  });
  $("#btn2").click(function(){
    $("ol").append("<li>Appended item</li>");
  });
});
</script>
</head>
<body>

<p>This is a paragraph.</p>
<p>This is another paragraph.</p>

<ol>
  <li>List item 1</li>
  <li>List item 2</li>
  <li>List item 3</li>
</ol>

<button id="btn1">Append text</button>
<button id="btn2">Append list item</button>

</body>
</html>
```
### secend way jQuery apendto فرق این متد با متد بعدی اینه که این متد رو اخر المنت ها درست میکنه ولی بعدی قبل از همه المنت ها درست میکنه
#### code
```js
 jQuery('tagname', {
    class:  'class name',
    title: 'title name',
    html: "&nbsp;"
}).appendTo("container");
```
#### example 
```js
 jQuery('<div>', {
    class:  `char-${i} char2`,
    title: '',
    html: "&nbsp;"
}).appendTo(con);
```
### third way jquery prependTo این المنت بعد از همه ایجاد میکنه
#### code
```js
 jQuery('tagname', {
    class:  'class name',
    title: 'title name',
    html: "&nbsp;"
}).prependTo("container");
```
#### example
```js
jQuery('<div>', {
    class: `char-${i} char2`,
    title: '',
    html: "&nbsp;"
}).prependTo(con);
```
## .attr گرفتن یا حذف یک تیکه از المنت

### code
```js
.attr("attributeName", "value")
.removeAttr("attributeName")
```
### example
```js
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- بقیه تگ‌ها -->
    <script src="jquery.main.js"></script>
    <script>
        $(document).ready(function(){
            $("#b1").click(function(){
               // دریافت مقدار ویژگی href
               var link = $("#a1").attr("href");
               alert(link);
            });

            $("#b2").click(function(){
               // ویرایش مقدار ویژگی href
               $("#a1").attr("href", "http://127.0.0.1:5500/js/jquery/%D8%A7%D8%B3%D9%84%D8%A7%DB%8C%D8%AF%20%D8%AF%DA%A9%D9%85%D9%87%20%D8%A7%DB%8C%20.html");
            });

            $("#b3").click(function(){
               // حذف ویژگی href
               $("#a1").removeAttr("href");
            });
        });
    </script>
</head>
<body>
    <a href="http://bss.sabanet.ir" style="background-color: red;" id="a1">لینک</a>
    <button id="b1">بررسی</button>
    <button id="b2">ویرایش</button>
    <button id="b3">حذف ویژگی</button>
</body>
</html>

``` 
## .one برای این که بگیم وقتی ی بار کلیک شد روش چیکار کنه
### code
```js
.one("click", function(){}
```
### example
```js
<!DOCTYPE html>
<html>
<head>
  <!-- لینک به کتابخانه jQuery -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
  <script>
    $(document).ready(function(){
      // تابع one() برای المان‌های <p> در صفحه
      $("p").one("click", function(){
        // با کلیک بر روی هر المان <p>، اندازه متن آن با انیمیشن بزرگ‌تر می‌شود
        $(this).animate({fontSize: "+=6px"});
      });
    });
  </script>
</head>
<body>

<!-- پاراگراف‌های مختلف -->
<p>This is a paragraph.</p>
<p>This is another paragraph.</p>
<p>Click any p element to increase its text size. The event will only trigger once for each p element.</p>

</body>
</html>

```

## blur زمانی اتفاق میوفتد که یک المنت فکوس خود را از دست بدهد
### code
```js
$(selector).blur(function (e) { 
    e.preventDefault();
    
  });
```
### example
```html
<!DOCTYPE html>
<html>
<head>
<script src="jquery.main.js"></script>
<script>
$(document).ready(function(){
  $("input").blur(function(){
    alert("This input field has lost its focus.");
  });
});
</script>
</head>
<body>

Enter your name: <input type="text">
<p>Write something in the input field, and then click outside the field to lose focus (blur).</p>

</body>
</html>
```

## change زمانی اتفاق میوفتد که یک المنت مقدار خو را از دست بدهد
### code
```js
  $(selector).change(function (e) { 
    e.preventDefault();
    
  });
```
### example
```html
<!DOCTYPE html>
<html>
<head>
<script src="jquery.main.js"></script>
<script>
$(document).ready(function(){

  $("input").change(function(){
    alert("The text has been changed.");
  });
});
</script>
</head>
<body>

<input type="text">

<p>Write something in the input field, and then press enter or click outside the field.</p>

</body>
</html>

```
## click زمانی که روی عنصر کلیک شد
### code
```js
  $(selector).click(function (e) { 
    e.preventDefault();
    
  });
```
### example
```html
<!DOCTYPE html>
<html>
<head>
<script src="jquery.main.js"></script>
<script>
$(document).ready(function(){
  $("p").click(function(){
    alert("The paragraph was clicked.");
  });
});
</script>
</head>
<body>

<p>Click on this paragraph.</p>

</body>
</html>
```
## css برای تغییر مقادیر css یک شی
### code
```js
$(selector).css(propertyName, value);
```
### example
```html
<!DOCTYPE html>
<html>
<head>
<script src="jquery.main.js"></script>
<script>
$(document).ready(function(){
  $("button").click(function(){
    alert("Background color = " + $("p").css("background-color"));
  });
  
});
</script>
</head>
<body>

<h2>This is a heading</h2>

<p style="background-color:#ff0000">This is a paragraph.</p>
<p style="background-color:#00ff00">This is a paragraph.</p>
<p style="background-color:#0000ff">This is a paragraph.</p>

<button>Return background-color of p</button>

</body>
</html>
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
  $("button").click(function(){
    $("p").css({"background-color": "yellow", "font-size": "200%"});
  });
});
</script>
</head>
<body>

<h2>This is a heading</h2>

<p style="background-color:#ff0000">This is a paragraph.</p>
<p style="background-color:#00ff00">This is a paragraph.</p>
<p style="background-color:#0000ff">This is a paragraph.</p>

<p>This is a paragraph.</p>

<button>Set multiple styles for p</button>

</body>
</html>

```
## dblclick زمانی اتفاق میوفتد که رو یک المان دو بار کلیک شود
### code
```js
  $("p").dblclick(function(){
    alert("The paragraph was double-clicked.");
  });
```
### example
```html
<!DOCTYPE html>
<html>
<head>
<script src="jquery.main.js"></script>
<script>
$(document).ready(function(){
  $("p").dblclick(function(){
    alert("The paragraph was double-clicked.");
  });
});
</script>
</head>
<body>

<p>Double-click on this paragraph.</p>

</body>
</html>
```

## empty() برای حذف فرزندان اون المنت
### code
```js
$(selector).empty();
```
### example
```html
<!DOCTYPE html>
<html>
<head>
<script src="jquery.main.js"></script>
<script>
$(document).ready(function(){
  $("button").click(function(){
    $("div").empty();
  });
});
</script>
</head>
<body>

<div style="height:100px;background-color:yellow">
  This is some text
  <p>This is a paragraph inside the div.</p>
</div>

<p>This is a paragraph outside the div.</p>

<button>Remove content of the div element</button>

</body>
</html>
```
## eq برای انتخاب index مشخص
### code
```js
  $("p").eq(1).css("background-color", "yellow");
```
### example
```html
<!DOCTYPE html>
<html>
<head>
<script src="jquery.main.js"></script>
<script>
$(document).ready(function(){
  $("p").eq(1).css("background-color", "yellow");
  
});
</script>
</head>
<body>

<h1>Welcome to My Homepage</h1>

<p>My name is Donald (index 0).</p>
<p>Donald Duck (index 1).</p>
<p>I live in Duckburg (index 2).</p>
<p>My best friend is Mickey (index 3).</p>

</body>
</html>
```
## fadeToggle افکت تاری
### code
```js
$("#fadetoggle").click(function(){
                $("#txt1").fadeToggle()
            })
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
    <script src="jquery.main.js"></script>
    <script>
        $(document).ready(function(){
            $("#fadetoggle").click(function(){
                $("#txt1").fadeToggle()
            })
            $("#show").click(function(){
                $("#txt2").fadeIn()
            })
            $("#hide").click(function(){
                $("#txt2").fadeOut()
            })
        })
    </script>
</head>
<body>
    <span><button id="fadetoggle" style="background-color: rgba(39, 39, 39, 0.427);">hide in show</button><div style="background-color: rgba(39, 39, 39, 0.427);" id="txt1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, dolor.</div></span>
    <span>
        <button id="show" style="background-color: rgba(39, 39, 39, 0.427);">show</button>
        <button id="hide" style="background-color: rgba(39, 39, 39, 0.427);">hide</button>
        <div id="txt2" style="background-color: rgba(39, 39, 39, 0.427);">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, similique.</div>
    </span>
</body>
</html>
```
## focus زمانی اتفاق میوفتد که یک المنت فکوس شود
### code
```js
  $(selector).focus(function (e) { 
    e.preventDefault();
  });
```
### example
```html
<!DOCTYPE html>
<html>
<head>
<script src="jquery.main.js"></script>
<script>
$(document).ready(function(){
  $("input").focus(function(){
    $("span").css("display", "inline").fadeOut(2000);
  });
  $(selector).focus(function (e) { 
    e.preventDefault();
  });
});
</script>
<style>
span {
  display: none;
}
</style>
</head>
<body>

<input>

<span>Nice to meet you!</span>
<p>Click in the input field to get focus.</p>

</body>
</html>
```
## html برای تفییر تکست یا پاراگراف
### code
```js
            $(selector).html(htmlString);
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
    <script src="jquery.main.js"></script>
    <script>
        $(document).ready(function(){
            $("#edit").click(function(){
                $("#txt").html("hi mr aryan")
                $("#txt2").html("hi mr aryan")
            })
            $("#see").click(function(){
               var see = $("#txt").html()
               var see1 = $("#txt2").html()
               alert(see)
            })

        });
    </script>
</head>
<body>
    <p id="txt">hi mr armin</p>
    <p id="txt2"></p>
    <button id="edit" onc>edit</button>
    <button id="see" onc>see</button>
</body>
</html>
```
## keyup and keydown(برای زمانی که یک کلید پایین امد یا بالا رفت)
### code
```js
  $("input").keydown(function(){
    $("input").css("background-color", "yellow");
  });
  $("input").keyup(function(){
    $("input").css("background-color", "pink");
  });
```
### example
```html
<!DOCTYPE html>
<html>
<head>
<script src="jquery.main.js"></script>
<script>
$(document).ready(function(){
  $("input").keydown(function(){
    $("input").css("background-color", "yellow");
  });
  $("input").keyup(function(){
    $("input").css("background-color", "pink");
  });
});
</script>
</head>
<body>

Enter your name: <input type="text">

<p>Enter your name in the input field above. It will change background color on keydown and keyup.</p>

</body>
</html>
```
## mouseenter and mouseleave(وقتی نشان گر موس روی یک عنصر انتخاب شده باشد زمانی که روی ان نباشد)
### code
```js
  $("p").mouseenter(function(){
    $("p").css("background-color", "yellow");
  });
  $("p").mouseleave(function(){
    $("p").css("background-color", "lightgray");
  });
```
### example
```html
<!DOCTYPE html>
<html>
<head>
<script src="jquery.main.js"></script>
<script>
$(document).ready(function(){
  $("p").mouseenter(function(){
    $("p").css("background-color", "yellow");
  });
  $("p").mouseleave(function(){
    $("p").css("background-color", "lightgray");
  });
});
</script>
</head>
<body>

<p>Move the mouse pointer over this paragraph.</p>

</body>
</html>
```
## parent(برای مقدار دهی به والد یک کد)
### code
```js
  $("span").parent().css({"color": "red", "border": "2px solid red"});
```
### example
```html
<!DOCTYPE html>
<html>
<head>
<style>
.ancestors * { 
  display: block;
  border: 2px solid lightgrey;
  color: lightgrey;
  padding: 5px;
  margin: 15px;
}
</style>
<script src="jquery.main.js"></script>
<script>
$(document).ready(function(){
  $("span").parent().css({"color": "red", "border": "2px solid red"});
});
</script>
</head>

<body class="ancestors">body (great-great-grandparent)
  <div style="width:500px;">div (great-grandparent)
    <ul>ul (grandparent)  
      <li>li (direct parent)
        <span>span</span>
      </li>
    </ul>   
  </div>
</body>

</html>
```
## parents(برای دادن کد به والد های یک کد )
### code
```js
  $("span").parents().css({"color": "red", "border": "2px solid red"});
```
### example
```html
<!DOCTYPE html>
<html>
<head>
<style>
.ancestors * { 
  display: block;
  border: 2px solid lightgrey;
  color: lightgrey;
  padding: 5px;
  margin: 15px;
}
</style>
<script src="jquery.main.js"></script>
<script>
$(document).ready(function(){
  $("span").parents().css({"color": "red", "border": "2px solid red"});
});
</script>
</head>

<body class="ancestors">body (great-great-grandparent)
  <div style="width:500px;">div (great-grandparent)
    <ul>ul (grandparent)  
      <li>li (direct parent)
        <span>span</span>
      </li>
    </ul>   
  </div>
</body>

<!-- The outer red border, before the body element, is the html element (also an ancestor) -->
</html>
```
## remove class(حذف کردن کلاس)
### code
```js
    $(selector).removeClass(className);
```
### example
```html
<!DOCTYPE html>
<html>
<head>
<script src="jquery.main.js"></script>
<script>
$(document).ready(function(){
  $("button").click(function(){
    $("p").removeClass("intro");
  });
});
</script>
<style>
.intro {
  font-size: 120%;
  color: red;
}
</style>
</head>
<body>

<h1>This is a heading</h1>

<p class="intro">This is a paragraph.</p>
<p class="intro">This is another paragraph.</p>

<button>Remove the "intro" class from all p elements</button>

</body>
</html>
```
## remove(برای حذف متود انتخاب شده)
### code
```js
    $("p").remove();
```
### example
```html
<!DOCTYPE html>
<html>
<head>
<script src="jquery.main.js"></script>
<script>
$(document).ready(function(){
  $("button").click(function(){
    $("p").remove();
  });
});
</script>
</head>
<body>

<p>This is a paragraph.</p>
<p>This is another paragraph.</p>

<button>Remove all p elements</button>

</body>
</html>
```
## resize(زمانی اتفاق میوفتد که یک پنجره تغیر اندازه پیدا کند)
### code
```js
  $(window).resize(function(){
    $("span").text(x += 1);
  });
```
### example
```html
<!DOCTYPE html>
<html>
<head>
<script src="jquery.main.js"></script>
<script>
var x = 0;
$(document).ready(function(){
  $(window).resize(function(){
    $("span").text(x += 1);
  });
});
</script>
</head>
<body>

<p>Window resized <span>0</span> times.</p>
<p>Try resizing your browser window.</p>

</body>
</html>

```
## scroll(زمانی اتفاق میوفتد که کاربر روی صفه پیمایش میکند)
### code
```js
  $("div").scroll(function(){
    $("span").text( x+= 1);
  });
```
### example
```html
<!DOCTYPE html>
<html>
<head>
<script src="jquery.main.js"></script>
<script>
var x = 0;
$(document).ready(function(){
  $("div").scroll(function(){
    $("span").text( x+= 1);
  });
});
</script>
</head>
<body>

<p>Try the scrollbar in the div</p>

<div style="border:1px solid black;width:200px;height:100px;overflow:scroll;">In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since.
<br><br>
'Whenever you feel like criticizing anyone,' he told me, just remember that all the people in this world haven't had the advantages that you've had.'
</div>

<p>Scrolled <span>0</span> times.</p>

</body>
</html>
```
## slidetoggle(افکت کشویی نمایش و پنهان)
### code
```js
 $("#fadetoggle").click(function(){
                $("#txt1").slideToggle()
            })
 $("#show").click(function(){
     $("#txt2").slideDown()
 })
 $("#hide").click(function(){
     $("#txt2").slideUp()
 })
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
    <script src="jquery.main.js"></script>
    <script>
        $(document).ready(function(){
            $("#fadetoggle").click(function(){
                $("#txt1").slideToggle()
            })
            $("#show").click(function(){
                $("#txt2").slideDown()
            })
            $("#hide").click(function(){
                $("#txt2").slideUp()
            })
        })
    </script>
</head>
<body>
    <span><button id="fadetoggle" style="background-color: rgba(39, 39, 39, 0.427);">hide in show</button><div style="background-color: rgba(39, 39, 39, 0.427);" id="txt1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, dolor.</div></span>
    <span>
        <button id="show" style="background-color: rgba(39, 39, 39, 0.427);">show</button>
        <button id="hide" style="background-color: rgba(39, 39, 39, 0.427);">hide</button>
        <div id="txt2" style="background-color: rgba(39, 39, 39, 0.427);">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, similique.</div>
    </span>
</body>
</html>
```
## submit(زمانی اتفاق میوفتد که یک فرم ارسال شود)
### code
```js
  $("form").submit(function(){
    alert("Submitted");
  });
```
### example
```html
<!DOCTYPE html>
<html>
<head>
<script src="jquery.main.js"></script>
<script>
$(document).ready(function(){
  $("form").submit(function(){
    alert("Submitted");
  });
});
</script>
</head>
<body>

<form action="">
  First name: <input type="text" name="FirstName" value="Mickey"><br>
  Last name: <input type="text" name="LastName" value="Mouse"><br>
  <input type="submit" value="Submit">
</form> 

</body>
</html>
```
## text (تغیر نوشته یک سطر )
### code
```js
    $("p").text("Hello world!");
```
### example
```html
<!DOCTYPE html>
<html>
<head>
<script src="jquery.main.js"></script>
<script>
$(document).ready(function(){
  $("button").click(function(){
    $("p").text("Hello world!");
  });
});
</script>
</head>
<body>

<button>Set text content for all p elements</button>

<p>This is a paragraph.</p>
<p>This is another paragraph.</p>

</body>
</html>
```
## toggle(پنهان کردن و نمایش دادن )
### code
```js
$("p").toggle();
```
### example
```html
<!DOCTYPE html>
<html>
<head>
<script src="jquery.main.js"></script>
<script>
$(document).ready(function(){
  $("button").click(function(){
    $("p").toggle();
  });
});
</script>
</head>
<body>

<p>This is a paragraph.</p>

<button>Toggle between hide() and show()</button>

</body>
</html>
```
## val ( دریافت متن نوشته شده در اینپوت )
### code
```js
$("input").val()
```
### example
```html
<!DOCTYPE html>
<html>
<head>
<script src="jquery.main.js"></script>
<script>
$(document).ready(function(){
  $("button").click(function(){
    alert($("input").val())
  });
});
</script>
</head>
<body>

<p>Name: <input type="text" name="user"></p>

<button>Set the value of the input field</button>

</body>
</html>

```