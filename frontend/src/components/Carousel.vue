<template>
  <div>
    <div id="carouselExampleDark" class="carousel carousel-dark slide books-slider" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="10000">
          <img src="img/slider.jpg" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <img src="img/book.jpg" alt="">
            <h5>Война и мир</h5>
            <p>Небо Аустерлица</p>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img src="img/slider.jpg" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <img src="img/book.jpg" alt="">
            <h5>Война и мир</h5>
            <p>Небо Аустерлица</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="img/slider.jpg" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <img src="img/book.jpg" alt="">
            <h5>Война и мир</h5>
            <p>Небо Аустерлица</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"  data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Предыдущий</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"  data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Следующий</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  mounted() {
    let recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js' )
    document.head.appendChild(recaptchaScript)
  }
}
</script>
