

  const container = document.querySelector('.container-slide')
  const slides = document.querySelectorAll('.box-slide')
  const btnPrev = document.querySelector('.btn-prev')
  const btnNext = document.querySelector('.btn-next')

  let currentIndex = 0

  function updateSlide() {
    const slideWidth = slides[0].offsetWidth;
    container.style.transform = `translateX(-${currentIndex * slideWidth}px)`
  }

  btnNext.addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {
      currentIndex++
      updateSlide()
    }
  })

  btnPrev.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--
      updateSlide()
    }
  })

  // Garante que funcione mesmo se o tamanho do card mudar
  window.addEventListener('resize', updateSlide)




