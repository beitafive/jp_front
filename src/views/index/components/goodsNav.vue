<template>
  <div class="goods-nav" :style="{position: scrollTop > 380 ? 'fixed' : 'absolute'}">
    <img src="@/assets/img/list_title.png" />
    <div class="list w-flex">
      <a v-for="(item, index) in list" :key="index" class="nav-item" :href="'#goods'+index" :style="{ color: selectIndex === index ? '#FF575E' : '' }">
        {{item.title}}
        <div class="icon" v-if="selectIndex === index"></div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'goodsNav',
    props: {
      list: {
        type: Array,
        default() {
          return []
        }
      }
    },
    computed:{
      scrollTop () {
        return this.$store.getters.getScrollTop
      },
      selectIndex () {
        let index = Math.ceil((this.scrollTop - 480) / 486)
        return index > this.list.length ? this.list.length - 1 : index < 0 ?  0 : index
      }
    },
    methods: {

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
          position: absolute; right: 0; bottom: 0; width: 1px; height: 4px; border-left: 4px solid #FF575E; background: #FF575E; border-color: transparent #FF575E #FF575E;
        }
      }
    }
  }
</style>
