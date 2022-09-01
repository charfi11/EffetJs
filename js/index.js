window.addEventListener('scroll', () => {
    if(window.scrollY > 30) {
        document.getElementById('card').scrollTop = 500
    }
    else {
        document.getElementById('card').scrollTop = 0
    }
})