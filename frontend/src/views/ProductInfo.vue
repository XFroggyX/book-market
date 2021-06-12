<template>
  <div>
    <div class="container container-position product">
      <div class="box">
        <div class="product-content">
          <div>
              <img :src="item.image" alt="">
              <div class="price">
                <b>{{item.price}}$</b>
                <button class="btn btn-outline-dark w-60 btn-cart" @click="addToCart">
                  Купить
                </button>
              </div>
          </div>
            <div>
              <span class="product-author"><router-link :to="{name: 'AuthorCatalog'}">{{item.author}}</router-link></span>
              <h1><router-link :to="{name: 'ProductInfo'}">{{item.book_name}}</router-link></h1>
              <p>Классика русской литературы «Война и мир» гордо носит заслуженное именование «роман-эпопея». Огромное количество проработанных персонажей, которые практически полностью раскрывают характерные человеческие типажи Российской Империи начала девятнадцатого века, и детальное изложение исторических событий Отечественной войны 1812 года, тесно переплетающихся с судьбами героев, придают роману ценность не только художественного, но и исторического произведения.</p>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
let click = 0
export default {
  name: "ProductInfo",
  props: ['item'],
    data() {
        return {
            item: null
        }
    },
    created() {
        const id = this.$route.params.id
        this.$http.get('/products/list/' + id)
            .then((response) => this.item = response.data)
    },
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
