import { carpetsList } from './carpets.js'

const swiperWrapper = document.querySelector('.swiper-wrapper')

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 'auto',
  spaceBetween: 40,
  centeredSlides: true,
  grabCursor: true,
  updateOnWindowResize: false,
})

new Promise((resolve, reject) => {
  carpetsList.slice(0).reverse().forEach((product, index) => {
    swiper.appendSlide(
      `<div key="${product.id}" class="swiper-slide">
        <div class="product-image">
          <img src="img/${product.img}.jpg" alt="${product.title}">
        </div>
  
        <div class="product-info">
          <h1 class="product-title">${product.title}</h1>
          <p class="product-desc">${product.desc}<br>${product.shape} | ${product.cor}</p>
          <span class="product-price">R$ ${product.price}</span>
  
          <section class="product-options">
            <i class="fas fa-heart"></i>
            <a href="#carpetInfo">Encomendar</a>
          </section>
        </div>
      </div>`
    )
    
  })
  
  resolve()
}).then(() => {
  
  setTimeout(() => {swiperWrapper.style.visibility = 'visible'}, 300)
})

const iconsEl = document.querySelectorAll('.product-options > i')
iconsEl.forEach(icon => {
  icon.addEventListener('click', () => {
    icon.classList.toggle('icon-clicked')
    icon.classList.toggle('icon-clicked-effect')
  })
})