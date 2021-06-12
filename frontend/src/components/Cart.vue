<template>
    <section class="cart">
        <div>Коичество книг: {{this.$store.getters.count}}</div>
        <div>Сумма: {{this.$store.getters.price}}</div>
    </section>
</template>

<script>
export default {
  name: "Cart",
  data() {
      return {

      }
  },
    created() {
      this.$http.get('/cart/list')
        .then((response) => {
            this.count = response.data.count
            this.total = response.data.total
        })
    }
}
</script>
