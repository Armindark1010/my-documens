# cdn
```js
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/gsap.min.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/ScrollTrigger.min.js"></script>
```
# body
```js
gsap.to(eliment-edited, {
});
```
# speed
```js
gsap.to(icon, {
    duration: speed number,
})
```
# edit-css
```js
gsap.to(icon, {

    duration: 1,

    opacity:1,
    
    height: "100%",
});

```
# start and stop
```js
gsap.to(icon, {

    duration: 1,

    opacity:1,

    scrollTrigger: {

        trigger: box,

        start: "0 50%",

        end: "0 50%",

        markers: true,

        toggleActions:"restart none reverse none"

    }

});
```