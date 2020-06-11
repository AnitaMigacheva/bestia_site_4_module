
let burger = document.querySelector('.burger')
let menu = document.querySelector('.menu')
let page =document.getElementsByTagName('body')[0]

burger.addEventListener('click', function() {
burger.classList.toggle('burger-open')
if (burger.className == 'burger burger-open') {
    menu.classList.toggle('menu-open')
    page.classList.add('noscroll')
  } else {
    menu.classList.remove('menu-open')
    page.classList.remove('noscroll')
  }
})
