
function test(container,text){
    let con = $(container)
    con.css("display","flex")
    let characters = text.split('');
    for(let i = 0 ;i < characters.length;i++){
        if(characters[i] == ' '){
  jQuery('<div>', {
class:  `char-${i} char2`,
title: '',
html: "&nbsp;"
}).appendTo(con);
}else{
  jQuery('<div>', {
class:  `char-${i} char2`,
title: '',
text:characters[i],
}).appendTo(con);
}
var tl = gsap.timeline({paused:true})
tl.from(`.char-${i}`,{x:"-100",duration: 1,opacity:0,delay:`1.${i}`})
tl.play()
}
}