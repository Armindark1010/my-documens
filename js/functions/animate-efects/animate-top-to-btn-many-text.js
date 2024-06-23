async function animate(container,texts){
    let con = $(container)
    for(let i = 0;i < texts.length;i++){
        await sleep(1000)
        con.html(texts[i])
        gsap.to(con,{y:"0",duration: 1,opacity:1})
        console.log(i)
        if (i === texts.length - 1) {
    i = -1; // برای شروع مجدد از اول آرایه
}
        await sleep(2000)
        gsap.to(con,{duration: 0.5,opacity:0})
        await sleep(500)
        gsap.to(con,{y:"-100%",duration: 0.5,opacity:0})
    }
}
async function sleep(ms) {
return new Promise(resolve => setTimeout(resolve, ms));
}