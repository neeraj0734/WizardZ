var tl = gsap.timeline()
var h1 = document.querySelector(".center-part1 h1")
console.log(h1Text)
var h1Text = h1.textContent
var splittedText = h1Text.split(" ");
console.log(splittedText)

var clutter = ""

splittedText.forEach((element)=>{
    clutter += `<span>${element}</span> `
    console.log(clutter)
})

h1.innerHTML = clutter

tl.from("#nav h1, #nav h4, #nav button",{
    y: -30,
    opacity:0,
    duration:1,
    delay:1,
    stagger:.2
})

tl.from(".center-part1 h1 span, .center-part1 p, .center-part1 button, .center-part2 img",{
    opacity:0,
    x:-10,
    duration: 1,
    stagger:.2
}, "-=2" )

tl.from(".sectionbottom img",{
    y:30,
    opacity:0,
    duration:.6,
    stagger: .2
})