<template>
  <div class="luna-index w-flex">
    <goods-nav :list="goodsList" />
    <div class="goods-list">
      <goods-card v-for="(item, index) in goodsList" :key="index" :id="'goods'+index" :info="item"/>
    </div>
  </div>
</template>

<script>
  import { goodsNav, goodsCard } from './components'
  export default {
    name: 'list',
    data () {
      return {
        goodsList: []
      }
    },
    components: {
      goodsNav,
      goodsCard
    },
    mounted () {
      this.getList()
    },
    methods: {
      getList () {
        this.$http(this.$api.goods.list, {
          lang: this.$i18n.locale
        }).then(res => {
          if (res) {
            this.goodsList = res.data.list
          }
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .luna-index{
    margin-top: 20px; position: relative;
    .goods-list {
      width: 838px;
      background: #F9F9F9;
      margin-left: auto;
      padding: 72px 16px 56px;
    }
  }
</style>
