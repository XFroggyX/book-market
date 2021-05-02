<template>
  <div>
    <div class="book">
      <img src="img/book2.jpg" alt="">
      <div>
        <span class="author"><router-link :to="{name: 'AuthorCatalog'}">Лев Толстой</router-link></span>
        <h5><router-link :to="{name: 'ProductInfo'}">Война и мир</router-link></h5>
        <div>
          <b>1900$</b>
          <button class="btn btn-outline-dark w-60 btn-cart" @click="addToCart">
            Купить
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
let click = 0
export default {
  name: "Product",
  props: ['item'],
  methods: {
    addToCart(event) {
      if (click === 0) {
        event.target.classList.remove('btn-outline-dark')
        event.target.classList.add('btn-dark')
        click = 1
      } else {
        event.target.classList.remove('btn-dark')
        event.target.classList.add('btn-outline-dark')
        click = 0
      }

    }
  }

}
</script>
