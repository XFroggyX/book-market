<template>
    <div class="book">
        <router-link :to="{name: 'ProductInfo', params: {id: item.id}}">
            <img :src="item.image" alt="">
        </router-link>
            <div>
                <router-link :to="{name: 'ProductInfo', params: {id: item.id}}">
                    <span class="author"><router-link :to="{name: 'AuthorCatalog'}">{{item.author}}</router-link></span>
                    <h5><router-link :to="{name: 'ProductInfo'}">{{item.book_name}}</router-link></h5>
                </router-link>
                <div>
                    <router-link :to="{name: 'ProductInfo', params: {id: item.id}}">
                        <b>{{item.price}}$</b>
                    </router-link>
                    <button class="btn btn-outline-dark w-60 btn-cart" @click="addToCart">
                        Купить
                    </button>
                </div>
            </div>
    </div>
</template>

<script>
export default {
  name: "Product",
  props: ['item'],
  methods: {
    addToCart(event) {
        event.target.classList.toggle('button-dark-clicked')
        this.$store.commit('increment', this.item.price);
    }
  }
}
</script>
