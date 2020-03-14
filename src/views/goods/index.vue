<template>
  <div class="goods-page w-flex">
    <goods-nav @callback="getInfo" />
    <div class="goods-info w-flex">
      <goods-review />
    </div>
  </div>
</template>

<script>
  import { goodsNav, goodsReview } from './components'
  export default {
    name: 'list',
    data () {
      return {
        info: {},
        index: 0
      }
    },
    components: {
      goodsNav,
      goodsReview
    },
    methods: {
      getInfo () {
        this.index = 0
        this.$http(this.$api.goods.detail,{
          id: this.$route.params.id
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .goods-page {
    padding-top: 30px;
    .goods-info {
      width: 838px;
      margin-left: auto;
    }
  }
</style>
