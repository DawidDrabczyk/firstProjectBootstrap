
const nav = document.querySelector('.navbar-collapse')

document.addEventListener('click', function(){

    if(nav.classList.contains('show')) {
        nav.classList.remove('show')
    }

})