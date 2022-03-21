document.querySelector('#mode').addEventListener('change', function() {
    if(this.checked) {
        document.documentElement.setAttribute('data-theme', 'dark')
        var moon = document.getElementById('moon')
        moon.innerHTML = feather.icons['sun']
    } else {
        document.documentElement.setAttribute('data-theme', 'light')
        var moon = document.getElementById('moon')
        moon.innerHTML = feather.icons['moon']
    }
})