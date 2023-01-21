function openNav() {
    document.body.style.overflowY = 'hidden'
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.body.style.overflowY = 'scroll'
    document.getElementById("myNav").style.height = "0%";
}