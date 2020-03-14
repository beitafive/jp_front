<template>
  <div class="goods-nav" >
    <img src="@/assets/img/list_title.png" />
    <div class="list w-flex">
      <div v-for="(item, index) in goodsList" :key="index" class="nav-item" :style="{ color: selectIndex === index ? '#FF575E' : '' }" @click="toGoods(item)">
        {{item.title}}
        <div class="icon" v-if="selectIndex === index"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'goodsNav',
    data () {
      return {
        selectIndex: '',
        goodsList: []
      }
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
            this.checkIndex(this.$route.params.id)
          }
        })
      },
      checkIndex (id) {
        for (let i = 0, len = this.goodsList.length; i < len; i++) {
          if (id === this.goodsList[i].id) {
            this.selectIndex = i
          }
        }
      },
      toGoods (item) {
        this.checkIndex(item.id)
        this.$router.replace(`/goods/${item.id}`)
        this.$emit('callback')
      }
    }
  }
</script>

<style scoped lang="scss">
  .goods-nav {
    width: 320px;  text-align: left; top: 55px;
    img {
      width: 110px; height: 96px; margin-bottom: 56px;
    }
    .list {
      flex-direction: column;
      align-items: flex-start;
      .nav-item {
        margin-bottom: 24px; padding: 3px 8px 3px 0; position: relative; cursor: pointer;
        .icon {
          position: absolute; right: 0; bottom: 2px; width: 0px; height: 0px; border-width: 2px; border-style: solid; border-color: transparent #FF575E #FF575E transparent;
        }
      }
    }
  }
</style>
