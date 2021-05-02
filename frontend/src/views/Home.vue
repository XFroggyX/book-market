<template>
  <div>
    <div class="container container-position">
      <span class="h-text"><h1>Бестселлеры</h1></span>
      <div class="book-container rounded">
        <div v-for="item in items">
        <Product :item="item"></Product>
        </div>
      </div>

      <span class="h-text"><h1>Вам может понравиться</h1></span>
      <div class="book-container rounded">
        <div v-for="item in items">
          <Product :item="item"></Product>
        </div>
      </div>

      <Carousel></Carousel>

      <span class="h-text"><h1>Новое на Book-swamp</h1></span>
      <div class="book-container rounded">
        <div v-for="item in items">
          <Product :item="item"></Product>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Product from "@/components/product/Product";
import Carousel from "@/components/Carousel";
export default {
  name: 'Home',
  components: {
    Carousel,
    Product
  },
  data() {
    return {
      items: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    }
  }
}
</script>
