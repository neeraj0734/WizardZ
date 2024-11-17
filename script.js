function page1Animation() {
    var tl = gsap.timeline()
    var h1 = document.querySelector(".center-part1 h1")

    var h1Text = h1.textContent
    var splittedText = h1Text.split(" ");


    var clutter = ""

    splittedText.forEach((element) => {
        clutter += `<span>${element}</span> `
        console.log(clutter)
    })

    h1.innerHTML = clutter

    tl.from("#nav h1, #nav h4, #nav button", {
        y: -30,
        opacity: 0,
        duration: 1,
        delay: 1,
        stagger: .2
    })

    tl.from(".center-part1 h1 span, .center-part1 p, .center-part1 button, .center-part2 img", {
        opacity: 0,
        x: -10,
        duration: 1,
        stagger: .2
    }, "-=2")

    tl.from(".sectionbottom img", {
        y: 30,
        opacity: 0,
        duration: .6,
        stagger: .2
    })
}

function page2Animation() {

    var tl2 = gsap.timeline(
        {
            scrollTrigger: {
                trigger: ".section2",
                scroller: "body",
                start: "top 80%",
                end: "top 0%",
                scrub: 1
            }
        }
    )
    tl2.from(".services h1", {
        x: -100,
        opacity: 0,
    })
    tl2.from(".services p", {
        x: -100,
        opacity: 0
    })

    tl2.from(".element.line1.left", {
        x: -100,
        opacity: 0
    }, "anim1")
    tl2.from(".element.line1.right", {
        x: 100,
        opacity: 0
    }, "anim1")

    tl2.from(".element.line2.left", {
        x: -100,
        opacity: 0
    }, "anim2")
    tl2.from(".element.line2.right", {
        x: 100,
        opacity: 0
    }, "anim2")
    tl2.from(".element.line3.left", {
        x: -100,
        opacity: 0
    }, "anim3")
    tl2.from(".element.line3.right", {
        x: 100,
        opacity: 0
    }, "anim3")
}
function page3Animation() {
    var h1 = document.querySelector(".section3 .container-part1 h1")
    var h1Text = h1.textContent

    var clutter = ""

    var splittedText = h1Text.split(" ")

    splittedText.forEach((element) => {
        clutter += `<span>${element}</span> `

    })
    h1.innerHTML = clutter

    var tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section3 .container",
            scroller: "body",
            start: "top 80%",
            end: "top 40%",
            scrub: 2,
        }
    })
    tl3.from(".container-part1 h1 span", {
        opacity: 0,
        duration: 1,
        delay: 1,
        stagger: .2,
    }, "anim")
    tl3.from(".section3 .container-part2 img", {
        x: 100,
        opacity: 0,

    }, "+=.5")
    tl3.from(".section3 .container-part1 p", {
        x: -100,
        opacity: 0,
    })
    tl3.from(".section3 .container-part1 button", {
        x: -100,
        opacity: 0,
    })


}

function footer(){
    
}
page1Animation();
page2Animation();
page3Animation();
footer();

var tl4 = gsap.timeline({
    scrollTrigger:{
        trigger:"footer",
        scroller:"body",
        markers:true,
        scrub:2,
        start:"top 80%",
        end:"top 30%",
    }
})

tl4.from(".footer-part1 h1",{
    x:-100,
    opacity:0,
})
tl4.from(".footer-part1 p",{
    x:-100,
    opacity:0,
})
tl4.from(".footerlist p",{
    x:-50,
    opacity:0
})
tl4.from(".footerlist h4",{
    x:-50,
    opacity:0
})