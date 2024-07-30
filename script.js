let tl = gsap.timeline()
tl.from('#one',{
    y: -1000
})
tl.to("#one",{
    y: 0,
    duration: 0.25
})
tl.from('#two',{
    y: -1000
})
tl.to("#two",{
    y: 0,
    duration: 0.25
})
tl.from('#three',{
    y: -1000
})
tl.to("#three",{
    y: 0,
    duration: 0.25
})
tl.to('#loader',{
    opacity: 0,
    duration: 0.4,
});
tl.to('#loader',{
    display: 'none'
})

const dynamicText = document.querySelector("h2 > span")
const words = ["Good!","Tasty!","Amazing!","Savory!"]

let wordIndex = 0
let charIndex = 0
let isDeleting = false

const typeEffect = () => {
    const currentWord = words[wordIndex]
    const currentChar = currentWord.substring(0,charIndex)
    dynamicText.textContent = currentChar
    dynamicText.classList.add("stop-blinking")

    if(!isDeleting && charIndex < currentWord.length){
        // typing the next character
        charIndex++
        setTimeout(typeEffect,200)
    }
    else if(isDeleting && charIndex>0){
        // remove the previous character
        charIndex--
        setTimeout(typeEffect, 200)
    }
    else{
        // when the word is deleted, switching to the next word
        isDeleting = !isDeleting
        dynamicText.classList.remove("stop-blinking")
        wordIndex = !isDeleting ? (wordIndex+1) % words.length : wordIndex
        setTimeout(typeEffect, 1200)
    }
}

typeEffect()

const button = document.querySelector(".btn")
button.addEventListener("click", drawRipple)

function drawRipple(event){
    const x = event.clientX - event.target.offsetLeft
    const y = event.clientY - event.target.offsetTop

    const ripples = document.createElement("span")
    ripples.style.left = x + "px"
    ripples.style.top = y + "px"

    this.appendChild(ripples)

    setTimeout(()=>{
        ripples.remove()
    },1000)
}