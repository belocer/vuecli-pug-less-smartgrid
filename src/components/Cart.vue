<template lang="pug">
    .main
        h1 Корзина
        p.qty-product Количество товаров в корзине: {{ qty }}
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    data() {
      return {
      }
    },
    computed: {
      ...mapState(['countCart']),
      qty(state) {
        return state.countCart
      }
    }
  }
</script>

<style scoped lang="less">
    @import './../assets/smart-grid.less';

    h1 {
        margin-top: 50px;
        font-size: 2rem;
        text-align: center;
    }

    .qty-product {
        margin-top: 60px;
        font-size: 1.5rem;
    }

</style>