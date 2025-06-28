let crsr = document.querySelector('#cursor')
let blury = document.querySelector('#cursorBlur')
document,addEventListener('mousemove',function(de){
    crsr.style.top=de.y+'px'
    crsr.style.left=de.x+'px'
    blury.style.top=de.y-200+'px'
    blury.style.left=de.x-200+'px'
    
})


console.log('hii')



gsap.to('#nav',{
    backgroundColor:'#000',
    duration:0.5,
    height:'100px',
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%", 
        end:"top -11%",
        scrub:1
    }
})
gsap.to('#main',{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:'#main',
        scroller:'body',
        start:'top -50%',
        end:'top -100%',
        scrub:2
    }
})