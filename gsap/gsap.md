# install gsap npn
```cmd
npm install gsap
```
## import gsap from 'gsap'

# gsap style

# gsap element
## to() برای این که بگیم از همین استایلی که داره به ی استایل دیگه تغییر کنه
```js
gsap.to()
```
## timeline() برای این که ی عملیات ایجاد کنیم و چند تا عمل  به صورت پشت سر هم تکرار شوند
### gsap.timeline({style}); برای این که بگیم بعد از چه عملی فرایند شروع به کار بکنه
```js
          var tl = gsap.timeline({delay:3,paused:true});
// paused:true برای این که بگیم وقتی عملیات انجام شد دوباره از اول شروع نشه
```
### بعد عملیات هایی که داریم رو به اون متغیری که تعریف کردیم میدیم
```js
          tl.to(`.char2-${i}`, {opacity:0 ,duration: 0.5});
```
### و در اخر بهش این کد رو میدیم که شزوع به کار کنه
```js
tl.play()
```
# import ScrollTrigger in vue
## اول خود gsap رو نصب میکنیم 
## بعد اون رو ایمپورت میکنیم
## بعد با کد زیر ScrollTrigger رو ایمپورت میکنیم
```js
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
```
