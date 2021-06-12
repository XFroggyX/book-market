<template>
    <div class="cart_space nav-decoration">
        <section class="cart">
            <div>Коичество книг: {{this.$store.getters.count}}</div>
            <div>Сумма: {{this.$store.getters.price}}</div>
        </section>
        <div>
            <button class="btn btn-outline-dark btn-cart" @click="clearCard">Очитстить</button>
            <button class="btn btn-outline-dark btn-cart" @click="buyProduct">Купить</button>
        </div>
    </div>
</template>

<script>
export default {
  name: "Cart",
    methods: {
        clearCard(event) {
            this.$store.commit('clear_cart');
        },
        buyProduct(event) {
            this.$http.post('/carts/add_sum')
        }
    },
  data() {
      return {

      }
  }
}
</script>
