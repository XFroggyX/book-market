<template>
  <div>
    <div class="container mt-4">
      <h1 class="mb-4">Расширеный поиск</h1>
      <div class="row">
        <section class="col-md-3">
          <div class="mb-4">
            <h5>Жанр</h5>
            <select class="form-control">
              <option>Романтика</option>
              <option>Фантастика</option>
              <option>Военные</option>
            </select>
          </div>
        </section>
        <section class="col-md-9">
          <div class="row">
            <div class="col-md-4" v-for="item in items">
              <div class="box">
                <div class="position-center">
                  <Product :item="item"></Product>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import Product from "@/components/product/Product";
export default {
  name: "AuthorCatalog",
  components: {
    Product
  },
    data() {
        return {
            items: []
        }
    },
    created() {
        this.$http.get('/products/list')
            .then((response) => this.items = response.data)
    }
}
</script>

