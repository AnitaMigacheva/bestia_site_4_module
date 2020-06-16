
let burger = document.querySelector('.burger')
let menu = document.querySelector('.menu')
let page = document.getElementsByTagName('body')[0]
let icons = document.querySelector('.header_top_icons')

burger.addEventListener('click', function() {
burger.classList.toggle('burger-open')
if (burger.className == 'burger burger-open') {
    menu.classList.toggle('menu-open')
    page.classList.add('noscroll')
    icons.style.background = 'none'
  } else {
    menu.classList.remove('menu-open')
    page.classList.remove('noscroll')
  }
})

window.addEventListener('resize', function(event){
  if (window.innerWidth <= 500) {
    swiper.changeDirection("horizontal");
  }
});
