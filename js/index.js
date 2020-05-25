const crocheList = [
  { id: '001', title: 'Flappy Bird', desc: 'Tapete para Banheiro',
      cor: 'Azul e Branco', shape: 'Diversos', price: '20,00', img: 'croche-1' },
  { id: '002', title: 'Orange', desc: 'Tapete para Banheiro',
      cor: 'Laranja e Branco', shape: 'Diversos', price: '20,00', img: 'croche-2' },
  { id: '003', title: 'Hexagon', desc: 'Tapete para Cozinha',
      cor: 'Vinho e Cinza', shape: 'Hexágonos', price: '40,00', img: 'croche-3' },
  { id: '004', title: 'Pista', desc: 'Tapete para Corredor',
      cor: 'Preto e Branco', shape: 'Oval', price: '15,00', img: 'croche-4' },
  { id: '005', title: 'Flower', desc: 'Tapete para Sala',
      cor: 'Rosa', shape: 'Hexágono', price: '35,00', img: 'croche-5' },
  { id: '006', title: 'Nuvem', desc: 'Tapete para Corredor',
      cor: 'Azul e Branco', shape: 'Oval', price: '20,00', img: 'croche-6' },
  { id: '007', title: 'Quadro', desc: 'Tapete para Banheiro',
      cor: 'Preto e Branco', shape: 'Diversos', price: '25,00', img: 'croche-7' },
  { id: '008', title: 'Minnie', desc: 'Tapete para Banheiro',
      cor: 'Preto e Vermelho', shape: 'Redondo', price: '50,00', img: 'croche-8' },
  { id: '009', title: 'Mickey', desc: 'Tapete para Banheiro',
      cor: 'Preto e Azul', shape: 'Redondo', price: '25,00', img: 'croche-9' },
  { id: '010', title: 'Sunflower', desc: 'Tapete para Banheiro',
      cor: 'Amarelo e Preto', shape: 'Estrela', price: '70,00', img: 'croche-10' },
  { id: '011', title: 'Corujinha', desc: 'Jogo de Banheiro',
      cor: 'Verde Claro/Escuro', shape: 'Redondo', price: '38,00', img: 'croche-11' },
]

const swiperWrapper = document.querySelector('.swiper-wrapper')

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 'auto',
  spaceBetween: 40,
  centeredSlides: true,
  grabCursor: true,
  updateOnWindowResize: false,
})

new Promise((resolve, reject) => {
  crocheList.slice(0).reverse().forEach(product => {
    swiper.appendSlide(
      `<div class="swiper-slide">
        <div class="product-image">
          <img src="img/${product.img}.jpg" alt="${product.title}">
        </div>
  
        <div class="product-info">
          <h1 class="product-title">${product.title}</h1>
          <p class="product-desc">${product.desc}<br>${product.shape} | ${product.cor}</p>
          <span class="product-price">R$ ${product.price}</span>
  
          <section class="product-options">
            <i class="fas fa-heart"></i>
            <a href="#">Comprar</a>
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