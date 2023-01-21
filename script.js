//overlay
function openNav() {
    document.getElementById("myNav").style.width = "100%";
    document.body.style.overflow = 'hidden'
}

function closeNav() {
    document.body.style.overflowY = 'scroll'
    document.getElementById("myNav").style.width = "0%";
}


let $ = document
let numbers = $.querySelectorAll('.numbers')
let mainDiv = $.querySelector('.counter-main')
let offsetDiv = mainDiv.offsetTop
let startCounter = false

window.addEventListener('scroll', function(event) {
    let scrollWindowY = window.scrollY
    if (scrollWindowY >= offsetDiv) {
        if (!startCounter) {
            numbers.forEach(numbers => setCounter(numbers))
        }
        startCounter = true
    }
})

function setCounter(num) {
    let timer = setInterval(function() {
        if (num.innerHTML == num.dataset.counter) {
            clearInterval(timer)
        }
        num.innerHTML++
    }, 5)
}


let loader = $.querySelector('.loader')
let main = $.querySelector('main')

window.addEventListener('load', function() {
    loader.classList.add('hidden')
    main.classList.remove('hidden')
})